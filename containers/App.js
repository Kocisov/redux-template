import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import Home from 'Home'
import Layout from 'components/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps)(App))
