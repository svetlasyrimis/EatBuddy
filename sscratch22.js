const axios = require('axios');

const createUser = async(name,password,email) => {
  await axios.post("http://localhost:3005/users", {
    name,
    password,
    email
  })
}

const main = () => {
  createUser("Steve","loveyou","dksjkfhs@mail.com")
}

main();



