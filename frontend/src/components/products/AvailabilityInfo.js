import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import availabilityRouter from '../../services/availability'
import { updateAvailability as updateBeanie } from '../../reducers/beanieReducer'
import { updateAvailability as updateMask } from '../../reducers/facemaskReducer'
import { updateAvailability as updateGlove } from '../../reducers/gloveReducer'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


const AvailabilityInfo = ({ id, type }) => {
  const product = useSelector(state => state[type]).find(o => o.id === id)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const dispatchInfo = data => {
    setLoading(false)
    
    switch (type) {
      case 'beanies':
        return dispatch(updateBeanie(id, data))
      case 'facemasks':
        return dispatch(updateMask(id, data))
      case 'gloves':
        return dispatch(updateGlove(id, data))
      default:
        return null
    }
  }

  const getInfo = async (event) => {
    event.preventDefault()
    dispatchInfo(null)
    setLoading(true)
    const availability = await availabilityRouter.getAvailability(id, product.manufacturer)
    const result = availability.split(/<INSTOCKVALUE>([a-zA-Z0-9_.-]+)<\/INSTOCKVALUE>/).filter((t, i) => i % 2)
    const value = result[0]

    switch (value) {
      case 'INSTOCK':
        return dispatchInfo('In stock')
      case 'OUTOFSTOCK':
        return dispatchInfo('Out of Stock')
      case 'LESSTHAN10':
        return dispatchInfo('Less than 10')
      default:
        return dispatchInfo('Error')
    }
  }

  const renderContent = () => {
    if (product.availability) {
      return product.availability === 'Error' ?
        <Button size="small" variant="outlined" color="secondary" onClick={getInfo}>Try Again</Button>
        :
        product.availability
    }
    else {
      return loading ?
        <CircularProgress />
        :
        <Button size="small" variant="outlined" color="primary" onClick={getInfo}>Get</Button>
    }
  }

  return (
    <Box>
      {renderContent()}
    </Box>
  )
}

export default AvailabilityInfo 