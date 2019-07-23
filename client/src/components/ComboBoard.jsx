import React from 'react';
import Shuffler from './Shuffler';

const ComboBoard = (props) => {
  return (
    <div className="comboCard">
      {props.combos && props.combos.map(combo => (
        <div key={combo.id}>
          <button name={combo.id} onClick={props.handleComboDelete}>Delete</button>
          <Shuffler data={combo} />

        </div>
      ))}
    </div>
  )
}





export default ComboBoard;