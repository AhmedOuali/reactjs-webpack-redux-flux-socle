import React, { Component, Fragment } from 'react'
import Content from './content'
import Header from './header'

class Workspace extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content {...this.props} />
      </Fragment>
    )
  }
}
export default Workspace
