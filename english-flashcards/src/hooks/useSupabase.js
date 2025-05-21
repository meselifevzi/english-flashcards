import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';

export const useSupabase = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('word_cards')
        .select('*')
        .order('card_number', { ascending: true });

      if (error) {
        console.error('Supabase error:', error); // Hata detayını console'da görelim
        throw error;
      }
      
      console.log('Fetched cards:', data); // Gelen veriyi console'da görelim
      setCards(data || []); // Null check ekleyelim
    } catch (err) {
      console.error('Fetch error:', err); // Hata detayını console'da görelim
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addCard = async (cardData) => {
    try {
      const { data, error } = await supabase
        .from('word_cards')
        .insert([cardData])
        .select();

      if (error) throw error;
      setCards([...cards, data[0]]);
      return data[0];
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return { cards, loading, error, fetchCards, addCard };
};