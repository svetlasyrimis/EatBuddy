import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav'
import './App.css';
import { fetchMeal, fetchDrink } from './services/api-helper';
import axios from 'axios';
// import { Link, Route } from 'react-router-dom';

class App extends React.Component {


  // fetchMealDrink = async () => {
  //   console.log(foodResp);
  // }

  async componentDidMount() {
    const foodResp = await fetchMeal();
    const drinkResp = await fetchDrink();
  }

  render() {
    return (
      <div className="App" >
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
