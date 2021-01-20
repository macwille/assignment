import productService from '../services/products'

export const getInitial = () => {
  return async dispatch => {
    const facemasks = await productService.getMasks()
    dispatch({
      type: 'GET_INITIAL_MASKS',
      data: facemasks,
    })
  }
}

export const getMasks = () => {
  return {
    type: 'GET_MASKS'
  }
}

export const updateAvailability = (id, availability) => {
  return {
    type: 'UPDATE_MASK',
    data: {
      id, availability
    }
  }
}

const facemaskReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_INITIAL_MASKS':
      return action.data
    case 'GET_MASKS':
      return state
    case 'UPDATE_MASK':
      const id = action.data.id
      const toChange = state.find(mask => mask.id === id)
      const changedMask = {
        ...toChange,
        availability: action.data.availability
      }
      return state.map(mask =>
        mask.id !== id ? mask : changedMask
      )
    default:
      return state
  }
}

export default facemaskReducer