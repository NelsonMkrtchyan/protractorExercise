import './App.css';
import Board from "./components/Board";
import Protractor from "./components/Protractor";

function App() {
  return (
    <div className="App">
      <Board>
        <Protractor/>
      </Board>
    </div>
  );
}

export default App;
