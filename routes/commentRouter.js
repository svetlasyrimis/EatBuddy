const { Router } = require('./auth');
const { Comment } = require('../models');
// const {restrict} = require('../auth')  gonna pass this as middleware when ready with logins

const commentRouter = router();

// commentRouter.get('/all', async (req, res) => {
//   const comments = await Comment.findAll();

//   res.json({ comments });
// });

commentRouter.post('/', async (req, res) => {
  const comment = await Comment.create(req.body);
  console.log(comment);
  res.json({ comment })
});

commentRouter.put('/:id', async (req, res) => {
  try {
    const data = req.body;
    const id = parseInt(req.params.id);
    await Comment.update(data, {
      where: { id },
    });
    const comment = await Comment.findOne({
      where: { id },
    });

    res.json({ comment });
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
})




module.exports = commentRouter