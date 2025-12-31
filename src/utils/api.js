// API configuration for Firebase backend
// TODO: Replace with your Cloud Functions URL after deploying!

const API_BASE = 'https://us-central1-anking-globe.cloudfunctions.net/api';
// For local development with emulator:
// const API_BASE = 'http://localhost:5001/YOUR_PROJECT/us-central1/api';

export function getImageUrl(filename) {
  if (!filename) return '';
  // If it's already a full URL (Firebase Storage)
  if (filename.startsWith('http')) return filename;
  // If it's a storage path - update YOUR_PROJECT with your project ID
  return `https://storage.googleapis.com/anking-globe.appspot.com/cards/${filename}`;
}

export async function fetchCards() {
  const response = await fetch(`${API_BASE}/cards`);
  if (!response.ok) throw new Error('Failed to fetch cards');
  return response.json();
}

export { API_BASE };
