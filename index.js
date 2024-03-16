const express = require('express')
const app = express()
const port = 3001

const {errorHandler, errorLogger, boomErrorHandler} = require('./middlewares/error.handler');
const routerApi = require('./routes/index')

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


