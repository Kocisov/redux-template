import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from 'components/Title'

class Home extends PureComponent {
  render() {
    return <Title>Home</Title>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Home)
