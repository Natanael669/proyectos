import React, { useContext } from "react";
import PeliculasContext from "../context/PeliculasContext";
import Peliculas from "./Peliculas";

const Lista = () => {
  // definimos como parametro el contexto creado en "PeliculasContext"
  const { movies } = useContext(PeliculasContext);

  return (
    <div className="container">
      <div className="row">
        {movies.map((datos) => (
          <div className="col-md-4" key={datos.id}>
            <Peliculas pelicula = {datos} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lista;
