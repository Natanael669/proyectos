import React from "react";
import "../estilos/contador-clicks.css";

function Contador({ numeroClicks }) {
  return <div className="contador">{numeroClicks}</div>;
}

export default Contador;
