import React from 'react';
import Shuffler from './Shuffler';
import Nav from './Nav';
import { Route } from 'react-router-dom'
import MakeCombo from './MakeCombo'

const ComboBoard = (props) => {
  return (
    <div className="comboCard">
      <Nav
        handleLogout={props.handleLogout}
      />
      {/* {props.combos.length > 0 ?  :
        <Route path="/home" render={() => (
          <>

            <p>Hello {this.state.currentUser.name}!</p>
            <MakeCombo
              isLoggedIn={this.state.isLoggedIn}
              currentView={this.state.currentView}
              loginFormData={this.state.loginFormData}
              handleLogout={this.handleLogout}
              meal={this.state.meal}
              fetchMealDrink={this.fetchMealDrink}
              changeBoard={this.changeBoard}
            />
          </>
        )} />} */}
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