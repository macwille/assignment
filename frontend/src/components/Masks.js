import { Box, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial } from '../reducers/facemaskReducer'
import ProductTable from './ProductTable'


const Masks = () => {
  const dispatch = useDispatch()
  const masks = useSelector(state => state.facemasks)

  useEffect(() => {
    dispatch(getInitial())
  }, [dispatch])

  if (!masks) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <ProductTable products={masks} />
    </Box>
  )
}

export default Masks