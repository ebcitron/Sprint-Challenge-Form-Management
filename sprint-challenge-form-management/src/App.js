import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Registration />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Eli's Sprint Challenge - Advanced React
        </p>
        
      </header>
    </div>
  );
}

export default App;
