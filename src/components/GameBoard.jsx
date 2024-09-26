import { useState } from 'react'

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({switchActivePlayer ,activePlayerSymbol}) {
    const [gameboard, setGameBoard] = useState(initalGameBoard);

    function updateGameBoard(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        switchActivePlayer()
    }

    return <ol id="game-board">
        {gameboard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => updateGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)
                }
            </ol>
        </li>)}
    </ol>
}