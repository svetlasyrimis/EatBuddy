import React from 'react';
import Shuffler from './Shuffler';
import Nav from './Nav';
import { Link, withRouter, Redirect } from 'react-router-dom'
import MakeCombo from './MakeCombo'

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
        <div className="boardCard" key={combo.id}>
          <Shuffler data={combo} />
          <button name={combo.id} onClick={props.handleComboDelete}>Delete</button>
          <button name="Comments">Comments</button>
          <button name="faves"><img className="heart" src={"https://i.imgur.com/2UeMQie.jpg"} /></button>


        </div>
      ))}
    </div>
  )
}





export default withRouter(ComboBoard);