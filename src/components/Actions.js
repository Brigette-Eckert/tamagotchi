import React from 'react';

import {ButtonToolbar, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import '../styles/components/Actions.css'

class Actions extends React.Component{
    render(){
        return(

            <div>
                <ButtonToolbar id="actions__button_bar">
                    <Button bsSize="large" bsStyle="primary"> Home</Button>
                    <Button bsSize="large" bsStyle="danger">Feed</Button>
                    <Button bsSize="large" bsStyle="info">Play</Button>
                    <Button bsSize="large" bsStyle="warning">Groom</Button>
                    <Button bsSize="large" bsStyle="success"> Sleep </Button>
                    <DropdownButton bsSize="large" bsStyle="link" className="actions__switch" title="Switch Pet">
                        <MenuItem>
                            Pet2
                        </MenuItem>
                        <MenuItem>
                            Pet3
                        </MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )

     }
}

export default Actions;

