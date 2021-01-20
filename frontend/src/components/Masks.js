import { Box, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial, getMasks } from '../reducers/facemaskReducer'
import ProductTable from './ProductTable'


const Masks = () => {
  const dispatch = useDispatch()
  const masks = useSelector(state => state.facemasks)

  useEffect(() => {
    if (!masks) {
      dispatch(getInitial())
    }
    dispatch(getMasks())
  }, [dispatch, masks])

  if (!masks) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <ProductTable products={masks} type={'facemasks'} />
    </Box>
  )
}

export default Masks