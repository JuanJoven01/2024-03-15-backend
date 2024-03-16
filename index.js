const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

const {errorHandler, errorLogger, boomErrorHandler} = require('./middlewares/error.handler');
const routerApi = require('./routes/index')

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());

routerApi(app)

app.use(errorLogger);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


