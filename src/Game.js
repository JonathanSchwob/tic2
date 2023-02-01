import { useState } from "react";
import Board from "./Board.js";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState("X");
  const winner = checkWinner();

  function handlePlay(position) {
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

  function checkWinner() {
    const winStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winStates.length; i++) {
      const [a, b, c] = winStates[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== null) {
        return "Winner is: " + board[a];
      }
    }

    return "Next turn: " + xIsNext;
  }

  return (
    <>
      <div className="status">{winner}</div>
      <Board board={board} xIsNext={xIsNext} handlePlay={handlePlay} />
    </>
  );
}

export default Game;
