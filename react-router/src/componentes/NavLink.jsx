import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({isActive})=> isActive ? 'active' : 'blue'} to="/Acerca">Acerca</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive ? 'active' : 'blue'} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive ? 'active' : 'blue'} to="/ExampleLink">Link</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive ? 'active' : 'blue'} to="/Usuario/11">Usuario</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive ? 'active' : 'blue'} to="/Panel">Panel</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar