const axios = require('axios');

const createUser = async (name, password, email) => {
  try {
    const user = await axios.post("http://localhost:3005/users", {
      name,
      password,
      email
    })
    console.log(user.dataValues)
  } catch (e) {
    console.log(e);
  }
}

const storeToken = async (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

const loginUser = async (name, password) => { 
  try {
    const user = await axios.post("http://localhost:3005/users/login", {
      name,
      password
    
    })
    storeToken(token)
  } catch (e) {
    console.log(e)
  }
}

const main = () => {
  loginUser("riti","loveyou")
}

main();




