import { Box, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial } from '../reducers/gloveReducer'
import ProductTable from './ProductTable'


const Gloves = () => {

  const dispatch = useDispatch()
  const gloves = useSelector(state => state.gloves)

  useEffect(() => {
    dispatch(getInitial())
  }, [dispatch])

  if (!gloves) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <ProductTable products={gloves} />
    </Box>
  )
}

export default Gloves