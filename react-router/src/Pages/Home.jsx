import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>hola Home</h1>
      <Link to='./ExampleLink'> ir a Link </Link>
    </div>
  )
}

export default Home