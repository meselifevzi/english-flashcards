import React, { useState, useMemo } from 'react';
import Card from './Card';
import Navigation from './Navigation';
import LevelFilter from './LevelFilter';
import { useSupabase } from '../hooks/useSupabase';

const CardContainer = ({ darkMode, onDarkModeToggle }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedLevels, setSelectedLevels] = useState(['A1']);
  const { cards, loading, error } = useSupabase();

  // Debug logs
  console.log('Selected Levels:', selectedLevels);
  console.log('All Cards:', cards);

  // Kartları karıştırmak için yardımcı fonksiyon
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Filtrelenmiş ve karıştırılmış kartları hesapla
  const filteredCards = useMemo(() => {
    const filtered = cards.filter(card => selectedLevels.includes(card.level));
    console.log('Filtered Cards:', filtered); // Filtrelenmiş kartları görelim
    return shuffleArray(filtered);
  }, [cards, selectedLevels]);

  const handleNext = () => {
    if (currentCard < filteredCards.length - 1) {
      setCurrentCard(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(prev => prev - 1);
    }
  };

  const handleLevelChange = (level) => {
    setSelectedLevels(prev => {
      let newLevels;
      if (prev.includes(level)) {
        if (prev.length === 1) return prev;
        newLevels = prev.filter(l => l !== level);
      } else {
        newLevels = [...prev, level];
      }
      setCurrentCard(0); // Seviye değiştiğinde ilk karta dön
      return newLevels;
    });
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-500 text-center">Error: {error}</div>;
  if (!filteredCards.length) return <div className="p-4 text-center">No cards found for selected levels</div>;

  const card = filteredCards[currentCard];

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      <LevelFilter 
        selectedLevels={selectedLevels} 
        onLevelChange={handleLevelChange}
        darkMode={darkMode}
        onDarkModeToggle={onDarkModeToggle}
      />
      <Card
        word={card.word}
        level={card.level}
        pronunciation={card.pronunciation}
        meaning={card.meaning}
        example={card.example_sentence}
        example_tr={card.example_sentence_tr}
        cardNumber=' '
      />
      <Navigation 
        onNext={handleNext} 
        onPrevious={handlePrevious}
        disableNext={currentCard === filteredCards.length - 1}
        disablePrevious={currentCard === 0}
      />
      <div className="text-center mt-4 text-sm md:text-base text-gray-500">
        Showing card {currentCard + 1} of {filteredCards.length}
      </div>
    </div>
  );
};

export default CardContainer;