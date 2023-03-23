import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/usuario/UseContext";

const ListaUsuarios = () => {
  const { user, getUsers, getSelectedUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {user.map((user) => (
        <a
          className="list-group-item list-grop-item-action d-flex flex-row justify-content-start"
          href="#!"
          key={user.id}
          onClick={() => getSelectedUsers(user.id)}
        >
          <img
            src={user.avatar}
            className="img-fluid mr-4 rounded-circle"
            width="70"
            alt=""
          />
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  );
};

export default ListaUsuarios;
