import React from 'react'
import { render as reactRender } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import registerServiceWorker from 'registerServiceWorker'
import createStore from 'store'
import App from 'containers/App'

import 'typeface-roboto'
import 'static/css/reboot.css'

const history = createHistory()
const store = createStore(history)
const root = document.getElementById('root')

function render(Component) {
  reactRender(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    root
  )
}

render(App)

if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require('containers/App').default
    render(NextApp)
  })
}

registerServiceWorker()
