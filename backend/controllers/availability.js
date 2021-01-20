const availabilityRouter = require('express').Router()
const axios = require('axios')
const config = require('../config')

const availabilityUrl = `${config.API_URL}/availability`

availabilityRouter.get('/:manufacturer/:id', async (req, res) => {
  const { manufacturer, id } = {
    manufacturer: req.params.manufacturer,
    id: req.params.id
  }
  try {
    const availability = await axios.get(`${availabilityUrl}/${manufacturer}`).then((serverResponse) => serverResponse.data)
    const data = availability.response.find(obj => obj.id === id.toUpperCase())
    res.send(data.DATAPAYLOAD)
  } catch (error) {
    res.send('Error getting data')
  }
})

module.exports = availabilityRouter
