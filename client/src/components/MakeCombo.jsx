import React from 'react'
import Shuffler from './Shuffler'
import Nav from './Nav'
import Header from './Header'
function MakeCombo(props) {
  return (
    <div className="shuffler">

      <Nav
        handleLogout={props.handleLogout}
      />

      <h1>{'Meal Shuffler'}</h1>
      {props.meal &&
        <Shuffler data={props.meal} />
      }
      <button onClick={props.fetchMealDrink}>Get a Combo</button>


      <h3>Combos History</h3>
      <h4>Foods</h4>

      <li>{props.meal.food}</li>

      <h4>Drinks</h4>
      <li>{props.meal.drink}</li>
    </div>


  )
}

export default MakeCombo;