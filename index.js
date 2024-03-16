const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3002

const {errorHandler, errorLogger, boomErrorHandler} = require('./middlewares/error.handler');

const routerApi = require('./routes/index')

const cors = require('cors');

// cors enable for all the requests, just for dev
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware to enable body requests
app.use(express.json());

routerApi(app)

// middlewares to log errors and catch them
app.use(errorLogger);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


