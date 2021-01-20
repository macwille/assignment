import productService from '../services/products'

export const getInitial = () => {
  return async dispatch => {
    const gloves = await productService.getGloves()
    dispatch({
      type: 'GET_INITIAL_GLOVES',
      data: gloves,
    })
  }
}

export const getGloves = () => {
  return {
    type: 'GET_GLOVES'
  }
}

export const updateAvailability = (id, availability) => {
  return {
    type: 'UPDATE_GLOVE',
    data: {
      id, availability
    }
  }
}

const gloveReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_INITIAL_GLOVES':
      return action.data
    case 'GET_GLOVES':
      return state
    case 'UPDATE_GLOVE':
      const id = action.data.id
      const toChange = state.find(glove => glove.id === id)
      const changedGlove = {
        ...toChange,
        availability: action.data.availability
      }
      return state.map(glove =>
        glove.id !== id ? glove : changedGlove
      )
    default:
      return state
  }
}

export default gloveReducer