import React from 'react';
import Shuffler from './Shuffler';


const ComboDetails = (props) => {
  return (
    <div>
     
      <Shuffler data={props.combo}/>
    <button name="Comments">Comments</button>
      <button name={props.combo.id} onClick={props.handleComboUpdate} variant="info">Like</button></div>
  )
}

export default ComboDetails;


