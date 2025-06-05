import React, { useState } from 'react';
import LevelBadge from './LevelBadge';

const Card = ({ word, level, pronunciation, meaning, example, example_tr, cardNumber }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleSpeak = (text) => {
    try {
      // Web Speech API kontrolü
      if (!('speechSynthesis' in window)) {
        console.error('Speech synthesis is not supported in this browser');
        return;
      }

      // Mevcut konuşmayı durdur
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      // Ses ayarları
      utterance.lang = 'en-US';
      utterance.rate = 0.72;  // Konuşma hızı (0.1 to 10)
      utterance.pitch = 1;   // Ses tonu (0 to 2)
      utterance.volume = 1;  // Ses seviyesi (0 to 1)

      // Hata yakalama
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
      };

      // Konuşmayı başlat
      speechSynthesis.speak(utterance);

    } catch (error) {
      console.error('Speech synthesis error:', error);
    }
  };

  return (
    <div className="bg-card-light dark:bg-card-dark p-4 md:p-6 lg:p-8 rounded-lg 
      shadow-lg mx-auto relative min-h-[350px] w-full max-w-[500px] 
      transition-all duration-300 ease-in-out border border-secondary-light/10 
      dark:border-secondary-dark/10">
      <div className="absolute top-2 right-2 md:top-4 md:right-4">
        <LevelBadge level={level} />
      </div>

      <div className="text-center mb-4 md:mb-6">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handleSpeak(word)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-colors duration-200 text-secondary-light dark:text-secondary-dark
              hover:text-accent-light dark:hover:text-accent-dark"
            title="Listen to pronunciation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"/>
            </svg>  
          </button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-light 
            dark:text-primary-dark tracking-wide transition-colors duration-200">
            {word}
          </h2>
        </div>
      </div>
      
      <div className="text-secondary-light dark:text-secondary-dark mb-4 md:mb-6 text-center 
        transition-colors duration-200">
        <p className="italic text-base md:text-lg">{pronunciation}</p>
      </div>
      
      <div className="mb-4 md:mb-6 text-center">
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-primary-light 
          dark:text-primary-dark transition-colors duration-200
          blur-[5px] hover:blur-none cursor-pointer
          transition-all duration-300 ease-in-out pl-5">
          {meaning}
        </p>
      </div>
      
      {example && (
        <div className="mb-8 md:mb-12 text-center relative group">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleSpeak(example)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                transition-colors duration-200 text-secondary-light dark:text-secondary-dark
                hover:text-accent-light dark:hover:text-accent-dark"
              title="Listen to pronunciation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"/>
              </svg>
            </button>
            <p className="relative text-secondary-light dark:text-secondary-dark text-base md:text-lg 
              italic leading-relaxed px-2 md:px-4 cursor-help transition-colors duration-200 
              hover:text-accent-light dark:hover:text-accent-dark">
              "{example}"
              {example_tr && (
                <span 
                  translate="no" 
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5rem] 
                    w-11/12 md:w-10/12 bg-blue-400/80 dark:bg-blue-500/80 text-white p-2.5 
                    md:p-3 rounded-lg text-sm md:text-base font-medium shadow-lg 
                    border border-blue-300 dark:border-blue-400
                    transition-all duration-300 ease-in-out z-20
                    blur-[3px] hover:blur-none cursor-pointer"
                >
                  {example_tr}
                </span>
              )}
            </p>
          </div>
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