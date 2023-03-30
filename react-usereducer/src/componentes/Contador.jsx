import React, { useReducer } from 'react'
import contadorReducer from '../reducers/contadorReducer'

const Contador = () => {

  //reducer
  const [contador, dispatch] = useReducer(contadorReducer, 0)

  return (
    <div>
      <h1> clicks: { contador } </h1>
      <button onClick={() => dispatch({ type: "increment" })}> Incrementar </button>
      <button onClick={() => dispatch({ type: "decrement" })}> Disminuir </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reiniciar </button>
    </div>
  )
}

export default Contador