import React from "react";
import { useNavigate, Route, Routes, Link, Outlet } from "react-router-dom";

const Panel = () => {
  // useNavigate es una opcion a Navigate, que se usó en el componente App.js
  const navegar = useNavigate();

  const handleClick = () => {
    navegar("/");
  };

  return (
    <div>
      <Outlet />

      <button className="d-flex" onClick={handleClick}> logout </button>

      {/* recordar que en el App.js debe estar de esta manera "/Panel/*", o podria colocarse directamente en el componente App como sub Ruta  */}
      <Routes>
        <Route path="/bienvenida" element={<p> Bienvenido!! </p>} />
      </Routes>
      {/* o bien podria ser con un link tambien */}
      <Link to="bienvenida"> Bienvenido </Link>
      <br />
      <Link to="adios"> Adios </Link>
    </div>
  );
};

export default Panel;
