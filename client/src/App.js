import React from 'react';
import { fetchFood, fetchDrink } from './services/api-helper'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import MakeCombo from './components/MakeCombo'
import ComboBoard from './components/ComboBoard'
import { createCombo, deleteCombo } from './services/combos'
import { Route } from 'react-router-dom'
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
      combos: [],
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

  // comboList = async () => {
  //   const combo = await createCombo(this.state.meal);
  //   this.setState(prevState => ({
  //     combos: [...prevState.combos, combo]

  //   }))
  // }

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
    // const combo = await createCombo(this.state.meal);
    // const comboMeal = await comboList();
    const combo = await createCombo(this.state.meal);
    this.setState(prevState => ({
      combos: [...prevState.combos, combo]

    }))
    console.log(this.state.combos)
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
    console.log(user);
  }

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

  // changeBoard = () => {
  //   this.setState({
  //     currentView: 'comboBoard'
  //   })
  // }

  handleComboDelete = async (e) => {
    e.preventDefault();
    const comboId = e.target.name
    console.log(comboId);
    const res = await deleteCombo(comboId);

    this.setState(prevState => ({
      combos: prevState.combos.filter(combo =>
        combo.id !== parseInt(comboId))
    }))

  }


  toggleAuthView = () => {
    this.setState(prevState => ({
      currentView: prevState.currentView === 'register' ? 'login' : 'register'
    }));
  }

  render() {

    return (
      <div>

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
        <div>
          {this.state.currentView === 'welcome' && this.state.currentUser && (
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

          )}

        </div>

        <Route path="/combo" render={() =>
          <ComboBoard
            handleComboDelete={this.handleComboDelete}
            combos={this.state.combos}
          />
        } />

      </div>
    )
  }
}

export default App;