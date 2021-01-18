const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const productsRouter = require('./controllers/products')

app.use(cors())
app.use(bodyParser.json())

app.use('/api/products', productsRouter)
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, './build/index.html'), (error) => {
    if (error) {
      response.status(500).send(error)
    }
  })
})

module.exports = app