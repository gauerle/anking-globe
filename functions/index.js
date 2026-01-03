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
  const projectId = process.env.GCLOUD_PROJECT || process.env.GCP_PROJECT;
  const functionUrl = `https://us-central1-${projectId}.cloudfunctions.net/api`;
  
  const approveUrl = `${functionUrl}/auth/email-action?action=approve&email=${encodeURIComponent(userEmail)}`;
  const denyUrl = `${functionUrl}/auth/email-action?action=deny&email=${encodeURIComponent(userEmail)}`;
  
  console.log('sendAccessRequestEmail: Sending to', admins.join(', '));
  
  const mailOptions = {
    from: `"AnKing Globe" <${emailUser}>`,
    to: admins.join(', '),
    subject: `🌐 New Access Request: ${userName}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🌐 New Access Request</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px;">
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
            ${userPicture ? `<img src="${userPicture}" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 15px;" alt="Profile">` : ''}
            <h2 style="margin: 0 0 10px 0; color: #333;">${userName}</h2>
            <p style="margin: 0; color: #666; font-size: 14px;">${userEmail}</p>
          </div>
          
          <p style="color: #555; margin-bottom: 25px; text-align: center;">
            This user is requesting access to the AnKing Globe admin panel.
          </p>
          
          <div style="text-align: center;">
            <a href="${approveUrl}" style="display: inline-block; background: #28a745; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; margin: 0 10px 10px 0;">
              ✓ Approve
            </a>
            <a href="${denyUrl}" style="display: inline-block; background: #dc3545; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; margin: 0 0 10px 10px;">
              ✗ Reject
            </a>
          </div>
          
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 25px;">
            You can also manage requests from the admin panel.
          </p>
        </div>
      </div>
    `
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('sendAccessRequestEmail: SUCCESS - Message ID:', info.messageId);
    return true;
  } catch (error) {
    console.error('sendAccessRequestEmail: FAILED -', error.message);
    console.error('sendAccessRequestEmail: Full error:', JSON.stringify(error, null, 2));
    return false;
  }
}

// Send welcome email to newly approved user
async function sendWelcomeEmail(userEmail, userName) {
  const emailUser = emailUserSecret.value();
  const emailPass = emailPassSecret.value();
  
  console.log('sendWelcomeEmail: Starting for', userEmail);
  
  if (!emailUser || !emailPass) {
    console.log('sendWelcomeEmail: Missing email credentials');
    return false;
  }
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
  
  try {
    await transporter.verify();
    console.log('sendWelcomeEmail: SMTP connection verified');
  } catch (verifyError) {
    console.error('sendWelcomeEmail: SMTP verification failed:', verifyError.message);
    return false;
  }
  
  const mailOptions = {
    from: `"AnKing Globe" <${emailUser}>`,
    to: userEmail,
    subject: `🎉 Welcome to the AnKing Globe!`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🌐 Welcome to the Globe!</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
            <h2 style="margin: 0 0 15px 0; color: #333;">Hi ${userName}! 👋</h2>
            <p style="color: #555; margin: 0 0 20px 0; line-height: 1.6;">
              Great news! Your access request has been approved. You can now access the AnKing Globe admin panel to manage your profile and connect with the community.
            </p>
            <a href="https://gauerle.github.io/anking-globe/" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 35px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              Visit the Globe
            </a>
          </div>
          
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 25px;">
            Thank you for being part of the AnKing community!
          </p>
        </div>
      </div>
    `
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('sendWelcomeEmail: SUCCESS - Message ID:', info.messageId);
    return true;
  } catch (error) {
    console.error('sendWelcomeEmail: FAILED -', error.message);
    return false;
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
  console.log('auth/google called');
  const user = await verifyAuth(req);
  if (!user) {
    console.log('auth/google: Invalid token');
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  console.log('auth/google: User verified:', user.email);
  const userDoc = await db.collection('users').doc(user.email).get();
  
  if (userDoc.exists) {
    console.log('auth/google: User exists, status:', userDoc.data().status);
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
  
  console.log('auth/google: NEW USER - creating document');
  // New user - check if they're an admin (auto-approve)
  const admins = await getAdmins();
  console.log('auth/google: Admins list:', admins);
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
  
  // Send email notification to admins for pending user
  console.log('auth/google: Sending email notification for', user.email);
  const emailSent = await sendAccessRequestEmail(user.email, user.name, user.picture);
  console.log('auth/google: Email sent result:', emailSent);
  
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
  const userDoc = await db.collection('users').doc(email.toLowerCase()).get();
  const userData = userDoc.exists ? userDoc.data() : {};
  
  await db.collection('users').doc(email.toLowerCase()).update({
    status: 'approved',
    approvedAt: admin.firestore.FieldValue.serverTimestamp(),
    approvedBy: user.email
  });
  
  // Send welcome email
  await sendWelcomeEmail(email, userData.username || email);
  
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
      <meta http-equiv="refresh" content="0;url=${appUrl}?${params.toString()}">
      <script>window.location.href = "${appUrl}?${params.toString()}";</script>
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

// Export the Express app as a Firebase Cloud Function (v2)
// Include secrets so they're available at runtime
exports.api = onRequest({ 
  cors: true,
  secrets: [emailUserSecret, emailPassSecret]
}, app);