import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGloves, getInitial } from '../../reducers/gloveReducer'
import ProductTable from './ProductTable'

import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'


const Gloves = () => {
  const dispatch = useDispatch()
  const gloves = useSelector(state => state.gloves)

  useEffect(() => {
    !gloves ? dispatch(getInitial()) : dispatch(getGloves())
  }, [dispatch, gloves])

  return !gloves ?
    <Box p={3}>
      <CircularProgress />
    </Box>
    :
    <Box>
      <ProductTable products={gloves} type={'gloves'} />
    </Box>
}

export default Gloves