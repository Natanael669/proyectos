import React from "react";
import "../hoja-estilos/boton-limpiar.css"

const BotonClear = (props) => (
  <button className="boton-limpiar" onClick={props.manejarLimpiar}>
    {props.children}
  </button>
);

export default BotonClear;