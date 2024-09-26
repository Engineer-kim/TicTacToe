import { useState } from 'react'

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'



function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function switchActivePlayer(){
    setActivePlayer((currentActivePlayer)=> currentActivePlayer  === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initalName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard switchActivePlayer={switchActivePlayer} activePlayerSymbol={activePlayer}/>
      </div>
      
      <Log/>
    </main>
  )
}

export default App
