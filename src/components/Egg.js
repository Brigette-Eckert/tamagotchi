import React from 'react';
import '../styles/components/Egg.css';

class Egg extends React.Component {
  render(){
    let {name} = this.props;
    return(
      <div className="eggs">
        <img onClick={()=>this.props.setActivePet("Bun")} src={`tamagotchi/img/${name}/egg.png`} alt="egg"/>
      </div>
      )
  }
}

export default Egg;
