const { Router } = require('express');
const { Favorite,User,Combo } = require('../models');
const { restrict } = require('../auth');
const favoriteRouter = Router();

favoriteRouter.get('/', (req, res) => {
  const favorites = Favorite.findAll()
  res.json({ favorites });
});

favoriteRouter.delete('/:id', async (req, res) => {
  try {
    await Favorite.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(`Success, favorite is ${req.params.id} has been destroyed`);
  } catch (e) {
    console.log(e)
    res.status(401).send("Can't be deleted");
  }

})


module.exports = favoriteRouter