// Firebase configuration
// IMPORTANT: Replace these values with your own from Firebase Console!
// Go to: Firebase Console → Project Settings → Your apps → Web app → Config

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBtC41YV8I-AjXxZCR5bFMzqUqu08DUm1o",
  authDomain: "anking-globe.firebaseapp.com",
  projectId: "anking-globe",
  storageBucket: "anking-globe.firebasestorage.app",
  messagingSenderId: "785867037636",
  appId: "1:785867037636:web:cbbb46ed040a2332bae291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Google Auth
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();
    return { user: result.user, token };
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign-out error:', error);
    throw error;
  }
};

export const getCurrentToken = async () => {
  if (auth.currentUser) {
    return await auth.currentUser.getIdToken();
  }
  return null;
};

export default app;
