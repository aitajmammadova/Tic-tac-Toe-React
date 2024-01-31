import { useState } from "react";

function TicTacToe({ oscore,xscore,setOscore, setXscore,updateScores }) {
    const [queue, setQueue] = useState(true);
    const [gameArray, setGameArray] = useState(Array(9).fill(null));
    const [hasWinner, setHasWinner] = useState(false);
    const [gameWinner,setGameWinner]=useState("")
    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const newGame=()=>{
        setGameArray(Array(9).fill(null))
        setHasWinner(false)
        setGameWinner("")
        winner=null
    }
    const handleClick = (index) => {
        if (gameArray[index] || hasWinner) return;
        
        const newGameArray = [...gameArray];
        newGameArray[index] = queue ? "X" : "O";
        setGameArray(newGameArray);
        setQueue(!queue);
    };

    const checkWinner = () => {
        if (hasWinner) return gameWinner ;
        for (let i = 0; i < winningPositions.length; i++) {
            const [a, b, c] = winningPositions[i];
            if (
                gameArray[a] &&
                gameArray[a] === gameArray[b] &&
                gameArray[a] === gameArray[c]
            ) {
                updateScores(gameArray[a])
                setHasWinner(true);
                setGameWinner(gameArray[a])
                return gameArray[a];
            }
        }
        return null;
    };

    let winner = checkWinner();
    console.log(winner)

    return (
        <>
            {gameArray.map((box, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className="box"
                >
                    {gameArray[index]}
                </div>
            ))}
            {winner && 
            <button onClick={newGame} className="newgame">New game</button>}
            {winner && <div>{`Winner: ${winner}`}</div>}
        </>
    );
}

export default TicTacToe;
