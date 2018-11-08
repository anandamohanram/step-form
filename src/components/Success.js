import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <h6>You will get a email with further instructions</h6>
      </React.Fragment>
    </MuiThemeProvider>
    )
  }
}

export default Success
