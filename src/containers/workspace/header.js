import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as headerActionCreators from '../../store/actions/header'
import styles from './header.css'

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon,
  ToolbarFixedAdjust,
} from 'rmwc/Toolbar'
var iconStyle = {
  fontSize: '36px',
  marginTop: '-35px',
}

class Header extends Component {
  componentDidMount() {
    let elHeight = document.getElementById('Toolbar').clientHeight
    this.props.setHeaderHeight(elHeight)
    console.log(this.props)
  }
  render() {
    console.log(styles)
    return (
      <Toolbar id="Toolbar" style={{ backgroundColor: '#d1021a' }} fixed>
        <ToolbarRow>
          <ToolbarSection alignStart>
            <ToolbarMenuIcon>
              <i
                className="material-icons"
                style={{ fontSize: '40px', marginTop: '-13px' }}
              >
                account_circle
              </i>
            </ToolbarMenuIcon>
            <ToolbarTitle>Mohamed DAI</ToolbarTitle>
          </ToolbarSection>
          <ToolbarSection alignEnd>
            <ToolbarIcon use="search" style={{ marginTop: '-20px' }} />
            <ToolbarIcon use="more_vert" style={{ marginTop: '-20px' }} />
          </ToolbarSection>
        </ToolbarRow>
        <ToolbarRow>
          <ToolbarSection alignStart>
            <ToolbarMenuIcon use="hourglass_empty" style={iconStyle} />
          </ToolbarSection>

          <ToolbarSection>
            <ToolbarMenuIcon use="history" style={iconStyle} />
          </ToolbarSection>
          <ToolbarSection alignEnd>
            <ToolbarIcon use="language" style={iconStyle} />
          </ToolbarSection>
        </ToolbarRow>
        <ToolbarRow style={{ backgroundColor: 'white' }}>
          <ToolbarSection alignStart>
            <ToolbarTitle style={{ color: 'black' }}>Historique</ToolbarTitle>
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    height: state.header.height,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHeaderHeight: height =>
      dispatch(headerActionCreators.setHeaderHeight(height)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
