import React from 'react';
import { fetchFood, fetchDrink, getFoodRecipe, getDrinkRecipe } from './services/api-helper'
import './App.css';
import Shuffler from './components/Shuffler'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Nav from './components/Nav'
import Login from './components/Login'
import { Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import {
  createUser,
  verifyToken,
  loginUser,

} from './services/auth';
import { createCombo, getALL } from './services/combos';





class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentView: 'login',
      currentUser: null,
      meal: {
        food: 'Food',
        foodImage: 'https://cdn0.iconfinder.com/data/icons/handdrawn-ui-elements/512/Question_Mark-512.png',
        foodId:'',
        drink: 'Drink',
        drinkImage: 'https://cdn0.iconfinder.com/data/icons/handdrawn-ui-elements/512/Question_Mark-512.png',
        drinkId:''
      },

      loginFormData: {
        name: '',
        password: '',
      },
      registerFormData: {
        name: '',
        password: '',
        email: ''
      },
      combos: []
    }
  }

 
  fetchMealDrink = async () => {
    const drinkResp = await fetchDrink();
    // console.log(drinkResp)
    const foodResp = await fetchFood();
    // console.log(foodResp);
    this.setState({
      meal: {
        food: foodResp.strMeal,
        foodImage: foodResp.strMealThumb,
        foodId: foodResp.idMeal,
        drink: drinkResp.strDrink,
        drinkImage: drinkResp.strDrinkThumb,
        drinkId: drinkResp.idDrink
      }
    })
    const combo = createCombo(this.state.meal);
    this.setState(prevState => ({
      combos: [...prevState.combos, combo]
    }));
    console.log(this.state.combos)
  }
  componentDidMount = async () => {
    const user = await verifyToken();
    const all = await getALL();
    if (user) {
      this.setState({
        currentUser: user
      })
    }
    console.log(this.state.currentUser)
  }
    // const recipe = await getFoodRecipe(52772);
    // const drinkrecipe = await getDrinkRecipe(12802)
    // const result = `Food recipe ${recipe}; Drink recipe ${drinkrecipe}`
    // console.log(result)
  
  //works gets the recipes

  handleLoginFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value,
      },
    }));
  }

  handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    const user = await loginUser(this.state.loginFormData);
    this.setState({
      loginFormData: {
        name: '',
        password: '',
      },
      // currentUser: user,
      // currentView: 'welcome'
    })
    // console.log(user);
  }

  handleRegisterFormChange = (ev) => {
    const { name, value } = ev.target;

    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }
  
  handleRegisterSubmit = async (ev) => {
    ev.preventDefault();
    const user = await createUser(this.state.registerFormData);
    console.log(user);
    this.setState({
      registerForm: {
        name: '',
        password: '',
        email: ''
      },
      // currentUser: user,
      // currentView: 'welcome'
    });
  }


  toggleAuthView = () => {
    this.setState(prevState => ({
      currentView: prevState.currentView === 'register' ? 'login' : 'register'
    }));
  }

  render() {

    return (
      <div>
        <Nav />
        <Header />
        <main>
          <Route path="/" exact render={() =>
            <Login
              currentView={this.state.currentView}
              registerFormData={this.state.registerFormData}
              handleRegisterSubmit={this.handleRegisterSubmit}
              handleRegisterFormChange={this.handleRegisterFormChange}
              toggleAuthView={this.toggleAuthView}
              loginFormData={this.state.loginFormData}
              handleLoginSubmit={this.handleLoginSubmit}
              handleLoginFormChange={this.handleLoginFormChange}
            />} />
        </main>

        <div className="shuffler">
          <h1>{'Meal Shuffler'}</h1>
          {this.state.meal &&
            <Shuffler data={this.state.meal} />
          }
          <button onClick={this.fetchMealDrink}>Get a Combo</button>
        </div>

      </div>
    )
  }
}

export default App;