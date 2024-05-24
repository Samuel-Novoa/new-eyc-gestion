import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/clientes">Clientes</Link></li>
            <li><Link to="/fichas">Fichas</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/user">UserView</Link></li>
            <li>LogOut</li>
        </ul>
    </div>
  )
}

export default NavBar