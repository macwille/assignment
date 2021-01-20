import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitial, getMasks } from '../../reducers/facemaskReducer'
import ProductTable from './ProductTable'

import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

const Masks = () => {
  const dispatch = useDispatch()
  const masks = useSelector(state => state.facemasks)

  useEffect(() => {
    !masks ? dispatch(getInitial()) : dispatch(getMasks())
  }, [dispatch, masks])

  return !masks ?
    <Box p={3}>
      <CircularProgress />
    </Box>
    :
    <Box>
      <ProductTable products={masks} type={'facemasks'} />
    </Box>
}

export default Masks