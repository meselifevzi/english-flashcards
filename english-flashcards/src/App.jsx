import React, { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark 
      transition-colors duration-200">
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center 
          text-primary-light dark:text-primary-dark">
          English Flashcards
        </h1>
        <CardContainer darkMode={darkMode} onDarkModeToggle={() => setDarkMode(!darkMode)} />
      </div>
    </div>
  );
};

export default App;