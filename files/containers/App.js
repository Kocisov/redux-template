import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import Home from './Home'
import { Layout } from '../components'

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    )
  }
}

function mapStateToProps({ user }) {
  return {
    user
  }
}

export default withRouter(connect(mapStateToProps)(App))
