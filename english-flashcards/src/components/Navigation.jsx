import React from 'react';

const Navigation = ({ onNext, onPrevious, disableNext, disablePrevious }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
          disablePrevious 
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 hover:shadow-lg active:scale-95'
        }`}
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={disableNext}
        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
          disableNext 
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 hover:shadow-lg active:scale-95'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;