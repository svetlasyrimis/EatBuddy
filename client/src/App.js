import React from 'react';
import { fetchFood, fetchDrink } from './services/api-helper'
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





class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentView: 'login',
      currentUser: null,
      meal: {
        food: 'Food',
        foodImage: 'https://cdn0.iconfinder.com/data/icons/handdrawn-ui-elements/512/Question_Mark-512.png',
        drink: 'Drink',
        drinkImage: 'https://cdn0.iconfinder.com/data/icons/handdrawn-ui-elements/512/Question_Mark-512.png'
      },

      loginFormData: {
        name: '',
        password: '',
      },
      registerFormData: {
        name: '',
        password: '',
        email: ''
      }
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
        drink: drinkResp.strDrink,
        drinkImage: drinkResp.strDrinkThumb
      }
    })
    console.log(this.state.meal)
  }

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
      currentUser: user,
      currentView: 'welcome'
    })
    // console.log(user);
  }


  // async componentDidMount() {
  //   const user = await verifyToken();
  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       currentView: 'welcome'
  //     })
  //   }
  //   // try {

  //   // } catch (e) {
  //   //   console.log(e.message);
  //   // }

  // }

  handleLogout = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken')
    const sign = localStorage.removeItem('authToken')
    this.setState({
      isLoggedIn: false,
      currentView: 'login',

      loginFormData: {
        name: '',
        password: '',
      }

    })
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
      currentUser: user,
      currentView: 'welcome'
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
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          currentView={this.state.currentView}
          loginFormData={this.state.loginFormData}
          handleLogout={this.handleLogout}
        />
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
        {this.state.currentView === 'welcome' && (

          <div className="shuffler">

            <h1>{'Meal Shuffler'}</h1>
            {this.state.meal &&
              <Shuffler data={this.state.meal} />
            }
            <button onClick={this.fetchMealDrink}>Get a Combo</button>
          </div>)}

      </div>
    )
  }
}

export default App;