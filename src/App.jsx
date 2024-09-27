import { useState } from 'react'

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx';



function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X'

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
         currentPlayer = 'O'
      }

      const updatedTurns = [{
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: activePlayer
      }, ...prevTurns
    ]
      
      return updatedTurns
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initalName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard selectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} 
        gameTurns = {gameTurns}
        />
      </div>

      <Log gameTurns={gameTurns}/>
    </main>
  )
}

export default App
