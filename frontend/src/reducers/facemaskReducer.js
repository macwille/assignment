import productService from '../services/products'

export const getInitial = () => {
  return async dispatch => {
    const facemasks = await productService.getMasks()
    dispatch({
      type: 'GET_MASKS',
      data: facemasks,
    })
  }
}

const productReducer = (state = null, action) => {
  if (action.type === 'GET_MASKS') {
    return action.data
  }
  return state
}

export default productReducer