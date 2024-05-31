import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel";
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import Board from "./components/tic-tac-toe/Board";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React! 2024.5.16</h1>
        <h2>4A9G0906施婉柔</h2>
        <MyRGBPanel />

        <h2>第二個元件：MyCalculator</h2>
        <MyCalculator />

        <h2>第三個元件：Tic-Tac-Toe Game</h2>
        <TicTacToe />
      </header>
    </div>
  );
}

export default App;
