import React from 'react';
import Card from 'react-bootstrap/Card';

class RecipeInfo extends React.Component {

  componentDidMount = async () => {
  }


  render() {
    return (
      <>
        <div id='container'>
          <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src={this.props.currentCombo.meal.strMealThumb} />
            <Card.Body>
              <Card.Title>{this.props.currentCombo.meal.strMeal}</Card.Title>
              <Card.Text>
                {this.props.currentCombo.meal.strInstructions}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>


          <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src={this.props.currentCombo.drink.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.props.currentCombo.drink.strDrink}</Card.Title>
              <Card.Text>
                {this.props.currentCombo.drink.strInstructions}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }
}
export default RecipeInfo;

{/* <div>
          <h1>Drink Recipe Info</h1>
          <p>{this.props.currentCombo.drink.strDrink}</p>
          <p>{this.props.currentCombo.drink.strInstructions}</p>
          <img src={this.props.currentCombo.drink.strDrinkThumb} />

        </div> */}

{/* <div>
          <h1>Meal Recipe Info</h1>
          <p>{this.props.currentCombo.meal.strMeal}</p>
          <p>{this.props.currentCombo.meal.strInstructions}</p>
          <img src={this.props.currentCombo.meal.strMealThumb} />
        </div> */}