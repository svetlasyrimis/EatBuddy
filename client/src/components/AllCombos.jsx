import React from 'react';
import Nav from './Nav';
import Shuffler from './Shuffler'

const AllCombos = (props) => {

  return (
    <div>
      <h4>All Combos</h4>

      <div className="allCombos">
        <Nav
          handleLogout={props.handleLogout}
        />

        {props.allcombos.map(combo => (
          <div className="boardCard" key={combo.id}>
            <Shuffler data={combo} />
            <button name="Comments">Comments</button>
            <button name="faves"><img className="heart" src={"https://i.imgur.com/2UeMQie.jpg"} /></button>
          </div>
        ))}
      </div>


    </div>
  )
}

export default AllCombos;