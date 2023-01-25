import "./App.css";

function App() {
  function handleClick() {
    console.log("hello");
  }
  return (
    <div className="App">
      <div className="board-row">
        <Square onSquareClick={() => handleClick()} />
      </div>
    </div>
  );
}

export default App;
