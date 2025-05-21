import React from 'react';

const LevelBadge = ({ level }) => {
  const getBgColor = (level) => {
    const colors = {
      'A1': 'bg-green-400 dark:bg-green-600',
      'A2': 'bg-emerald-400 dark:bg-emerald-600',
      'B1': 'bg-blue-400 dark:bg-blue-600',
      'B2': 'bg-indigo-400 dark:bg-indigo-600',
      'C1': 'bg-purple-400 dark:bg-purple-600',
      'C2': 'bg-violet-400 dark:bg-violet-600',
    };
    return colors[level] || 'bg-gray-400 dark:bg-gray-600';
  };

  return (
    <span className={`${getBgColor(level)} text-white px-2 py-1 rounded-md 
      text-sm font-medium transition-colors duration-200`}>
      {level}
    </span>
  );
};

export default LevelBadge;