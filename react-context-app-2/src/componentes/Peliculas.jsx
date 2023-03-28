import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Peliculas = ({ pelicula }) => {
  // comprobacion al apretar el boton "Favorito"
  const { peliFavorita, user } = useContext(UserContext);

  const favorito = user?.favoritos?.includes(pelicula.id);
  return (
    <div className="card">
      <img
        src={pelicula.imageUrl}
        alt={pelicula.title}
        style={{
          height: "260px",
          objectFit: "cover",
        }}
        className="card-img-top"
      />
      <div className="card-body">
        <h4>{pelicula.title}</h4>
        
        {user && user.id ? (
          <button
            className={`btn ${
              favorito ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => peliFavorita(pelicula.id)}
          >
            Favorito
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default Peliculas;
