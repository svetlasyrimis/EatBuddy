import React from 'react';
import { fetchFood, fetchDrink } from './services/api-helper'
import './App.css';
import CardCombo from './components/Shuffler'
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
        food: '',
        foodImage: '',
        drink: '',
        drinkImage: ''
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
    // const user = await loginUser(this.state.loginFormData);
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
    // const user = await createUser(this.state.registerFormData);
    // console.log(user);
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


  // toggleAuthView = () => {
  //   this.setState(prevState => ({
  //     currentView: prevState.currentView === 'register' ? 'login' : 'register'
  //   }));
  // }

  render() {

    return (
      <div>
        <Nav />
        <Header />
        <main>
          <Route path="/" exact render={() => <Login />} />
        </main>
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