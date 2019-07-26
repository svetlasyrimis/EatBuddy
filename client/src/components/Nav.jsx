import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {

  return (
    <header>
      <nav id="nav-bar">
        <Link to="/home">Shuffler</Link>
        <Link to="/combo">Combo Board</Link>
        <Link to="favorites">Favorites</Link>
        <button onClick={props.handleLogout}>Log Out</button>
      </nav>
    </header>
  )
}


export default Nav;