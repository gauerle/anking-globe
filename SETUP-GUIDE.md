# 🌍 AnKing Globe - Firebase + GitHub Pages Setup

Complete step-by-step guide to deploy your globe app for FREE.

---

## 📋 Prerequisites

1. **GitHub account** (you already have this)
2. **Google account** (for Firebase)
3. **Node.js 18+** installed on your computer

---

## 🔥 Part 1: Firebase Setup (Backend)

### Step 1.1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Name it: `anking-globe` (or any name)
4. Disable Google Analytics (not needed) → **Create Project**
5. Wait for it to finish → **Continue**

### Step 1.2: Enable Firestore Database

1. In Firebase Console, click **"Build"** → **"Firestore Database"**
2. Click **"Create database"**
3. Select **"Start in test mode"** (we'll secure it later)
4. Choose a location close to you → **Enable**

### Step 1.3: Enable Storage (for images)

1. Click **"Build"** → **"Storage"**
2. Click **"Get started"**
3. Select **"Start in test mode"** → **Next**
4. Choose same location as Firestore → **Done**

### Step 1.4: Enable Authentication

1. Click **"Build"** → **"Authentication"**
2. Click **"Get started"**
3. Click **"Google"** under Sign-in providers
4. Toggle **Enable**
5. Select your email as support email → **Save**

### Step 1.5: Get Firebase Config

1. Click the **gear icon** ⚙️ → **"Project settings"**
2. Scroll down to **"Your apps"**
3. Click the **Web icon** `</>`
4. Register app name: `globe-web`
5. **DON'T** check "Firebase Hosting" yet
6. Click **Register app**
7. **COPY the firebaseConfig** - you'll need this!

It looks like:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "anking-globe.firebaseapp.com",
  projectId: "anking-globe",
  storageBucket: "anking-globe.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Step 1.6: Install Firebase CLI

Open your terminal:

```bash
npm install -g firebase-tools
firebase login
```

This opens a browser - sign in with your Google account.

### Step 1.7: Initialize Firebase in Project

```bash
cd globe-firebase
firebase init
```

When prompted:
1. **Which features?** → Select with Space:
   - ✅ Firestore
   - ✅ Functions
   - ✅ Storage
   - ✅ Hosting
2. **Use existing project** → Select your `anking-globe` project
3. **Firestore Rules file?** → Press Enter (default)
4. **Firestore indexes file?** → Press Enter (default)
5. **Functions language?** → **JavaScript**
6. **ESLint?** → **No**
7. **Install dependencies?** → **Yes**
8. **Public directory?** → Type: `dist`
9. **Single-page app?** → **Yes**
10. **GitHub auto-deploy?** → **No** (we'll use GitHub Pages)
11. **Storage rules file?** → Press Enter (default)

### Step 1.8: Deploy Cloud Functions

```bash
cd functions
npm install cors express
cd ..
firebase deploy --only functions
```

After deployment, you'll get a URL like:
```
https://us-central1-anking-globe.cloudfunctions.net/api
```

**Save this URL!** This is your API endpoint.

---

## 🌐 Part 2: GitHub Pages Setup (Frontend)

### Step 2.1: Update Frontend Config

Edit `src/config/firebase.js` with your Firebase config from Step 1.5.

Edit `src/utils/api.js` and change:
```javascript
const API_BASE = 'https://us-central1-YOUR-PROJECT.cloudfunctions.net/api';
```

### Step 2.2: Build the Frontend

```bash
npm install
npm run build
```

This creates a `dist/` folder.

### Step 2.3: Deploy to GitHub Pages

1. Create a new repo on GitHub: `anking-globe`
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/anking-globe.git
git push -u origin main
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Add to `package.json`:
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/anking-globe",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

5. Deploy:
```bash
npm run deploy
```

6. Go to repo → **Settings** → **Pages** → Should show your site URL!

---

## 🔐 Part 3: Set Your Admin Email

1. Go to Firebase Console → Firestore
2. Click **"Start collection"**
3. Collection ID: `config`
4. Document ID: `settings`
5. Add field:
   - Field: `adminEmails`
   - Type: `array`
   - Value: Add your email

---

## 🔒 Part 4: Secure Your Database

After testing, update Firestore rules:

1. Firebase Console → Firestore → **Rules** tab
2. Replace with the contents of `firestore.rules` file
3. Click **Publish**

Same for Storage:
1. Storage → **Rules** tab
2. Replace with contents of `storage.rules`
3. Click **Publish**

---

## ✅ Testing Checklist

1. [ ] Visit your GitHub Pages URL
2. [ ] Globe loads with markers
3. [ ] Can sign in with Google
4. [ ] Can access admin panel (if your email is admin)
5. [ ] Can add/edit members
6. [ ] Can upload images
7. [ ] Embed mode works (`?embed=true`)

---

## 🆘 Troubleshooting

### "CORS error"
- Make sure your GitHub Pages domain is in the allowed origins in `functions/index.js`

### "Permission denied" on Firestore
- Check Firestore rules
- Make sure you're signed in with admin email

### Images not loading
- Check Storage rules
- Verify storage bucket name in config

### Functions not deploying
- Run `firebase login` again
- Check you're on Blaze plan if using external APIs

---

## 💰 Cost

**Completely FREE** for typical usage:
- GitHub Pages: Free
- Firebase Spark Plan:
  - 50K Firestore reads/day
  - 20K writes/day
  - 5GB Storage
  - 2M Cloud Function invocations/month

You'd need 1000s of daily visitors to exceed this!

---

## 🔄 Updating Your Site

After making changes:

```bash
# Update frontend
npm run deploy

# Update backend functions
firebase deploy --only functions
```

