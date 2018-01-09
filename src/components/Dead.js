import React from 'react';
import '../styles/components/Dead.css';
import {Button} from 'react-bootstrap';


class Dead extends React.Component {
  render(){
    let {name} =this.props;

    return(
      <div className='dead'>
        <h1> { name } Died of Cause of Death</h1>
        <div id="dead__img">
        <img src={'img/dead.png'} alt="dead pet :-("/>
        </div>
          <Button onClick={()=>{this.props.toggleAlive()}} bsSize="large" bsStyle="danger"> Restart </Button>
      </div>
    )
  }
}
//Death Screen
//TODO: Add restart function- reset all stats to zero and reset age to now

//TODO: Add Cause of Death


export default Dead;