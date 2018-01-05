import React from 'react';

import {ButtonToolbar, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import '../styles/components/Actions.css'

class Actions extends React.Component{
  render(){
    return(
      <div>
        <ButtonToolbar id="actions__button_bar">
          <Button onClick={()=>{this.props.setPetStatus("visit")}} bsSize="large" bsStyle="primary"> Visit</Button>
          <Button onClick={()=>{this.props.setPetStatus("feed")}} bsSize="large" bsStyle="danger">Feed</Button>
          <Button onClick={()=>{this.props.setPetStatus("play")}} bsSize="large" bsStyle="info">Play</Button>
          <Button onClick={()=>{this.props.setPetStatus("groom")}} bsSize="large" bsStyle="warning">Groom</Button>
          <Button onClick={()=>{this.props.setPetStatus("sleep")}}bsSize="large" bsStyle="success"> Sleep </Button>
          <DropdownButton id="actions__dropdown_button" bsSize="large" bsStyle="link" className="actions__switch" title="Switch Pet">
            <MenuItem>
              Inactive Pet1
            </MenuItem>
            <MenuItem>
              Inactive Pet2
            </MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Actions;
//TODO: Set switch to correlate to pet Array;= - Bun = PETS[0], Pusheen = PETS[1], Biscuit = PETS[2]