import { useState } from "react";
import Square from "./Square.js";
import "./Board.css";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState("X");

  function handleClick(position) {
    if (board[position]) return;

    const newBoard = board.slice();

    if (xIsNext === "X") {
      newBoard[position] = "X";
      setXIsNext("O");
    } else {
      newBoard[position] = "O";
      setXIsNext("X");
    }

    setBoard(newBoard);
  }

  return (
    <div className="Board">
      <div className="board-row">
        <Square value={board[0]} onSquareClick={() => handleClick(0)} />
        <Square value={board[1]} onSquareClick={() => handleClick(1)} />
        <Square value={board[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={board[3]} onSquareClick={() => handleClick(3)} />
        <Square value={board[4]} onSquareClick={() => handleClick(4)} />
        <Square value={board[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={board[6]} onSquareClick={() => handleClick(6)} />
        <Square value={board[7]} onSquareClick={() => handleClick(7)} />
        <Square value={board[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default Board;
