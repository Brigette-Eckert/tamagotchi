import React from 'react';
import '../styles/components/Egg.css';

class Egg extends React.Component {
  render(){
    return(
      <div className="eggs">
        <img src={'img/Bun/egg.png'}/>
        <img src={'img/Pusheen/egg.png'}/>
        <img src={'img/Biscuit/egg.png'}/>
      </div>
      )
  }
}

export default Egg;

//TODO: Set up state to display egg page on first visit
//TODO: Set up to set state state when clicked