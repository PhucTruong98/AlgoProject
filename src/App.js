import React from 'react';
import './App.css';
import HeaderPanel from './PageComponents/HeaderPanel';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
