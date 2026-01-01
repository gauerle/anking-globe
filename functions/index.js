const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const admin = require('firebase-admin');
const cors = require('cors');

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage();
const app = express();

// CORS - Add your GitHub Pages domain here
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://gauerle.github.io', // TODO: Replace with your GitHub username
];

app.use(cors({ 
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.some(o => origin.startsWith(o))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true 
}));
app.use(express.json({ limit: '10mb' }));

// ============ HELPER FUNCTIONS ============

async function getAdmins() {
  try {
    const doc = await db.collection('config').doc('settings').get();
    if (doc.exists && doc.data().adminEmails) {
      return doc.data().adminEmails.map(e => e.toLowerCase());
    }
    return [];
  } catch {
    return [];
  }
}

async function isAdmin(email) {
  const admins = await getAdmins();
  return admins.includes(email.toLowerCase());
}

async function verifyAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  try {
    const token = authHeader.substring(7);
    const decoded = await admin.auth().verifyIdToken(token);
    return {
      email: decoded.email.toLowerCase(),
      name: decoded.name || decoded.email,
      picture: decoded.picture || ''
    };
  } catch {
    return null;
  }
}

// ============ AUTH ENDPOINTS ============

app.get('/auth/config', (req, res) => {
  res.json({ configured: true, useFirebase: true });
});

app.post('/auth/check', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // Check if user is approved
  const userDoc = await db.collection('users').doc(user.email).get();
  
  if (userDoc.exists) {
    const userData = userDoc.data();
    if (userData.status === 'approved') {
      return res.json({
        status: 'approved',
        isAdmin: await isAdmin(user.email),
        user: { email: user.email, username: user.name, picture: user.picture }
      });
    }
    return res.json({ status: userData.status });
  }
  
  return res.json({ status: 'none' });
});

app.post('/auth/google', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  const userDoc = await db.collection('users').doc(user.email).get();
  
  if (userDoc.exists) {
    const userData = userDoc.data();
    // Update name/picture
    await db.collection('users').doc(user.email).update({
      username: user.name,
      picture: user.picture,
      lastLogin: admin.firestore.FieldValue.serverTimestamp()
    });
    
    if (userData.status === 'approved') {
      return res.json({
        status: 'approved',
        isAdmin: await isAdmin(user.email),
        user: { email: user.email, username: user.name, picture: user.picture }
      });
    }
    return res.json({ status: userData.status });
  }
  
  // New user - check if they're an admin (auto-approve)
  const admins = await getAdmins();
  const isUserAdmin = admins.includes(user.email);
  
  // Create user document
  await db.collection('users').doc(user.email).set({
    email: user.email,
    username: user.name,
    picture: user.picture,
    status: isUserAdmin ? 'approved' : 'pending',
    requestedAt: admin.firestore.FieldValue.serverTimestamp(),
    ...(isUserAdmin && { approvedAt: admin.firestore.FieldValue.serverTimestamp() })
  });
  
  if (isUserAdmin) {
    return res.json({
      status: 'approved',
      isAdmin: true,
      user: { email: user.email, username: user.name, picture: user.picture }
    });
  }
  
  return res.json({ status: 'pending' });
});

app.get('/auth/pending', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user || !(await isAdmin(user.email))) {
    return res.status(403).json({ error: 'Admin access required' });
  }
  
  const pendingSnapshot = await db.collection('users').where('status', '==', 'pending').get();
  const approvedSnapshot = await db.collection('users').where('status', '==', 'approved').get();
  
  const pending = pendingSnapshot.docs.map(doc => doc.data());
  const approved = approvedSnapshot.docs.map(doc => doc.data());
  
  res.json({ pending, approved, admins: await getAdmins() });
});

app.post('/auth/approve', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user || !(await isAdmin(user.email))) {
    return res.status(403).json({ error: 'Admin access required' });
  }
  
  const { email } = req.body;
  await db.collection('users').doc(email.toLowerCase()).update({
    status: 'approved',
    approvedAt: admin.firestore.FieldValue.serverTimestamp(),
    approvedBy: user.email
  });
  
  res.json({ success: true });
});

app.post('/auth/deny', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user || !(await isAdmin(user.email))) {
    return res.status(403).json({ error: 'Admin access required' });
  }
  
  const { email } = req.body;
  await db.collection('users').doc(email.toLowerCase()).delete();
  
  res.json({ success: true });
});

app.post('/auth/revoke', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user || !(await isAdmin(user.email))) {
    return res.status(403).json({ error: 'Admin access required' });
  }
  
  const { email } = req.body;
  const admins = await getAdmins();
  if (admins.includes(email.toLowerCase())) {
    return res.status(400).json({ error: 'Cannot revoke admin access' });
  }
  
  await db.collection('users').doc(email.toLowerCase()).delete();
  res.json({ success: true });
});

// ============ GEOCODING ============

app.get('/geocode', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query required' });
  
  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5&addressdetails=1`,
      { headers: { 'User-Agent': 'AnKingGlobeApp/1.0' } }
    );
    
    if (response.ok) {
      const data = await response.json();
      const results = data.map(item => ({
        display_name: item.display_name,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        type: item.type,
        class: item.class,
        address: item.address
      }));
      res.json(results);
    } else {
      res.json([]);
    }
  } catch {
    res.status(500).json({ error: 'Geocoding failed' });
  }
});

// ============ CARDS ============

app.get('/cards', async (req, res) => {
  try {
    const snapshot = await db.collection('cards').orderBy('created_at', 'desc').get();
    const cards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
});

app.get('/cards/:id', async (req, res) => {
  try {
    const doc = await db.collection('cards').doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ error: 'Not found' });
    res.json({ id: doc.id, ...doc.data() });
  } catch {
    res.status(500).json({ error: 'Failed to fetch card' });
  }
});

app.post('/cards', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });
  
  const userDoc = await db.collection('users').doc(user.email).get();
  if (!userDoc.exists || userDoc.data().status !== 'approved') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  const { name, title, university, location, lat, lng, image } = req.body;
  
  const docRef = await db.collection('cards').add({
    name, title, university, location,
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    image: image || '',
    created_at: admin.firestore.FieldValue.serverTimestamp(),
    created_by: user.email
  });
  
  res.json({ id: docRef.id, name, title, university, location, lat, lng, image });
});

app.put('/cards/:id', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });
  
  const userDoc = await db.collection('users').doc(user.email).get();
  if (!userDoc.exists || userDoc.data().status !== 'approved') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  const { name, title, university, location, lat, lng, image } = req.body;
  
  await db.collection('cards').doc(req.params.id).update({
    name, title, university, location,
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    image: image || '',
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
    updated_by: user.email
  });
  
  res.json({ id: req.params.id, name, title, university, location, lat, lng, image });
});

app.delete('/cards/:id', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });
  
  const userDoc = await db.collection('users').doc(user.email).get();
  if (!userDoc.exists || userDoc.data().status !== 'approved') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  await db.collection('cards').doc(req.params.id).delete();
  res.json({ success: true });
});

// ============ IMAGES ============

app.post('/images/upload', async (req, res) => {
  const user = await verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Authentication required' });
  
  const { filename, data } = req.body;
  if (!filename || !data) {
    return res.status(400).json({ error: 'Filename and data required' });
  }
  
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  const uniqueName = `${Date.now()}-${safeName}`;
  
  const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');
  
  const bucket = storage.bucket();
  const file = bucket.file(`cards/${uniqueName}`);
  
  await file.save(buffer, {
    metadata: { contentType: 'image/png' }
  });
  
  await file.makePublic();
  
  const publicUrl = `https://storage.googleapis.com/${bucket.name}/cards/${uniqueName}`;
  
  res.json({ filename: uniqueName, url: publicUrl });
});

app.get('/images/list', async (req, res) => {
  try {
    const bucket = storage.bucket();
    const [files] = await bucket.getFiles({ prefix: 'cards/' });
    const filenames = files.map(f => f.name.replace('cards/', '')).filter(f => f);
    res.json(filenames);
  } catch {
    res.json([]);
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', firebase: true });
});

// Export the Express app as a Firebase Cloud Function
exports.api = onRequest(app);
