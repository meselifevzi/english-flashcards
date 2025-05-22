import React from 'react';

const LevelFilter = ({ selectedLevels, onLevelChange, darkMode, onDarkModeToggle, onRandomTenCards }) => {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
      <button
        onClick={onRandomTenCards}
        className="px-4 py-2 rounded-md text-sm md:text-base font-medium 
          bg-gradient-to-r from-green-500 to-emerald-500 
          dark:from-green-600 dark:to-emerald-600 text-white 
          hover:from-green-600 hover:to-emerald-600 
          dark:hover:from-green-500 dark:hover:to-emerald-500 
          hover:shadow-lg active:scale-95 transition-all duration-200"
      >
        Random 10
      </button>
      <div className="flex flex-wrap justify-center gap-2 ml-2">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => onLevelChange(level)}
            className={`px-3 py-1.5 rounded-md text-sm md:text-base font-medium 
              transition-colors duration-200 ${
              selectedLevels.includes(level)
                ? 'bg-gray-200 dark:bg-gray-700 text-primary-light dark:text-primary-dark'
                : 'bg-gray-100 dark:bg-gray-800 text-secondary-light dark:text-secondary-dark hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {level}
          </button>
        ))}
      </div>
      <button
        onClick={onDarkModeToggle}
        className="px-3 py-1.5 rounded-md text-sm md:text-base bg-card-light 
          dark:bg-card-dark text-primary-light dark:text-primary-dark 
          border border-secondary-light/20 dark:border-secondary-dark/20 
          hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ml-2"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default LevelFilter;