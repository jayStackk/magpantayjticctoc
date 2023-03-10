import React from 'react';
import Game from './components/game/game';
import Scoreboard from './components/scoreboard/scoreboard';
import './App.css'





export default function App() {

  return (
    <div className='bg'> 
      
       <Scoreboard/>
      <Game />
    </div>
  );
}