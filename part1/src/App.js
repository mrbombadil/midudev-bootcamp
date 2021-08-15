import './App.css';
import Mensaje from './Mensaje.js';

const App = () => {
  const mensaje = "Hola qué tal a todos"

  return (
    <div className="App">
      <Mensaje color='red' message='mensaje 1'/>
      <Mensaje color='blue' message='mensaje 2'/>
      <Mensaje color='yellow' message='mensaje 3'/>
      {mensaje + ' evaluación JSX'}
    </div>
  );
}

export default App;
