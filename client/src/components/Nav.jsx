import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {

  return (
    <header>
      <nav id="nav-bar">
        <Link to="/home">Shuffler</Link>
        <Link to="/combo">Combo Board</Link>
        <a href="/#favorites-section">Favorites</a>
        <Link to="/"><button onClick={props.handleLogout}>Log Out</button></Link>
      </nav>
    </header>
  )
}


export default Nav;