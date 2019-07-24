const { Router } = require('express');
const { Comment } = require('../models');

const commentRouter = router();

commentRouter.post('/', async (req, res) => {
  const comment = await Comment.create(req.body);
  console.log(comment);
  res.json({ comment })
});

module.exports = commentRouter