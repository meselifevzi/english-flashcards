import React, { useState } from 'react';
import LevelBadge from './LevelBadge';

const Card = ({ word, level, pronunciation, meaning, example, example_tr, cardNumber }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="bg-card-light dark:bg-card-dark p-4 md:p-6 lg:p-8 rounded-lg 
      shadow-lg mx-auto relative min-h-[350px] w-full max-w-[500px] 
      transition-all duration-300 ease-in-out border border-secondary-light/10 
      dark:border-secondary-dark/10">
      <div className="absolute top-2 right-2 md:top-4 md:right-4">
        <LevelBadge level={level} />
      </div>

      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-light 
          dark:text-primary-dark tracking-wide transition-colors duration-200">
          {word}
        </h2>
      </div>
      
      <div className="text-secondary-light dark:text-secondary-dark mb-4 md:mb-6 text-center 
        transition-colors duration-200">
        <p className="italic text-base md:text-lg">{pronunciation}</p>
      </div>
      
      <div className="mb-4 md:mb-6 text-center">
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-primary-light 
          dark:text-primary-dark transition-colors duration-200">
          {meaning}
        </p>
      </div>
      
      {example && (
        <div className="mb-8 md:mb-12 text-center relative group">
          <p 
            className="text-secondary-light dark:text-secondary-dark text-base md:text-lg 
              italic leading-relaxed px-2 md:px-4 cursor-help transition-colors duration-200 
              hover:text-accent-light dark:hover:text-accent-dark"
            onMouseEnter={() => setShowTranslation(true)}
            onMouseLeave={() => setShowTranslation(false)}
          >
            "{example}"
            {showTranslation && example_tr && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5.5rem] 
                w-11/12 md:w-8/12 bg-blue-400 dark:bg-blue-500 text-white p-2.5 
                md:p-3 rounded-lg text-sm md:text-base font-medium shadow-lg 
                border border-blue-300 dark:border-blue-400 
                transition-all duration-200 ease-in-out z-20">
                {example_tr}
              </span>
            )}
          </p>
        </div>
      )}
      
      <div className="text-right text-secondary-light dark:text-secondary-dark 
        text-xs md:text-sm transition-colors duration-200">
        {cardNumber}
      </div>
    </div>
  );
};

export default Card;