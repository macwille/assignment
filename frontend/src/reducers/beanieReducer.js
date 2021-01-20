import productService from '../services/products'

export const getInitial = () => {
  return async dispatch => {
    const beanies = await productService.getBeanies()
    dispatch({
      type: 'GET_INITIAL_BEANIES',
      data: beanies,
    })
  }
}

export const getBeanies = () => {
  return {
    type: 'GET_BEANIES'
  }
}

export const updateAvailability = (id, availability) => {
  return {
    type: 'UPDATE_BEANIE',
    data: {
      id, availability
    }
  }
}

const beanieReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_INITIAL_BEANIES':
      return action.data
    case 'GET_BEANIES':
      return state
    case 'UPDATE_BEANIE':
      const id = action.data.id
      const toChange = state.find(beanie => beanie.id === id)
      const changedBeanie = {
        ...toChange,
        availability: action.data.availability
      }
      return state.map(beanie =>
        beanie.id !== id ? beanie : changedBeanie
      )
    default:
      return state
  }
}

export default beanieReducer