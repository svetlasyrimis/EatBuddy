const { Router } = require('express');
const { Favorite } = require('../models');

const favoriteRouter = Router();

favoriteRouter.get('/', (req, res) => {
  res.json({ combo: "get route" });
});

favoriteRouter.post('/', async (req, res) => {
  const combo = await Combo.create(req.body);
  console.log(combo);
  res.json({ combo });
});

favoriteRouter.delete('/id/:id', async (req, res) => {
  try {
    await Combo.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(`Success, combo is ${req.params.id} has been destroyed`);
  } catch (e) {
    console.log(e)
    res.status(401).send("Can't be deleted");
  }
  
})

favoriteRouter.put('id/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await Combo.update(
      data,{
        where: {
          id
        },
      });
    const combo = await Combo.findByPk(id);
    res.json(combo);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});





module.exports = favoriteRouter