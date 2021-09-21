import React from 'react';
import DataCards from './components/DataCards';
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <div className='mainWrap'>
      <div className="innerWrap">
        <Header />
        <DataCards />
      </div>
    </div>
  );
}

export default App;
