import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {

    continue = event => {
        event.preventDefault();
        //Send data to api //
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
      const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
      
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm" />
            <List>
                <ListItem 
                    primaryText = "First name"
                    secondaryText = {firstName}
                />
                <ListItem 
                    primaryText = "Last name"
                    secondaryText = {lastName}
                />
                <ListItem 
                    primaryText = "Email"
                    secondaryText = {email}
                />
                <ListItem 
                    primaryText = "Occupation"
                    secondaryText = {occupation}
                />
                <ListItem 
                    primaryText = "City"
                    secondaryText = {city}
                />
                <ListItem 
                    primaryText = "Bio"
                    secondaryText = {bio}
                />
            </List>

            <RaisedButton 
                label="Confirm"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button:{
        margin : 15
    }
}

export default Confirm
