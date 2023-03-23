import './App.css';
import Boton from './componentes/boton.jsx';
import Contador from './componentes/contador-click.jsx';
// custom hook
import useCounter from './custom-hook/useCounter';

function App() {

  //importamos ese custom hook
  const [counter, incremento, reiniciar] = useCounter();

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador
          numeroClicks={counter} />

        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={incremento} />

        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciar} />
      </div>
    </div>
  );
}

export default App;
