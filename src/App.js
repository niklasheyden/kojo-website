import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Typekit from 'react-typekit';

function App() {
  return (
    <div className="app">
      <Homepage />

      <Typekit kitId="vro4xdf" />
    </div>
  );
}

export default App;
