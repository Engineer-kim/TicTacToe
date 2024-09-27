
const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({selectSquare , gameTurns}) {
    let gameBoard = initalGameBoard

    for (const turn of gameTurns){
        const { square, player } = turn
        const { row , col } = square

        gameBoard[row][col] = player
    }

    // const [gameboard, setGameBoard] = useState(initalGameBoard);

    // function updateGameBoard(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     switchActivePlayer()
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => selectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)
                }
            </ol>
        </li>)}
    </ol>
}