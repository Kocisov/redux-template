import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import reducers from '../modules'

export default history => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middleware = [routerMiddleware(history), thunk]

  // add redux-devtools for development
  const middlewares =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(...middleware)
      : composeEnhancers(applyMiddleware(...middleware))

  const store = createStore(reducers, middlewares)

  // hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules').default
      store.replaceReducer(nextRootReducer)
    })
  }

  const persistor = persistStore(store, null, () => {
    store.getState()
  })

  return { persistor, store }
}
