import logo from './logo.svg';
import './App.css';
import Snack from './Snack/Snack'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3><img src={logo} className="App-logo" alt="logo" />Snack Shop</h3>
        <Snack />
      </header>
    </div>
  );
}

export default App;
