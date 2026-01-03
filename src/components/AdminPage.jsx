import React, { useState, useEffect, useCallback, useRef } from 'react';
import { auth, signInWithGoogle, signOutUser, getCurrentToken } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { API_BASE, getImageUrl } from '../utils/api';

function parseLocation(address) {
  if (!address) return '';
  if (typeof address === 'object') {
    const parts = [];
    if (address.city || address.town || address.village || address.municipality) parts.push(address.city || address.town || address.village || address.municipality);
    if (address.state || address.region || address.province) parts.push(address.state || address.region || address.province);
    if (address.country) parts.push(address.country);
    return parts.join(', ');
  }
  const fullParts = address.split(',').map(p => p.trim());
  return fullParts.length <= 3 ? address : fullParts.slice(-3).join(', ');
}

function AdminPage({ onBack }) {
  const [authStatus, setAuthStatus] = useState('checking');
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', title: '', university: '', location: '', lat: '', lng: '', image: '' });
  const [geocodeResults, setGeocodeResults] = useState([]);
  const [geocoding, setGeocoding] = useState(false);
  const [availableImages, setAvailableImages] = useState([]);
  
  const [pendingUsers, setPendingUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  const [notification, setNotification] = useState(null);
  
  const fileInputRef = useRef(null);

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        setToken(idToken);
        setCurrentUser({
          email: user.email,
          username: user.displayName || user.email,
          picture: user.photoURL || ''
        });
        checkAuthStatus(idToken);
      } else {
        setToken(null);
        setCurrentUser(null);
        setAuthStatus('none');
      }
    });
    
    return () => unsubscribe();
  }, []);

  const checkAuthStatus = async (idToken) => {
    try {
      const res = await fetch(`${API_BASE}/auth/check`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`
        }
      });
      const data = await res.json();
      if (data.error) {
        setAuthStatus('none');
        return;
      }
      setAuthStatus(data.status);
      setIsAdmin(data.isAdmin || false);
    } catch {
      setAuthStatus('error');
    }
  };

  const handleSignIn = async () => {
    try {
      const { token: idToken } = await signInWithGoogle();
      setToken(idToken);
      
      // Register/check with backend
      const res = await fetch(`${API_BASE}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`
        }
      });
      const data = await res.json();
      setAuthStatus(data.status);
      setIsAdmin(data.isAdmin || false);
    } catch (error) {
      console.error('Sign in error:', error);
      setAuthStatus('error');
    }
  };

  const handleSignOut = async () => {
    await signOutUser();
    setToken(null);
    setCurrentUser(null);
    setAuthStatus('none');
    setIsAdmin(false);
  };

  useEffect(() => {
    if (authStatus === 'approved' && token) {
      loadCards();
      loadImages();
      if (isAdmin) loadPendingUsers();
    }
  }, [authStatus, isAdmin, token]);

  const getAuthHeader = useCallback(() => token ? { 'Authorization': `Bearer ${token}` } : {}, [token]);
  
  const loadCards = async () => {
    try {
      const res = await fetch(`${API_BASE}/cards`);
      setCards(await res.json());
    } catch {}
  };
  
  const loadImages = async () => {
    try {
      const res = await fetch(`${API_BASE}/images/list`);
      setAvailableImages(await res.json());
    } catch {}
  };
  
  const loadPendingUsers = async () => {
    try {
      const res = await fetch(`${API_BASE}/auth/pending`, { headers: getAuthHeader() });
      const data = await res.json();
      setPendingUsers(data.pending || []);
      setApprovedUsers(data.approved || []);
    } catch {}
  };

  const approveUser = async (email) => {
  console.log('approveUser called');
  try {
    await fetch(`${API_BASE}/auth/approve`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...getAuthHeader() }, body: JSON.stringify({ email }) });
    console.log('Setting notification');
    setNotification({ type: 'success', message: `Approved ${email}` });
  } catch (e) {
    console.error('Error:', e);
    setNotification({ type: 'error', message: 'Failed to approve' });
  }
  loadPendingUsers();
  setTimeout(() => setNotification(null), 4000);
};
  
  const denyUser = async (email) => {
  try {
    await fetch(`${API_BASE}/auth/deny`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...getAuthHeader() }, body: JSON.stringify({ email }) });
    setNotification({ type: 'success', message: `Denied ${email}` });
  } catch {
    setNotification({ type: 'error', message: 'Failed to deny' });
  }
  loadPendingUsers();
  setTimeout(() => setNotification(null), 4000);
  };
  
  const revokeUser = async (email) => {
    if (!window.confirm(`Revoke access for ${email}?`)) return;
    await fetch(`${API_BASE}/auth/revoke`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...getAuthHeader() }, body: JSON.stringify({ email }) });
    loadPendingUsers();
  };

  const geocodeLocation = async (query) => {
    if (!query || query.length < 3) { setGeocodeResults([]); return; }
    setGeocoding(true);
    try {
      const res = await fetch(`${API_BASE}/geocode?q=${encodeURIComponent(query)}`);
      setGeocodeResults(await res.json());
    } catch { setGeocodeResults([]); }
    setGeocoding(false);
  };

  const selectGeocode = (result) => {
    let uni = '';
    if (result.type === 'university' || result.class === 'amenity') uni = result.display_name.split(',')[0].trim();
    const loc = result.address ? parseLocation(result.address) : parseLocation(result.display_name);
    setFormData(prev => ({ ...prev, university: uni || prev.university, location: loc, lat: result.lat.toFixed(6), lng: result.lng.toFixed(6) }));
    setGeocodeResults([]);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'university' || field === 'location') {
      clearTimeout(window.geocodeTimeout);
      window.geocodeTimeout = setTimeout(() => geocodeLocation(value), 600);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.match(/^image\/(png|jpe?g|webp)$/)) {
      alert('Please select a PNG, JPG, or WebP image.');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      alert('Image too large. Max 5MB.');
      return;
    }
    
    setUploading(true);
    
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result;
        const res = await fetch(`${API_BASE}/images/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
          body: JSON.stringify({ filename: file.name, data: base64 })
        });
        
        if (res.ok) {
          const data = await res.json();
          setFormData(prev => ({ ...prev, image: data.url || data.filename }));
          await loadImages();
        } else {
          const err = await res.json();
          alert(err.error || 'Upload failed');
        }
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch {
      alert('Upload failed');
      setUploading(false);
    }
    
    e.target.value = '';
  };

  const resetForm = () => {
    setFormData({ name: '', title: '', university: '', location: '', lat: '', lng: '', image: '' });
    setSelectedCard(null);
    setGeocodeResults([]);
  };

  const selectCardForEdit = (card) => {
    setSelectedCard(card);
    setFormData({
      name: card.name || '',
      title: card.title || '',
      university: card.university || '',
      location: card.location || '',
      lat: card.lat?.toString() || '',
      lng: card.lng?.toString() || '',
      image: card.image || ''
    });
  };

  const saveCard = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.location || !formData.lat || !formData.lng) {
      alert('Please fill required fields');
      return;
    }
    
    setLoading(true);
    const payload = { ...formData, lat: parseFloat(formData.lat), lng: parseFloat(formData.lng) };
    
    try {
      if (selectedCard) {
        await fetch(`${API_BASE}/cards/${selectedCard.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', ...getAuthHeader() }, body: JSON.stringify(payload) });
      } else {
        await fetch(`${API_BASE}/cards`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...getAuthHeader() }, body: JSON.stringify(payload) });
      }
      await loadCards();
      resetForm();
    } catch {
      alert('Failed to save');
    }
    setLoading(false);
  };

  const deleteCard = async (cardId) => {
    if (!window.confirm('Delete this member?')) return;
    setLoading(true);
    try {
      await fetch(`${API_BASE}/cards/${cardId}`, { method: 'DELETE', headers: getAuthHeader() });
      await loadCards();
      if (selectedCard?.id === cardId) resetForm();
    } catch {
      alert('Failed to delete');
    }
    setLoading(false);
  };

  // Embed settings
  const [embedHeight, setEmbedHeight] = useState(500);

  const getEmbedUrl = () => {
    // Use the full URL including base path for GitHub Pages
    const baseUrl = window.location.origin + import.meta.env.BASE_URL;
    return `${baseUrl}?embed=true`;
  };

  const generateIframeCode = () => {
    return `<iframe 
  src="${getEmbedUrl()}" 
  width="100%" 
  height="${embedHeight}" 
  frameborder="0" 
  allow="accelerometer; gyroscope"
  style="border-radius: 12px; overflow: hidden;"
></iframe>`;
  };

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(generateIframeCode());
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2000);
  };

  // Auth screens
  if (authStatus === 'checking') return <div className="admin-page"><div className="admin-auth"><div className="auth-loading">Checking authentication...</div></div></div>;

  if (authStatus === 'error') return (
    <div className="admin-page"><div className="admin-auth">
      <button className="back-button" onClick={onBack}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Back to Globe</button>
      <div className="auth-card error"><div className="error-icon">❌</div><h1>Authentication Error</h1><button onClick={handleSignOut}>Try Again</button></div>
    </div></div>
  );

  if (authStatus === 'none') return (
    <div className="admin-page"><div className="admin-auth">
      <button className="back-button" onClick={onBack}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Back to Globe</button>
      <div className="auth-card">
        <h1>Admin Access</h1>
        <p>Sign in with Google to request access.</p>
        <button className="google-sign-in-btn" onClick={handleSignIn}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Sign in with Google
        </button>
        <p className="auth-note">Admins will be notified to approve your request.</p>
      </div>
    </div></div>
  );

  if (authStatus === 'pending') return (
    <div className="admin-page"><div className="admin-auth">
      <button className="back-button" onClick={onBack}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Back to Globe</button>
      <div className="auth-card pending"><div className="pending-icon">⏳</div><h1>Access Pending</h1>
        {currentUser && <div className="pending-user-info">{currentUser.picture && <img src={currentUser.picture} alt="" className="pending-avatar"/>}<p><strong>{currentUser.username}</strong></p><p>{currentUser.email}</p></div>}
        <p>An admin has been notified and will review your request.</p>
        <button className="google-sign-in-btn" onClick={handleSignOut}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Use another account
        </button>
      </div>
    </div></div>
  );

  // Main admin UI
  return (
    <div className="admin-page">
      <div className="admin-header">
        <button className="back-button" onClick={onBack}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Back to Globe</button>
        <h1>Member Management</h1>
        <div className="admin-user">
          {currentUser?.picture && <img src={currentUser.picture} alt="" className="user-avatar"/>}
          <span>{currentUser?.username || currentUser?.email}</span>
          {isAdmin && <span className="admin-badge">Admin</span>}
          {isAdmin && <button className={`user-mgmt-btn ${showUserManagement ? 'active' : ''}`} onClick={() => { setShowUserManagement(!showUserManagement); loadPendingUsers(); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Users{pendingUsers.length > 0 && <span className="pending-count">{pendingUsers.length}</span>}
          </button>}
          <button className="embed-btn" onClick={() => setShowEmbedModal(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Embed
          </button>
          <button className="logout-btn" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>

      {isAdmin && showUserManagement && (
        <div className="user-management-panel">
          <div className="user-section"><h3>Pending ({pendingUsers.length})</h3>
            {pendingUsers.length === 0 ? <p className="no-users">No pending requests</p> : <ul>{pendingUsers.map(u => <li key={u.email}><div className="user-info">{u.picture && <img src={u.picture} alt="" className="list-avatar"/>}<div><span className="user-name">{u.username}</span><span className="user-email">{u.email}</span></div></div><div className="user-actions"><button className="approve" onClick={() => { console.log('clicked'); approveUser(u.email); }}>Approve</button><button className="deny" onClick={() => denyUser(u.email)}>Deny</button></div></li>)}</ul>}
          </div>
          <div className="user-section"><h3>Approved ({approvedUsers.length})</h3>
            <ul>{approvedUsers.map(u => <li key={u.email}><div className="user-info">{u.picture && <img src={u.picture} alt="" className="list-avatar"/>}<div><span className="user-name">{u.username || 'Unknown'}</span><span className="user-email">{u.email}</span></div></div><button className="revoke" onClick={() => revokeUser(u.email)}>Revoke</button></li>)}</ul>
          </div>
        </div>
      )}

      {showEmbedModal && (
        <div className="embed-modal-overlay" onClick={() => setShowEmbedModal(false)}>
          <div className="embed-modal" onClick={e => e.stopPropagation()}>
            <button className="embed-modal-close" onClick={() => setShowEmbedModal(false)}>×</button>
            <h2>🔗 Embed Globe</h2>
            <p className="embed-description">
              Embed the <strong>live globe</strong> on any website. It shows real-time data, 
              with a toggle button to show/hide all cards.
            </p>
            
            <div className="embed-setting">
              <label>Height:</label>
              <div className="embed-height-input">
                <input 
                  type="number" 
                  value={embedHeight} 
                  onChange={e => setEmbedHeight(parseInt(e.target.value) || 500)}
                  min="300"
                  max="1000"
                />
                <span>px</span>
              </div>
            </div>
            
            <div className="embed-preview">
              <div className="embed-preview-header">
                <span>iframe Code</span>
              </div>
              <pre>{generateIframeCode()}</pre>
            </div>
            
            <div className="embed-actions">
              <button className="embed-copy-btn" onClick={copyEmbedCode}>
                {embedCopied ? '✓ Copied!' : '📋 Copy Embed Code'}
              </button>
              <a 
                className="embed-preview-btn" 
                href={getEmbedUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                👁 Preview Embed
              </a>
            </div>
            
            <div className="embed-instructions">
              <h4>How to use:</h4>
              <ul>
                <li><strong>Discourse:</strong> Paste in an HTML block</li>
                <li><strong>Wix:</strong> Add "Embed HTML" element</li>
                <li><strong>WordPress:</strong> Use "Custom HTML" block</li>
              </ul>
              <p className="embed-note">✅ Live data - updates automatically!</p>
            </div>
          </div>
        </div>
      )}

      <div className="admin-content">
        <div className="admin-form-panel">
          <h2>{selectedCard ? 'Edit Member' : 'Add New Member'}</h2>
          <form onSubmit={saveCard}>
            <div className="form-group"><label>Name *</label><input type="text" value={formData.name} onChange={e => handleFormChange('name', e.target.value)} placeholder="John Doe" required/></div>
            <div className="form-group"><label>Title / Role</label><input type="text" value={formData.title} onChange={e => handleFormChange('title', e.target.value)} placeholder="Medical Student..."/></div>
            <div className="form-group"><label>University (type to search)</label><input type="text" value={formData.university} onChange={e => handleFormChange('university', e.target.value)} placeholder="e.g. Harvard Medical School"/>
              {geocoding && formData.university && <div className="geocode-loading">Searching...</div>}
              {geocodeResults.length > 0 && formData.university && <ul className="geocode-results">{geocodeResults.map((r,i) => <li key={i} onClick={() => selectGeocode(r)}><span className="result-name">{r.display_name}</span><span className="result-coords">{r.lat.toFixed(4)}, {r.lng.toFixed(4)}</span></li>)}</ul>}
            </div>
            <div className="form-group"><label>Location * (City, Region, Country)</label><input type="text" value={formData.location} onChange={e => handleFormChange('location', e.target.value)} placeholder="Boston, MA, USA" required/>
              {geocoding && !formData.university && <div className="geocode-loading">Searching...</div>}
              {geocodeResults.length > 0 && !formData.university && <ul className="geocode-results">{geocodeResults.map((r,i) => <li key={i} onClick={() => selectGeocode(r)}><span className="result-name">{r.display_name}</span><span className="result-coords">{r.lat.toFixed(4)}, {r.lng.toFixed(4)}</span></li>)}</ul>}
            </div>
            <div className="form-row">
              <div className="form-group"><label>Latitude *</label><input type="number" step="any" value={formData.lat} onChange={e => handleFormChange('lat', e.target.value)} placeholder="42.3601" required/></div>
              <div className="form-group"><label>Longitude *</label><input type="number" step="any" value={formData.lng} onChange={e => handleFormChange('lng', e.target.value)} placeholder="-71.0589" required/></div>
            </div>
            <div className="form-group">
              <label>Profile Image</label>
              <div className="image-input-row">
                <select value={formData.image} onChange={e => handleFormChange('image', e.target.value)}>
                  <option value="">No image</option>
                  {availableImages.map(img => <option key={img} value={img}>{img}</option>)}
                </select>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/png,image/jpeg,image/webp" style={{display:'none'}}/>
                <button type="button" className="upload-btn" onClick={() => fileInputRef.current?.click()} disabled={uploading}>
                  {uploading ? 'Uploading...' : '📤 Upload'}
                </button>
              </div>
              {formData.image && <div className="image-preview"><img src={getImageUrl(formData.image)} alt="Preview"/></div>}
            </div>
            <div className="form-actions"><button type="submit" className="primary" disabled={loading}>{loading ? 'Saving...' : (selectedCard ? 'Update' : 'Add Member')}</button>{selectedCard && <button type="button" className="secondary" onClick={resetForm}>Cancel</button>}</div>
          </form>
        </div>
        
        <div className="admin-table-panel">
          <div className="table-header"><h2>Members ({cards.length})</h2></div>
          <div className="table-container">
            <table><thead><tr><th>Image</th><th>Name</th><th>Title</th><th>University</th><th>Location</th><th>Lat</th><th>Lng</th><th>Actions</th></tr></thead>
              <tbody>{cards.map(c => <tr key={c.id} className={selectedCard?.id === c.id ? 'selected' : ''} onClick={() => selectCardForEdit(c)}>
                <td className="img-cell">{c.image ? <img src={getImageUrl(c.image)} alt={c.name}/> : <div className="no-image">?</div>}</td>
                <td className="name-cell">{c.name}</td><td>{c.title || '-'}</td><td className="uni-cell">{c.university || '-'}</td><td className="location-cell">{c.location}</td>
                <td className="coord-cell">{c.lat?.toFixed(2)}</td><td className="coord-cell">{c.lng?.toFixed(2)}</td>
                <td className="actions-cell"><button className="edit-btn" onClick={e => { e.stopPropagation(); selectCardForEdit(c); }}>Edit</button><button className="delete-btn" onClick={e => { e.stopPropagation(); deleteCard(c.id); }}>Delete</button></td>
              </tr>)}{cards.length === 0 && <tr><td colSpan="8" className="empty-row">No members yet.</td></tr>}</tbody>
            </table>
          </div>
        </div>
      </div>
      {notification && (
        <div className={`toast-notification ${notification.type}`}>
          {notification.type === 'success' ? '✓' : 'ℹ'} {notification.message}
        </div>
      )}
    </div>
  );
}

export default AdminPage;
