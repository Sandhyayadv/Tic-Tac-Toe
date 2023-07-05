import { useState } from "react";
import Board from "./components/Board";
import "./styles.scss";
import { calculateWinner } from "./winner";
import StatusMessage from "./components/StatusMessage";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(false);

  const winner = calculateWinner(squares);

  // const[squares,setSquares]=useState(Array(9).fill(null));
  // const[isXNext,setisXNext]=useState(false);

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? "X" : "O";
        }
        return squareValue;
      });
    });
    setisXNext((currentisXNext) => !currentisXNext);
  };  
  return (
    <div className="app">
      {/* <h2>{statusMessage}</h2> */}
      <StatusMessage winner={winner} squares={squares} isXNext={isXNext} />
      <Square/>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
