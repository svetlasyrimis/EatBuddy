import React from 'react';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'



export default function Login(props) {
  return (
    <>

      {
        props.currentView === 'register' && (
          <>
            <RegisterForm
              registerForm={props.registerFormData}
              handleSubmit={props.handleRegisterSubmit}
              handleChange={props.handleRegisterFormChange}
            />
            <button onClick={props.toggleAuthView}>Login</button>
          </>
        )
      }


      {
        props.currentView === 'login' && (
          <>
            <LoginForm
              loginFormData={props.loginFormData}
              handleSubmit={props.handleLoginSubmit}
              handleChange={props.handleLoginFormChange}
            />
            <button onClick={props.toggleAuthView}>Register</button>
          </>
        )
      }
    </>
  )
}