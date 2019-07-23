const { Router } = require('express');
const { Favorite } = require('../models');

const favoriteRouter = Router();

favoriteRouter.get('/', (req, res) => {
  const favorites = Favorite.findAll()
  res.json({ favorites});
});

favoriteRouter.post('/', async (req, res) => {
  const favorite = await Favorite.create(req.body);
  console.log(favorite);
  res.json({ favorite });
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

// favoriteRouter.put('id/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = req.body;
//     await favorite.update(
//       data,{
//         where: {
//           id
//         },
//       });
//     const favorite = await Favorite.findByPk(id);
//     res.json(favorite);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).send(e.message);
//   }
// });





module.exports = favoriteRouter