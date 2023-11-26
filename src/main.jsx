import React from 'react';
import GameBoard from './GameBoard'; // You'll need to create this component
import NumberPad from './NumberPad'; // You'll need to create this component

function MainContent({ gridSize, level }) {
  return (
    <div className="main-content">
      <GameBoard gridSize={gridSize} level={level} />
      <NumberPad />
      <div className="action-buttons">
        <button>Hint</button>
        <button>Undo</button>
        <button>Notes</button>
        <button>Check</button>
      </div>
    </div>
  );
}

export default MainContent;
