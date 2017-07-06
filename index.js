import React from 'react'
import { render as reactRender } from 'react-dom'
import { Provider } from 'react-redux'
import { Provider as FelaProvider } from 'react-fela'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import createStore from './store'
import { getRenderer, getMountNode } from './fela'
import App from './containers/App'
import './static/css/colors.css'
import './static/css/normalize.css'
import './static/css/index.css'

const history = createHistory()
const store = createStore(history)
const root = document.getElementById('root')

function render(Component) {
  reactRender(
    <Provider store={store}>
      <FelaProvider renderer={getRenderer()} mountNode={getMountNode()}>
        <Router history={history}>
          <Component />
        </Router>
      </FelaProvider>
    </Provider>,
    root
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
