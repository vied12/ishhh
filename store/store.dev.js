import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import logger from 'redux-logger'

export default function configureStore(initialState = {}) {
  const middlewares = [ReduxThunk, logger]
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ]
  const composeEnhancers = composeWithDevTools({
    // other compose enhancers if any
    // Specify here other options if needed
  })
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  )
  return store
}
