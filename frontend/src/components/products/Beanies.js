import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBeanies, getInitial } from '../../reducers/beanieReducer'
import ProductTable from './ProductTable'

import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

const Beanies = () => {
  const dispatch = useDispatch()
  const beanies = useSelector(state => state.beanies)

  useEffect(() => {
    !beanies ? dispatch(getInitial()) : dispatch(getBeanies())
  }, [dispatch, beanies])

  return !beanies ?
    <Box p={3}>
      <CircularProgress />
    </Box>
    :
    <Box>
      <ProductTable products={beanies} type={'beanies'} />
    </Box>
}

export default Beanies