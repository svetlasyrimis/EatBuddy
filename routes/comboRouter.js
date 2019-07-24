const { Router } = require('express');
const { Combo,User } = require('../models');
const { restrict } = require('../auth');
const comboRouter = Router();

comboRouter.get('/', (req, res) => {
  res.json({ combo: "get route" });
});

comboRouter.get('/all', async (req, res) => {
  const combos = await Combo.findAll();

  res.json({ combos });
});

comboRouter.post('/', restrict, async (req, res) => {
  console.log(req.body)
  
  const combo = await Combo.create(req.body);
  const user = await User.findByPk(res.locals.id);
  console.log(user.id);
  // console.log(name)
  const answer = await combo.setUser(user);
  console.log(answer.dataValues);
  // console.log(combo);
  res.json({ combo });
});

comboRouter.delete('/:id', restrict ,async (req, res) => {
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

comboRouter.put('id/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await Combo.update(
      data, {
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





module.exports = comboRouter