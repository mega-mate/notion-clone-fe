import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/section/Counter';
import { Lnb } from './features/lnb/Lnb';
import { Gnb } from './features/gnb/Gnb';
import './App.css';

function App() {
  return (
    <div className='app_container'>
      <div>
        <div className='Lnb'>
            <Lnb />
        </div>
        <div className="section_body">
          <div className='Gnb'>
            <Gnb />
          </div>
          <div className="section">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
