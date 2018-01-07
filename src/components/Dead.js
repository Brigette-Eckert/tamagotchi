import React from 'react';
import '../styles/components/Dead.css';
import {Button} from 'react-bootstrap';


class Dead extends React.Component {
  render(){
    return(
      <div className='dead'>
        <h1> Pet Died of Cause of Death</h1>
        <img src={'img/dead.png'}/>
        <Button bsSize="large" bsStyle="danger"> Restart </Button>
      </div>
    )
  }
}
//Death Screen
//TODO: AddRestart Button
//TODO: Add Cause of Death


export default Dead;