import React from 'react';

function Navbar({ onToggleDarkMode, onSelectLevel, onSelectGridSize }) {
  return (
    <div className="navbar">
      <button onClick={onToggleDarkMode}>Toggle Dark/Light</button>
      <select onChange={(e) => onSelectLevel(e.target.value)}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <select onChange={(e) => onSelectGridSize(Number(e.target.value))}>
        <option value="9">9x9</option>
        <option value="4">4x4</option>
      </select>
    </div>
  );
}

export default Navbar;
