import { useState, useEffect, useCallback } from 'react';
import { API_BASE } from '../utils/api';

export function useGroups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGroups = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/groups`);
      if (!res.ok) throw new Error('Failed to fetch groups');
      const data = await res.json();
      setGroups(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups]);

  return { groups, loading, error, refetch: fetchGroups };
}