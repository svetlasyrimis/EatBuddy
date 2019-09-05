const { Router } = require('express');
const { Combo, User, Comment } = require('../models');
const { restrict } = require('../auth');
const favoriteRouter = Router();



favoriteRouter.get('/', async (req, res) => {
  try {
    const favorites = await Combo.findAll({
      where: {
        isLiked: true
      },
      include: [Comment]
      
    })
    res.json({favorites})
  } catch (e) {
    res.json("Can't find any still")
  }
});


module.exports = favoriteRouter