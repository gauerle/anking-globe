import { useState, useEffect, useCallback } from 'react';
import { fetchCards } from '../utils/api';

export function useCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCards = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCards();
      setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  return { cards, loading, error, refetch: loadCards };
}
