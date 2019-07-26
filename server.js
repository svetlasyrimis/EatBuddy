const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const comboRouter = require('./routes/comboRouter');
const commentRouter = require('./routes/commentRouter')
const PORT = process.env.PORT || 3005;

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/combos', comboRouter);
app.use('/users', userRouter);
app.use('/comments', commentRouter);


app.get('/', (req, res) => {
  res.json({ message: 'It is working' })
})

app.get('/ping', (req, res) => {
  res.json({ ping: 'pong' })
})


app.listen(PORT, () => console.log(`Listening on ${PORT}`));