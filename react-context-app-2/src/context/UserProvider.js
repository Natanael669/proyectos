import React, { useState } from 'react'
import UserContext from './UserContext'

const estadoInicial = {
  id: 1,
  name: "Natanael",
  favoritos: [1, 2]
}

const UserProvider = ({ children }) => {

  //-----metodos que se usaran en NavBar-------//
  const [user, setUsuario] = useState(estadoInicial)

  const login = () => {
    setUsuario(estadoInicial)
  }

  const logout = () => {
    setUsuario(null)
  }

  const peliFavorita = (movieID) => {

    const favorito = user.favoritos.includes(movieID)

    const newFavoritos = favorito
      ? user.favoritos.filter(fav => fav !== movieID)
      : [...user.favoritos, movieID]

    setUsuario({
      ...user,
      favoritos: newFavoritos
    })
  }

  const data = { user, login, logout, peliFavorita }
  //----------------------------//

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider