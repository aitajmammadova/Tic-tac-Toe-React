import { useState } from 'react'
import './App.css'
import TicTacToe from './components/TicTacToe'

function App() {
  const [xscore,setXscore]=useState(0)
  const [oscore, setOscore] = useState(0)
 
  return (
    <>
        <div className="score container">
          <div>X</div>
          <div>{xscore}:{oscore}</div>
          <div>O</div>
        </div>
       <div className="board container">
        <TicTacToe 
        oscore={oscore}
        xscore={xscore}
        setXscore={setXscore} 
        setOscore={setOscore}
        updateScores={(winner) => {
        if (winner === "X") {
            setXscore(xscore + 1);
        } else if (winner === "O") {
            setOscore(oscore + 1);
        }
    }}
        ></TicTacToe>
       
       </div>
    </>
  )
}

export default App
