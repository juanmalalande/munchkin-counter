import './App.css';
import { AddPlayer } from './components/AddPlayer';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='row'>

          <div className='col'>
          <img src='./munchkin.jpg' alt="logo" />
          <h5>
            Mata a los Monstruos - Roba los Tesoros - Traiciona a tus Amigos
          </h5>

            <AddPlayer />

            <Footer />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
