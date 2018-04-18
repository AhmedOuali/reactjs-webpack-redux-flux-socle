import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Snackbar } from 'rmwc/Snackbar'
import 'material-components-web/dist/material-components-web.css'
import './content.css'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import { ToolbarFixedAdjust } from 'rmwc/Toolbar'
import FontIcon from 'material-ui/FontIcon'
import { Fab } from 'rmwc/Fab'
import './css-grid.css'

class Content extends Component {
  render() {
    console.log('props', this.props.height)
    return (
      <ToolbarFixedAdjust>
        <Card style={{ marginTop: '7px' }}>
          <CardHeader
            title="Khaled Garsi"
            subtitle="2 jours"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions style={{}}>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
            pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
            lobortis odio.
          </CardText>
        </Card>
        <Card style={{ marginTop: '7px' }}>
          <CardHeader
            title="Morsi Jallouli"
            subtitle="3 jours"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
            vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
            pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
            lobortis odio.
          </CardText>
        </Card>
        <Fab
          style={{
            zIndex: '6',
            right: '5%',
            bottom: '30px',
            display: 'block',
            position: 'fixed',
            backgroundColor: '#f27308',
            width: '70px',
            height: '70px',
          }}
        >
          add
        </Fab>
      </ToolbarFixedAdjust>
    )
  }
}
const mapStateToProps = state => {
  return {
    height: state.header.height,
  }
}

export default connect(mapStateToProps)(Content)
