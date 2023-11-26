import React, { useState } from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import './App.css'; // Import your CSS file

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [level, setLevel] = useState('Easy');
  const [gridSize, setGridSize] = useState(9);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onSelectLevel={(level) => setLevel(level)}
        onSelectGridSize={(size) => setGridSize(size)}
      />
      <MainContent gridSize={gridSize} level={level} />
    </div>
  );
}

export default App;
