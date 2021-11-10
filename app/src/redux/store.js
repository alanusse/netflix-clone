import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import userReducer from './reducers/user'
import profileReducer from './reducers/profile'

const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer
})

const enhancer = composeWithDevTools(
  applyMiddleware(thunk)
)

const store = createStore(reducers, enhancer)

export default store
