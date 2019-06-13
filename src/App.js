import React from 'react';
import './App.css';
import LottoBall from './LottoBall';

function App() {
  return (
    <div className="App">
      <LottoBall num={5}/>
      <LottoBall num={15}/>
      <LottoBall num={25}/>
    </div>
  );
}

export default App;
