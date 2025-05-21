import React from 'react';

const LevelFilter = ({ selectedLevels, onLevelChange, darkMode, onDarkModeToggle }) => {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
      <div className="flex flex-wrap justify-center gap-2">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => onLevelChange(level)}
            className={`px-3 py-1.5 rounded-md text-sm md:text-base font-medium transition-colors duration-200 ${
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
        className="px-3 py-1.5 rounded-md text-sm md:text-base bg-card-light dark:bg-card-dark text-primary-light dark:text-primary-dark border border-secondary-light/20 dark:border-secondary-dark/20 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ml-2"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default LevelFilter;