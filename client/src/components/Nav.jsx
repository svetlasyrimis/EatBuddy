import React from 'react'
// import { Link, Route } from 'react-router-dom'


function Nav() {
  return (
    <header>
      <nav id="nav-bar">
        <a href="/#home-section">Home</a>
        <a href="/#recipes-section">Recipes</a>
        <a href="/#favorites-section">Favorites</a>
        <a href="/#logout-section">Log Out</a>
      </nav>
    </header>
  )
}

export default Nav;