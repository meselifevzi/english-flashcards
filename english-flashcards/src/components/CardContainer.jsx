import React, { useState, useMemo } from 'react';
import Card from './Card';
import Navigation from './Navigation';
import LevelFilter from './LevelFilter';
import { useSupabase } from '../hooks/useSupabase';

const CardContainer = ({ darkMode, onDarkModeToggle }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedLevels, setSelectedLevels] = useState(['A1','A2','B1','B2','C1','C2']);  
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [randomMode, setRandomMode] = useState(false);
  const [completedCards, setCompletedCards] = useState(0);
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

  // Random 10 cards function
  const handleRandomTenCards = () => {
    const randomCards = [];
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    
    // Get random cards from each level
    levels.forEach(level => {
      const levelCards = cards.filter(card => card.level === level);
      const shuffled = shuffleArray([...levelCards]);
      randomCards.push(...shuffled.slice(0, 2)); // Get 2 cards from each level
    });

    setRandomMode(true);
    setCompletedCards(0);
    setShowCompletionMessage(false);
    setCurrentCard(0);
    return shuffleArray(randomCards.slice(0, 10));
  };

  const handleNext = () => {
    if (randomMode) {
      if (completedCards + 1 >= 10) {
        // Show completion message first
        setShowCompletionMessage(true);
        setCompletedCards(prev => prev + 1);
        
        // Reset to default state after a short delay
        setTimeout(() => {
          setRandomMode(false);
          setCompletedCards(0);
          setShowCompletionMessage(false);
          setSelectedLevels(['A1','A2','B1','B2','C1','C2']); 
          setCurrentCard(0);
        }, 2000); // 2 second delay
      } else {
        // Continue counting up to 10 cards
        setCompletedCards(prev => prev + 1);
        if (currentCard < filteredCards.length - 1) {
          setCurrentCard(prev => prev + 1);
        }
      }
    } else {
      // Normal mode behavior
      if (currentCard < filteredCards.length - 1) {
        setCurrentCard(prev => prev + 1);
      }
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
        onRandomTenCards={handleRandomTenCards}
      />
      {showCompletionMessage && (
        <div className="text-center mb-4">
          <div className="inline-block px-6 py-3 rounded-lg bg-green-100 dark:bg-green-800 
            text-green-700 dark:text-green-100 font-medium text-base md:text-lg 
            transition-all duration-300 animate-fade-in">
            Tebrikler! 10 Kelimeyi tamamladınız 🎉
          </div>
        </div>
      )}
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
        {randomMode ? `${completedCards}/10 Cards` : 
          `Showing card ${currentCard + 1} of ${filteredCards.length}`}
      </div>
    </div>
  );
};

export default CardContainer;