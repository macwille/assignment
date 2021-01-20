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
    typeDispatch(null)
    setInfo('Loading')
    const availability = await availabilityRouter.getAvailability(id, product.manufacturer)
    const result = availability.split(/<INSTOCKVALUE>([a-zA-Z0-9_.-]+)<\/INSTOCKVALUE>/).filter((t, i) => i % 2)
    console.log('Result', result[0])
    if (result[0] === 'INSTOCK') {
      setInfo('In stock')
      typeDispatch('In stock')
    }
    if (result[0] === 'OUTOFSTOCK') {
      setInfo('Out of stock')
      typeDispatch('Out of Stock')
    }
    if (result[0] === 'LESSTHAN10') {
      setInfo('Less than 10')
      typeDispatch('Less than 10')
    }
    if (!result[0]) {
      setInfo('Error')
      typeDispatch('Error')
    }
  }

  const renderNotAvailable = () => {
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
  const renderAvailable = () => {
    if (product.availability === 'Error') {
      return (
        <Button size="small" variant="outlined" color="error" onClick={getInfo}>Try Again</Button>
      )
    }
    return product.availability
  }

  return (
    <Box>
      <div>
        {!product.availability ?
          renderNotAvailable()
          :
          renderAvailable()
        }
      </div>
    </Box>
  )
}

export default AvailabilityInfo 