import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Page, Text } from '../components'

class Home extends PureComponent {
  render() {
    return (
      <Page>
        <Text fontSize={14}>Home</Text>
      </Page>
    )
  }
}

function mapStateToProps({ user }) {
  return {
    user
  }
}

export default connect(mapStateToProps)(Home)
