const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Define secrets for email
const emailUserSecret = defineSecret('EMAIL_USER');
const emailPassSecret = defineSecret('EMAIL_PASS');

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

// Send email notification for new access request
async function sendAccessRequestEmail(userEmail, userName, userPicture) {
  console.log('sendAccessRequestEmail called for:', userEmail);
  
  // Get secrets at runtime
  const emailUser = emailUserSecret.value();
  const emailPass = emailPassSecret.value();
  
  console.log('Email config:', { 
    hasUser: !!emailUser, 
    hasPass: !!emailPass,
    user: emailUser ? emailUser.substring(0, 5) + '...' : 'NOT SET'
  });
  
  if (!emailUser || !emailPass) {
    console.log('sendAccessRequestEmail: Email credentials not configured');
    return false;
  }
  
  // Create transporter at runtime with explicit Gmail settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
  
  console.log('sendAccessRequestEmail: Transporter created, verifying...');
  
  // Verify connection
  try {
    await transporter.verify();
    console.log('sendAccessRequestEmail: SMTP connection verified');
  } catch (verifyError) {
    console.error('sendAccessRequestEmail: SMTP verification failed:', verifyError.message);
    return false;
  }
  
  const admins = await getAdmins();
  console.log('sendAccessRequestEmail: Admin emails:', admins);
  
  if (admins.length === 0) {
    console.log('sendAccessRequestEmail: No admin emails configured in Firestore');
    return false;
  }
  
  // Get the function URL base (for approve/deny links)
  const baseUrl = process.env.FUNCTION_TARGET 
    ? `https://${process.env.GCLOUD_PROJECT}.cloudfunctions.net/api`
    : 'http://localhost:5001/anking-globe/us-central1/api';
  
  const approveUrl = `${baseUrl}/auth/email-action?action=approve&email=${encodeURIComponent(userEmail)}`;
  const denyUrl = `${baseUrl}/auth/email-action?action=deny&email=${encodeURIComponent(userEmail)}`;
  
  const mailOptions = {
    from: `"AnkiHub Viz" <${emailUser}>`,
    to: admins.join(','),
    subject: `🌍 New Access Request: ${userName || userEmail}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%); border-radius: 16px; padding: 32px; color: white;">
          <h1 style="margin: 0 0 24px 0; font-size: 24px;">🌍 New Access Request</h1>
          
          <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            ${userPicture ? `<img src="${userPicture}" alt="" style="width: 64px; height: 64px; border-radius: 50%; margin-bottom: 12px;">` : ''}
            <p style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">${userName || 'Unknown User'}</p>
            <p style="margin: 0; color: rgba(255,255,255,0.7);">${userEmail}</p>
          </div>
          
          <p style="color: rgba(255,255,255,0.8); margin-bottom: 24px;">
            This user is requesting access to the AnkiHub Viz admin panel.
          </p>
          
          <div style="display: flex; gap: 12px;">
            <a href="${approveUrl}" style="display: inline-block; background: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              ✓ Approve
            </a>
            <a href="${denyUrl}" style="display: inline-block; background: #ef4444; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              ✕ Deny
            </a>
          </div>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 16px; text-align: center;">
          AnkiHub Viz Notification
        </p>
      </div>
    `
  };
  
  try {
    console.log('sendAccessRequestEmail: Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('sendAccessRequestEmail: Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('sendAccessRequestEmail: Failed to send email:', error.message);
    return false;
  }
}

// Send welcome email to approved user
async function sendWelcomeEmail(userEmail, userName) {
  const emailUser = emailUserSecret.value();
  const emailPass = emailPassSecret.value();
  
  if (!emailUser || !emailPass) return false;
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: emailUser, pass: emailPass }
  });
  
  const appUrl = 'https://gauerle.github.io/anking-globe/';
  
  const mailOptions = {
    from: `"AnkiHub Viz" <${emailUser}>`,
    to: userEmail,
    subject: '🎉 Welcome to AnkiHub Viz!',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%); border-radius: 16px; padding: 32px; color: white;">
          <h1 style="margin: 0 0 24px 0; font-size: 24px;">🎉 You're Approved!</h1>
          
          <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin-bottom: 24px;">
            Hi ${userName || 'there'},<br><br>
            Great news! Your request to access the AnkiHub Viz admin panel has been approved.
          </p>
          
          <a href="${appUrl}" style="display: inline-block; background: #9333ea; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
            Open AnkiHub Viz →
          </a>
          
          <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin-top: 24px;">
            You can now add and manage member pins on the globe.
          </p>
        </div>
      </div>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch {
    return false;
  }
}

// ============ AUTHENTICATION ============

// Check auth status
app.post('/auth/check', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ status: 'none' });
  }
  
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(token);
    const email = decoded.email?.toLowerCase();
    
    if (!email) return res.json({ status: 'none' });
    
    const admins = await getAdmins();
    if (admins.includes(email)) {
      return res.json({ status: 'approved', isAdmin: true });
    }
    
    const userDoc = await db.collection('users').doc(email).get();
    if (!userDoc.exists) {
      return res.json({ status: 'none' });
    }
    
    const userData = userDoc.data();
    return res.json({ 
      status: userData.status || 'pending',
      isAdmin: false
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return res.json({ status: 'error' });
  }
});

// Request access
app.post('/auth/request', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(token);
    const email = decoded.email?.toLowerCase();
    
    if (!email) return res.status(400).json({ error: 'No email' });
    
    const admins = await getAdmins();
    if (admins.includes(email)) {
      return res.json({ status: 'approved', isAdmin: true });
    }
    
    const userDoc = await db.collection('users').doc(email).get();
    if (userDoc.exists) {
      return res.json({ status: userDoc.data().status });
    }
    
    // Create pending request
    const userData = {
      email,
      username: decoded.name || email,
      picture: decoded.picture || '',
      status: 'pending',
      requestedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    await db.collection('users').doc(email).set(userData);
    
    // Try to send notification email
    console.log('Attempting to send access request email...');
    const emailSent = await sendAccessRequestEmail(email, decoded.name, decoded.picture);
    console.log('Email send result:', emailSent);
    
    res.json({ status: 'pending', emailSent });
  } catch (error) {
    console.error('Request access error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get pending users (admin only)
app.get('/users/pending', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(token);
    const admins = await getAdmins();
    
    if (!admins.includes(decoded.email?.toLowerCase())) {
      return res.status(403).json({ error: 'Admin only' });
    }
    
    const snapshot = await db.collection('users').where('status', '==', 'pending').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get approved users (admin only)
app.get('/users/approved', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(token);
    const admins = await getAdmins();
    
    if (!admins.includes(decoded.email?.toLowerCase())) {
      return res.status(403).json({ error: 'Admin only' });
    }
    
    const snapshot = await db.collection('users').where('status', '==', 'approved').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// Approve user (admin only)
app.post('/users/:email/approve', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(token);
    const admins = await getAdmins();
    
    if (!admins.includes(decoded.email?.toLowerCase())) {
      return res.status(403).json({ error: 'Admin only' });
    }
    
    const email = decodeURIComponent(req.params.email).toLowerCase();
    const userDoc = await db.collection('users').doc(email).get();
    
    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const userData = userDoc.data();
    
    await db.collection('users').doc(email).update({
      status: 'approved',
      approvedAt: admin.firestore.FieldValue.serverTimestamp(),
      approvedBy: decoded.email
    });
    
    // Send welcome email
    await sendWelcomeEmail(email, userData.username || email);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Approve error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Deny/delete user (admin only)
app.delete('/users/:email', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(token);
    const admins = await getAdmins();
    
    if (!admins.includes(decoded.email?.toLowerCase())) {
      return res.status(403).json({ error: 'Admin only' });
    }
    
    const email = decodeURIComponent(req.params.email).toLowerCase();
    
    // Prevent deleting admins
    if (admins.includes(email)) {
      return res.status(400).json({ error: 'Cannot delete admin' });
    }
    
    await db.collection('users').doc(email).delete();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// Revoke user access (admin only)
app.post('/users/:email/revoke', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(token);
    const admins = await getAdmins();
    
    if (!admins.includes(decoded.email?.toLowerCase())) {
      return res.status(403).json({ error: 'Admin only' });
    }
    
    const email = decodeURIComponent(req.params.email).toLowerCase();
  
    // Prevent revoking admin access
    if (admins.includes(email)) {
      return res.status(400).json({ error: 'Cannot revoke admin access' });
    }
  
    await db.collection('users').doc(email).delete();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// Email action endpoint - handles clicks from email approve/deny buttons
app.get('/auth/email-action', async (req, res) => {
  const { action, email } = req.query;
  
  if (!action || !email || !['approve', 'deny'].includes(action)) {
    return res.status(400).send(generateActionPage('error', 'Invalid request parameters'));
  }
  
  const userEmail = decodeURIComponent(email).toLowerCase();
  
  try {
    const userDoc = await db.collection('users').doc(userEmail).get();
    
    if (!userDoc.exists) {
      return res.send(generateActionPage('error', 'User not found or already processed'));
    }
    
    const userData = userDoc.data();
    
    if (userData.status !== 'pending') {
      return res.send(generateActionPage('info', `This request has already been ${userData.status}`));
    }
    
    if (action === 'approve') {
      await db.collection('users').doc(userEmail).update({
        status: 'approved',
        approvedAt: admin.firestore.FieldValue.serverTimestamp(),
        approvedBy: 'email-action'
      });
      
      // Send welcome email
      await sendWelcomeEmail(userEmail, userData.username || userEmail);
      
      return res.send(generateActionPage('success', `${userData.username || userEmail} has been approved!`));
    } else {
      await db.collection('users').doc(userEmail).delete();
      return res.send(generateActionPage('success', `Request from ${userData.username || userEmail} has been rejected.`));
    }
  } catch (error) {
    console.error('Email action error:', error);
    return res.status(500).send(generateActionPage('error', 'An error occurred processing this request'));
  }
});

// Redirect to admin panel with status message
function generateActionPage(type, message, username) {
  const appUrl = 'https://gauerle.github.io/anking-globe/';
  const params = new URLSearchParams({
    notification: type,
    message: message
  });
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta http-equiv="refresh" content="0;url=${appUrl}#${params.toString()}">
      <script>window.location.href = "${appUrl}#${params.toString()}";</script>
    </head>
    <body>Redirecting...</body>
    </html>
  `;
}

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
    res.json([]);
  }
});

// ============ CARDS CRUD ============

// Get all cards (public)
app.get('/cards', async (req, res) => {
  try {
    const snapshot = await db.collection('cards').get();
    const cards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(cards);
  } catch {
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
});

// Create card (authenticated)
app.post('/cards', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    await admin.auth().verifyIdToken(token);
    
    const { name, title, university, location, lat, lng, image, starColor } = req.body;
    if (!name || !location || lat === undefined || lng === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const cardData = {
      name,
      title: title || '',
      university: university || '',
      location,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      image: image || '',
      starColor: starColor || '#9333ea',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    const docRef = await db.collection('cards').add(cardData);
    res.json({ id: docRef.id, ...cardData });
  } catch (error) {
    console.error('Create card error:', error);
    res.status(500).json({ error: 'Failed to create card' });
  }
});

// Update card (authenticated)
app.put('/cards/:id', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    await admin.auth().verifyIdToken(token);
    
    const { id } = req.params;
    const { name, title, university, location, lat, lng, image, starColor } = req.body;
    
    const updateData = {
      name,
      title: title || '',
      university: university || '',
      location,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      image: image || '',
      starColor: starColor || '#9333ea',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    await db.collection('cards').doc(id).update(updateData);
    res.json({ id, ...updateData });
  } catch (error) {
    console.error('Update card error:', error);
    res.status(500).json({ error: 'Failed to update card' });
  }
});

// Delete card (authenticated)
app.delete('/cards/:id', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    await admin.auth().verifyIdToken(token);
    
    const { id } = req.params;
    await db.collection('cards').doc(id).delete();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Failed to delete card' });
  }
});

// ============ GROUPS CRUD ============

// Get all groups (public)
app.get('/groups', async (req, res) => {
  try {
    const snapshot = await db.collection('groups').orderBy('name').get();
    const groups = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(groups);
  } catch (error) {
    console.error('Get groups error:', error);
    res.status(500).json({ error: 'Failed to fetch groups' });
  }
});

// Create group (authenticated)
app.post('/groups', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    await admin.auth().verifyIdToken(token);
    
    const { name, memberIds, color } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Group name required' });
    }
    
    const groupData = {
      name,
      memberIds: memberIds || [],
      color: color || '#9333ea',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    const docRef = await db.collection('groups').add(groupData);
    res.json({ id: docRef.id, ...groupData });
  } catch (error) {
    console.error('Create group error:', error);
    res.status(500).json({ error: 'Failed to create group' });
  }
});

// Update group (authenticated)
app.put('/groups/:id', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    await admin.auth().verifyIdToken(token);
    
    const { id } = req.params;
    const { name, memberIds, color } = req.body;
    
    const updateData = {
      name,
      memberIds: memberIds || [],
      color: color || '#9333ea',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    await db.collection('groups').doc(id).update(updateData);
    res.json({ id, ...updateData });
  } catch (error) {
    console.error('Update group error:', error);
    res.status(500).json({ error: 'Failed to update group' });
  }
});

// Delete group (authenticated)
app.delete('/groups/:id', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    await admin.auth().verifyIdToken(token);
    
    const { id } = req.params;
    await db.collection('groups').doc(id).delete();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Failed to delete group' });
  }
});

// ============ IMAGE STORAGE ============

// Upload image
app.post('/images/upload', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const token = authHeader.split('Bearer ')[1];
    await admin.auth().verifyIdToken(token);
    
    const { filename, data } = req.body;
    if (!filename || !data) {
      return res.status(400).json({ error: 'Filename and data required' });
    }
    
    // Extract base64 data
    const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Determine content type
    const ext = filename.split('.').pop().toLowerCase();
    const contentTypes = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };
    const contentType = contentTypes[ext] || 'image/png';
    
    // Generate unique filename
    const uniqueFilename = `cards/${Date.now()}_${filename.replace(/[^a-zA-Z0-9._-]/g, '')}`;
    
    const bucket = storage.bucket();
    const file = bucket.file(uniqueFilename);
    
    await file.save(buffer, {
      metadata: { contentType },
      public: true
    });
    
    await file.makePublic();
    
    const url = `https://storage.googleapis.com/${bucket.name}/${uniqueFilename}`;
    res.json({ url, filename: uniqueFilename });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// List images
app.get('/images', async (req, res) => {
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

// Export the Express app as a Firebase Cloud Function (v2)
// Include secrets so they're available at runtime
exports.api = onRequest({ 
  cors: true,
  secrets: [emailUserSecret, emailPassSecret]
}, app);