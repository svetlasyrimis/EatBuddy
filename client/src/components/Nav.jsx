import React from 'react'
// import { Link, Route } from 'react-router-dom'




function Nav(props) {

  return (
    <header>
      <nav id="nav-bar">
        <a href="/#home-section">Home</a>
        <a href="/#recipes-section">Recipes</a>
        <a href="/#favorites-section">Favorites</a>
        <button onClick={props.handleLogout}>Log Out</button>
      </nav>
    </header>
  )
}


export default Nav;