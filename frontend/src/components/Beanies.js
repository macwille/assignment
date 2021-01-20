import React, { useEffect } from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getBeanies, getInitial } from '../reducers/beanieReducer'
import ProductTable from './ProductTable'

const Beanies = () => {
  const dispatch = useDispatch()
  const beanies = useSelector(state => state.beanies)

  useEffect(() => {
    if (!beanies) {
      dispatch(getInitial())
    }
    dispatch(getBeanies())
  }, [dispatch, beanies])

  if (!beanies) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <ProductTable products={beanies} type={'beanies'} />
    </Box>
  )
}

export default Beanies