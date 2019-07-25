import React from 'react';
import Shuffler from './Shuffler';
import Nav from './Nav';
import RecipeInfo from './RecipeInfo';

const ComboBoard = (props) => {
  return (
    <div className="comboCard">
      <Nav
        handleLogout={props.handleLogout}
      />
      {props.combos && props.combos.map(combo => (
        <div key={combo.id}>
          <button name={combo.id} onClick={props.handleComboDelete}>Delete</button>
          <button name={combo.id} onClick={() => {
            props.getComboRecipes(combo.id)
          }}>Get Info</button>
          <Shuffler data={combo} />

        </div>
      ))}
    </div>
  )
}





export default ComboBoard;