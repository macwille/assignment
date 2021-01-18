import productService from '../services/products'

export const getInitial = () => {
  return async dispatch => {
    const beanies = await productService.getBeanies()
    dispatch({
      type: 'GET_BEANIES',
      data: beanies,
    })
  }
}

const productReducer = (state = null, action) => {
  if (action.type === 'GET_BEANIES') {
    return action.data
  }
  return state
}

export default productReducer