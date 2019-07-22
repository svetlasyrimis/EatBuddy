import React from 'react';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'



export default function Login() {
  return (
    <>

      {
        this.state.currentView === 'register' && (
          <>
            <RegisterForm
              registerForm={this.props.state.registerFormData}
              handleSubmit={this.props.handleRegisterSubmit}
              handleChange={this.props.handleRegisterFormChange}
            />
            <button onClick={this.toggleAuthView}>Login</button>
          </>
        )
      }


      {
        this.state.currentView === 'login' && (
          <>
            <LoginForm
              loginFormData={this.state.loginFormData}
              handleSubmit={this.handleLoginSubmit}
              handleChange={this.handleLoginFormChange}
            />
            <button onClick={this.toggleAuthView}>Register</button>
          </>)
      }
    </>
  )
}