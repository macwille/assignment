const productRouter = require('express').Router()
const axios = require('axios')
const config = require('../config')

const productsUrl = `${config.API_URL}/products`

productRouter.get('/gloves', async (req, res) => {
  try {
    const gloves = await axios.get(`${productsUrl}/gloves`).then((response) => response.data)
    res.send(gloves)
  } catch (error) {
    console.log(error)
    res.sendStatus(404)
  }
})

productRouter.get('/facemasks', async (req, res) => {
  try {
    const gloves = await axios.get(`${productsUrl}/facemasks`).then((response) => response.data)
    res.send(gloves)
  } catch (error) {
    console.log(error)
    res.sendStatus(404)
  }
})

productRouter.get('/beanies', async (req, res) => {
  try {
    const gloves = await axios.get(`${productsUrl}/beanies`).then((response) => response.data)
    res.send(gloves)
  } catch (error) {
    console.log(error)
    res.sendStatus(404)
  }
})

module.exports = productRouter
