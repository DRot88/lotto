import React from 'react';
import './App.css';
import LottoBall from './LottoBall';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily Lotto' numBalls={4} maxNum={10}/>
    </div>
  );
}

export default App;
