import productService from '../services/products'

export const getInitial = () => {
  return async dispatch => {
    const gloves = await productService.getGloves()
    dispatch({
      type: 'GET_GLOVES',
      data: gloves,
    })
  }
}

const productReducer = (state = null, action) => {
  if (action.type === 'GET_GLOVES') {
    return action.data
  }
  return state
}

export default productReducer