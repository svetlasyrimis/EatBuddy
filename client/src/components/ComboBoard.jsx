import React from 'react';
import Shuffler from './Shuffler';
import Nav from './Nav';

import RecipeInfo from './RecipeInfo';

import { Link, withRouter, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const ComboBoard = (props) => {
  return (
    <div className="comboCard">
      <Nav
        handleLogout={props.handleLogout}
      />

      <button name="all" onClick={() => {
        props.handleViewCombos()
        props.history.push('/allcombos')
      }}>View all combos</button>

      {props.combos.length > 0 ?
        <Redirect to="/combo" />
        :
        <>
          <Redirect to="/home" />
        </>}
      {props.combos && props.combos.map(combo => (

        <div key={combo.id}>
        <div className="boardCard" key={combo.id}>

          <Shuffler data={combo} />
          <button name={combo.id} onClick={props.handleComboDelete}>Delete</button>
            <button name={combo.id} onClick={() => {
            props.getComboRecipes(combo.id)
          }}>Get Info</button>
          <button name={combo.id} onClick={props.handleComboUpdate} variant="info">Like</button></div>
         
          


        </div>
      ))}
    </div>
  )
}





export default withRouter(ComboBoard);