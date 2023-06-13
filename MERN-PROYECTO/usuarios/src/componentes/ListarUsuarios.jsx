import React, { useState, useEffect } from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from 'axios'

const ListarUsuarios = () => {
  const [dataUser, setdataUser] = useState([])

  // traer datos de el servidor
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/usuario/obtenerUsuarios')
      .then((res) => {
        setdataUser(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1> Lista de Usuarios </h1> <br />
      {dataUser.map((usuario) => {
        return (
          <div key={usuario.idUsuario}>
            <UsuarioIndividual user={usuario} />
          </div>
        )
      })}
    </div>
  )
}

export default ListarUsuarios
