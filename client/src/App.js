import React from 'react';
import { fetchFood, fetchDrink } from './services/api-helper'
import './App.css';
import CardCombo from './components/Shuffler'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Nav from './components/Nav'




class App extends React.Component {
  constructor() {
    super()
    this.super = {
      food: '',
      foodImage: '',
      drink: '',
      drinkImage: ''

    }
  }

  fetchMealDrink = async () => {

    const drinkResp = await fetchDrink();
    console.log(drinkResp)
    const foodResp = await fetchFood();
    console.log(foodResp);
    this.setState({
      food: foodResp.strMeal,
      foodImage: foodResp.strMealThumb,
      drink: drinkResp.strDrink,
      drinkImage: drinkResp.strDrinkThumb
    })
  }

  render() {

    return (
      <div>
        <Nav />
        <Header />
        <h1>{'This will always render'}</h1>
        <Button variant="success" size="lg" onClick={this.fetchMealDrink}>Get a Combo</Button>
        {this.state &&

          <CardCombo data={this.state} />
        }

      </div>
    )
  }
}

export default App;