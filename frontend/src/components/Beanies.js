import React, { useEffect } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial } from '../reducers/beanieReducer'
import ProductTable from './ProductTable'

const Beanies = () => {
  const dispatch = useDispatch()
  const beanies = useSelector(state => state.beanies)

  useEffect(() => {
    dispatch(getInitial())
  }, [dispatch])

  if (!beanies) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <ProductTable products={beanies} />
    </Box>
  )
}

export default Beanies