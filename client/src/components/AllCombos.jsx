import React from 'react';
import Nav from './Nav';
import Shuffler from './Shuffler'

const AllCombos = (props) => {

  return (
    <div className="comboHeaders">
      <h4>All Combos</h4>

      <div className="allCombos">
        <Nav
          handleLogout={props.handleLogout}
        />

        {props.allcombos.map(combo => (
          <div className="boardCard" key={combo.id}>
            <Shuffler data={combo} />
          </div>
        ))}   
      </div>


    </div>
  )
}

export default AllCombos;