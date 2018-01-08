import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import Egg from './Egg';
import '../styles/components/EggContainer.css';

class EggContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedEgg: null
    }
  }

  render(){
    let {pets} = this.props;
    return(
      <div className="eggs">
        <h1> Pick an Egg! </h1>
        { pets.map((pet, i) =>
          <Egg name={pet.name} key={i}/>
         )}

      </div>
    )
  }
}

EggContainer.propTypes = {
  pet: PropTypes.object
};

export default EggContainer;

//TODO: Set up to set state state when clicked