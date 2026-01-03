// API configuration for Firebase backend

const API_BASE = 'https://api-efgn5mw6aq-uc.a.run.app';

export function getImageUrl(filename) {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  return `https://storage.googleapis.com/anking-globe.appspot.com/cards/${filename}`;
}

export async function fetchCards() {
  const response = await fetch(`${API_BASE}/cards`);
  if (!response.ok) throw new Error('Failed to fetch cards');
  return response.json();
}

export { API_BASE };
