import React from 'react';
import ReactDOM, {mountNode} from 'react-dom';
import {ButtonToolbar, Button} from 'react-bootstrap'

class Actions extends React.Component{
    render(){
        return(

            <div>
                <ButtonToolbar>
                    <Button bsSize="large" bsStyle="primary"> Home</Button>
                    <Button bsSize="large" bsStyle="success">Feed</Button>
                    <Button bsSize="large" bsStyle="info">Play</Button>
                    <Button bsSize="large" bsStyle="warning">Groom</Button>
                    <Button bsSize="large" bsStyle="danger"> Put to Bed</Button>
                    <Button bsSize="large" bsStyle="link"> Switch Pet </Button>
                </ButtonToolbar>
            </div>
        )

     }
}

export default Actions;

