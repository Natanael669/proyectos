import './App.css';
import calculadoraLogo from './imagenes/calculadora.png';
import Boton from './componentes/boton.jsx';
import Pantalla from './componentes/pantalla-calculadora.jsx';
import BotonClear from './componentes/boton-limpiar';
import { useState } from "react";
import { evaluate } from 'mathjs';  // importamos libreria de operaciones matematicas
function App() {


  const [input, setInput] = useState("");



  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const resultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("por favor ingrese un valor")
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={calculadoraLogo} alt="logo de freecodecamp" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla
          input={input}
        />

        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={resultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>

        <div className="fila">
          <BotonClear manejarLimpiar={() => setInput('')}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;