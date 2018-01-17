import React from 'react';
import '../styles/components/Dead.css';
import {Button} from 'react-bootstrap';


class Dead extends React.Component {
  render(){
    let {name, causeOfDeath} =this.props;

    return(
      <div className='dead'>
        <h1>  RIP </h1>
        <h1> { name } died of { causeOfDeath }</h1>
        <div id="dead__img">
        <img src={'tamagotchi/img/dead.png'} alt="dead pet :-("/>
        </div>
          <Button onClick={()=>{this.props.resetPet()}} bsSize="large" bsStyle="danger"> Restart </Button>
      </div>
    )
  }
}


export default Dead;