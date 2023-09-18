import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/section/Counter';
import { Lnb } from './features/lnb/Lnb';
import { Gnb } from './features/gnb/Gnb';
import './App.css';

function App() {
  return (
    <div>
      <div className='Gnb'>
        <Gnb />
      </div>
      <div className="App">
        <div className='Lnb'>
          <Lnb />
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
