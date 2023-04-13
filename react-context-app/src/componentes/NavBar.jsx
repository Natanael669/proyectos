import React, { useContext } from "react";
import UserContext from "../context/UserContext";


const NavBar = () => {
  // definimos como parametro el contexto creado en "UserContext"
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
      <div className="container">

        <span>
          <h2 className="navbar-brand">
            {user ? `Hola ${user.name}` : "Bienvenid@"}
          </h2>
        </span>

        {user ? (
          <button className="btn btn-success" onClick={logout}> Cerrar Sesion </button>
        ) : (
          <button className="btn btn-success" onClick={login}> Iniciar Sesion </button>
        )}
        
      </div>
    </nav>
  );
};

export default NavBar;
