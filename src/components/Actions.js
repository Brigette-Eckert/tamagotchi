import React from 'react';

import {ButtonToolbar, Button} from 'react-bootstrap'
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
        </ButtonToolbar>
        <Button id="actions__reset" bsSize="large" bsStyle="danger">
          Reset
        </Button>
      </div>
    )
  }
}

export default Actions;
//TODO: Set switch to correlate to pet Array;= - Bun = PETS[0], Pusheen = PETS[1], Biscuit = PETS[2]