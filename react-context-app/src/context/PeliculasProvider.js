import React from 'react'
import initialMovies from '../datos/datos'
import PeliculasContext from './PeliculasContext'

const PeliculasProvider = ({ children }) => {

  // consumimos las peliculas
  const data = { movies: initialMovies }
  return (
    <PeliculasContext.Provider value={data}>
      {children}
    </PeliculasContext.Provider>
  )
}

export default PeliculasProvider