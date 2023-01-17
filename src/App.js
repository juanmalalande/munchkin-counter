import './App.css';
import { AddPlayer } from './components/AddPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./munchkin.jpg' alt="logo" />
        <h5>
          Haz click en el botón para agregar los jugadores
        </h5>
      </header>
      <div>
      <AddPlayer />
      </div>
    </div>
  );
}

export default App;
