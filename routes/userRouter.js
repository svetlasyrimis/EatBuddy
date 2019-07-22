const { Router } = require('express');
const { User } = require('../models');
const bcrypt = require('bcrypt');
// const { Op } = require('sequelize');
const { genToken,restrict } = require('../auth');

const userRouter = Router();
const SALT = 2;


userRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  // const token = genToken({ name, email, password })
  const pwDigest = await bcrypt.hash(password, SALT);


  console.log(pwDigest);
  const user = await User.create({
    name: name,
    password_digest: pwDigest,
    email:email
  });

  
  const { password_digest, ...userData } = user.dataValues;
  const token = genToken(userData)
  
  res.json({ user: userData, token });
  

  // console.log(user);
  console.log(user.dataValues);

  const { password_digest, ...userData } = user.dataValues;
  const token = genToken(userData)
  console.log(token);
  
  res.json({ user: userData, token });
  // res.json({userData})

});

userRouter.post('/login', async  (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    const isValidPass = await bcrypt.compare(password, user.password_digest);
    console.log(isValidPass);
    if (isValidPass) {
      const { password_digest, ...userData } = user.dataValues;
      const token = genToken(userData);
      res.json({ token, user: userData });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (e) {
    console.log(e.message);
    res.status(401).send('Invalid credentials');
  }
});

module.exports = userRouter