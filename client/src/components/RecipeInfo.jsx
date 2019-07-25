import React from 'react';
import Nav from './Nav';

class RecipeInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = async () => {
  }


  render() {
    return (
      <>
        <Nav
          handleLogout={this.props.handleLogout} />
        <div>
          <h1>Meal Recipe Info</h1>
          <p>{this.props.currentCombo.meal.strMeal}</p>
          <p>{this.props.currentCombo.meal.strInstructions}</p>
          <img src={this.props.currentCombo.meal.strMealThumb} />
        </div>
        <div>
          <h1>Drink Recipe Info</h1>
          <p>{this.props.currentCombo.drink.strDrink}</p>
          <p>{this.props.currentCombo.drink.strInstructions}</p>
          <img src={this.props.currentCombo.drink.strDrinkThumb} />

        </div>

      </>
    )
  }
}
export default RecipeInfo;