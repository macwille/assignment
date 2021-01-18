const express = require('express')
const path = require('path')
const cors = require('cors')

const productsRouter = require('./controllers/products')

const app = express()
app.use(cors())

app.use('/products', productsRouter)
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  console.log('unknown endpoint')
  res.sendStatus(404)
})

module.exports = app