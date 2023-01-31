import { useState } from "react";
import Board from "./Board.js";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState("X");

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
    checkWinner();
  }

  function checkWinner() {
    const winStates = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    console.log(board, "ehllo");
  }

  return (
    <>
      <div className="status">Next Turn: {xIsNext}</div>
      <Board board={board} xIsNext={xIsNext} handlePlay={handlePlay} />
    </>
  );
}

export default Game;
