import React, { useContext } from "react";
import UseContext from "../context/usuario/UseContext";

const Perfil = () => {
  const { userSelected } = useContext(UseContext);
  return (
    <>
      {userSelected ? (
        <div className="card card-body text-center">
          <img
            src={userSelected.avatar}
            alt=""
            className="card-img-top rounded-circle m-auto img-fluid"
            style={{ width: 180 }}
          />
          <h1>{`${userSelected.first_name} ${userSelected.last_name}`}</h1>
          <h3>correo: {userSelected.email}</h3>
        </div>
      ) : (
        <h1>no existe el usuario seleccionado</h1>
      )}
    </>
  );
};

export default Perfil;
