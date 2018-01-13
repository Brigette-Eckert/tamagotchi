import React from 'react';
import PropTypes from 'prop-types';
import Egg from './Egg';
import '../styles/components/EggContainer.css';

class EggContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedEgg: null,
    }
  }

  render(){
    let {pets} = this.props;
    return(
      <div className="eggs">
        <h1> Pick an Egg! </h1>
        { pets.map((pet, i) =>
          <Egg name={pet.name} key={i} setActivePet={() => this.props.setActivePet(pet)}/>
         )}


      </div>
    )
  }
}

EggContainer.propTypes = {
  pet: PropTypes.object
};

export default EggContainer;
