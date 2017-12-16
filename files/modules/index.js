import localForage from 'localforage'
import { persistCombineReducers } from 'redux-persist'
import { routerReducer } from 'react-router-redux'
import user from './user'

const config = {
  key: 'primary',
  storage: localForage
}

export default persistCombineReducers(config, {
  user,
  router: routerReducer
})
