import * as React from 'react'
import { render as reactRender } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import createStore from './store'
import App from './containers/App'
import './static/css'

const history = createHistory()
const stater = createStore(history)
const rootEl = document.getElementById('root')

function render(Component) {
  reactRender(
    <Provider store={stater.store}>
      <PersistGate persistor={stater.persistor}>
        <Router history={history}>
          <Component />
        </Router>
      </PersistGate>
    </Provider>,
    rootEl
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    render(NextApp)
  })
}

registerServiceWorker()
