import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button, CircularProgress, Typography } from '@material-ui/core'
import availabilityRouter from '../services/availability'
import { updateAvailability as updateBeanie } from '../reducers/beanieReducer'
import { updateAvailability as updateMask } from '../reducers/facemaskReducer'
import { updateAvailability as updateGlove } from '../reducers/gloveReducer'


const AvailabilityInfo = ({ id, type }) => {
  const product = useSelector(state => state[type]).find(o => o.id === id)
  const dispatch = useDispatch()
  const [info, setInfo] = useState(null)
  console.log(product)

  const typeDispatch = data => {
    if (type === 'beanies') {
      dispatch(updateBeanie(id, data))
    }
    if (type === 'facemasks') {
      dispatch(updateMask(id, data))
    }
    if (type === 'gloves') {
      dispatch(updateGlove(id, data))
    }
  }

  const getInfo = async (event) => {
    event.preventDefault()
    setInfo('Loading')
    const availability = await availabilityRouter.getAvailability(id, product.manufacturer)
    const result = availability.split(/<INSTOCKVALUE>([A-Za-z.@]+)<\/INSTOCKVALUE>/).filter((t, i) => i % 2)
    if (result[0] === 'INSTOCK') {
      setInfo('In stock')
      typeDispatch('In stock')
    }
    if (result[0] === 'OUTOFSTOCK') {
      setInfo('Out of stock')
      typeDispatch('Out of Stock')
    }
    if (!result[0]) {
      setInfo('Error')
      typeDispatch('Error')
    }
  }

  const render = () => {
    if (info) {
      if (info === 'Error') {
        return (
          <>
            <Typography>Error try again <Button size="small" variant="outlined" color="primary" onClick={getInfo}>Get</Button>
            </Typography>
          </>
        )
      }
      if (info === 'Loading') {
        return (
          <CircularProgress />
        )
      }
      return info
    }
    return (
      <Button size="small" variant="outlined" color="primary" onClick={getInfo}>Get</Button>
    )
  }
  console.log('Product avail?', product.availability)

  return (
    <Box>
      <div>
        {!product.availability ?
          render()
          :
          product.availability
        }
      </div>
    </Box>
  )
}

export default AvailabilityInfo 