import React from 'react';
import '../styles/components/Egg.css';

class Egg extends React.Component {
  render(){
    let {name} = this.props;
    return(
      <div className="eggs">
        <img onClick={()=>console.log("egg selected")} src={`img/${name}/egg.png`}/>
      </div>
      )
  }
}

export default Egg;

//TODO: Set up state to display egg page on first visit
//TODO: Set up to set state state when clicked