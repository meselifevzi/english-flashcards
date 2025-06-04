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

  const updateVisitorCount = async () => {
    const today = new Date().toISOString().split('T')[0];
    
    try {
      // Önce bugünün kaydını kontrol et
      const { data: existingRecord } = await supabase
        .from('daily_visitors')
        .select('*')
        .eq('visit_date', today)
        .single();

      if (existingRecord) {
        // Kayıt varsa güncelle
        await supabase
          .from('daily_visitors')
          .update({ visit_count: existingRecord.visit_count + 1 })
          .eq('visit_date', today);
      } else {
        // Kayıt yoksa yeni kayıt oluştur
        await supabase
          .from('daily_visitors')
          .insert([{ visit_count: 1, visit_date: today }]);
      }
    } catch (error) {
      console.error('Visitor count update error:', error);
    }
  };

  useEffect(() => {
    fetchCards();
    updateVisitorCount(); // Ziyaretçi sayısını güncelle
  }, []);

  return { cards, loading, error, fetchCards, addCard, updateVisitorCount };
};