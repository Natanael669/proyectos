import React, { useReducer, useState } from "react";
import listaReducer from "../reducers/listaReducer";

const Lista = () => {
  // lista de elementos
  const listaInicial = [
    { id: 1, title: "titulo 1" },
    { id: 2, title: "titulo 2" },
  ];

  // reducer
  const [lista, dispatch] = useReducer(listaReducer, listaInicial);

  // useState
  const [texto, setTexto] = useState("");

  // agregar texto del useState a la lista con reducer
  const enviar = (e) => {
    e.preventDefault()
    dispatch({ type: "add", payload: { id: Date.now(), title: texto } })
  }

  return (
    <div>
      <h2>Lista</h2>
      <ul>
        {lista.map((lista) => (
          <li key={lista.id}>
            {lista.title}
            <button
              onClick={() => dispatch({ type: "delete", payload: lista.id })}
            >
              Eliminar
            </button>

            <button
              onClick={() => dispatch({ type: "update", payload: {...lista, title: texto} })}
            >
              Actualizar
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={enviar}>
        <input
          type="tex"
          placeholder="Escribe aqui"
          onChange={(e) => setTexto(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Lista;
