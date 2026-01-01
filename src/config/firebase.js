// Firebase configuration
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  getRedirectResult,
  signOut 
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBtC41YV8I-AjXxZCR5bFMzqUqu08DUm1o",
  authDomain: "anking-globe.firebaseapp.com",
  projectId: "anking-globe",
  storageBucket: "anking-globe.firebasestorage.app",
  messagingSenderId: "615376842",
  appId: "1:615376842:web:your_app_id"
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

export const checkRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const token = await result.user.getIdToken();
      return { user: result.user, token };
    }
    return null;
  } catch (error) {
    console.error('Redirect result error:', error);
    return null;
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const getCurrentToken = async () => {
  if (auth.currentUser) {
    return await auth.currentUser.getIdToken();
  }
  return null;
};

export default app;
