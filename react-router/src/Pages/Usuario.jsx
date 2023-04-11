import React from "react";
import { useParams } from "react-router-dom";

const Usuario = () => {
  // con useParams podemos ver lo enviado por el path, en este caso podemos enviar valores dentro de "/:userId"
  // ya sea en la url o en el componente NavLink
  const { userId } = useParams()
  //console.log(params)

  return (
    <div>
      Usuario <h1>{userId}</h1>
    </div>
  );
};

export default Usuario;
