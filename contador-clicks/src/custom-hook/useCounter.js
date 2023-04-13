import {useState} from 'react'

const useCounter = () => {

  const [counter, setCounter] = useState(0);

  const incremento = () => {
    setCounter(counter + 1);
  };

  const reiniciar = () => {
    setCounter(0);
  };

  return [
    counter,
    incremento,
    reiniciar
  ]
}

export default useCounter