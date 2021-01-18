import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import gloveReducer from './reducers/gloveReducer'
import facemaskReducer from './reducers/facemaskReducer'
import beanieReducer from './reducers/beanieReducer'


const reducer = combineReducers({
  gloves: gloveReducer,
  facemasks: facemaskReducer,
  beanies: beanieReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store