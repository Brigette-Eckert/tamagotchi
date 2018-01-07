import React from 'react';
import '../styles/components/Egg.css';
import {Button} from 'react-bootstrap';

class Egg extends React.Component {
  render(){
    let {name} = this.props;
    return(
      <div className="eggs">
        <img src={`img/${name}/egg.png`}/>
        <Button bsSize="large" bsStyle="success"> Pick Me! </Button>
      </div>
      )
  }
}

export default Egg;

//TODO: Set up state to display egg page on first visit
//TODO: Set up to set state state when clicked