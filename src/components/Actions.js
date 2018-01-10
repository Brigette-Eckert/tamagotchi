import React from 'react';

import {ButtonToolbar, Button, Modal} from 'react-bootstrap'
import '../styles/components/Actions.css'

class Actions extends React.Component{
  constructor(props){
    super(props);

    this.state= {showModal: false};


    this.showConfirmResetModal = this.showConfirmResetModal.bind(this);
    this.closeConfirmResetModal = this.closeConfirmResetModal.bind(this);
  }

  showConfirmResetModal() {
    this.setState({ showModal: true});
  }

  closeConfirmResetModal() {;
    this.setState({showModal: false});
  }
  render(){
    return(
      <div id="actions__all">
        <ButtonToolbar id="actions__button_bar">
          <Button onClick={()=>{this.props.setPetStatus("visit")}} bsSize="large" bsStyle="primary"> Visit</Button>
          <Button onClick={()=>{this.props.setPetStatus("feed")}} bsSize="large" bsStyle="danger">Feed</Button>
          <Button onClick={()=>{this.props.setPetStatus("play")}} bsSize="large" bsStyle="info">Play</Button>
          <Button onClick={()=>{this.props.setPetStatus("groom")}} bsSize="large" bsStyle="warning">Groom</Button>
          <Button onClick={()=>{this.props.setPetStatus("sleep")}}bsSize="large" bsStyle="success"> Sleep </Button>
          <Button onClick={this.showConfirmResetModal} id="actions__reset" bsSize="large" bsStyle="danger"> Reset </Button>
          <Modal show={this.state.showModal}>
            <Modal.Title> Reset </Modal.Title>
            <Modal.Body>
              Are you sure you want to reset to the egg select screen? Your pet's age and statistics will all be reset.
            </Modal.Body>
            <Modal.Footer> <Button onClick={()=>{this.props.resetPet()}} id="actions__reset" bsSize="large" bsStyle="danger">Confirm Reset </Button> <Button onClick={this.closeConfirmResetModal} bsSize="large" bsStyle="primary"> Cancel </Button></Modal.Footer>
          </Modal>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Actions;

//TODO: Reset to Visit after 5 seconds