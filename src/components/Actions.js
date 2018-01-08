import React from 'react';

import {ButtonToolbar, Button} from 'react-bootstrap'
import '../styles/components/Actions.css'

class Actions extends React.Component{
  render(){
    return(
      <div id="actions__all">
        <ButtonToolbar id="actions__button_bar">
          <Button onClick={()=>{this.props.setPetStatus("visit")}} bsSize="large" bsStyle="primary"> Visit</Button>
          <Button onClick={()=>{this.props.setPetStatus("feed")}} bsSize="large" bsStyle="danger">Feed</Button>
          <Button onClick={()=>{this.props.setPetStatus("play")}} bsSize="large" bsStyle="info">Play</Button>
          <Button onClick={()=>{this.props.setPetStatus("groom")}} bsSize="large" bsStyle="warning">Groom</Button>
          <Button onClick={()=>{this.props.setPetStatus("sleep")}}bsSize="large" bsStyle="success"> Sleep </Button>
          <Button onClick={()=>{this.props.resetPet()}} id="actions__reset" bsSize="large" bsStyle="danger"> Reset </Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Actions;

//TODO: Add are you sure you want to reset pet message to Reset button with react-confirm bootstrap