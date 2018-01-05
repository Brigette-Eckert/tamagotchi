import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet.js';
import Actions from './Actions.js';
import Stats from './Stats.js';
import Info from './Info.js'
import '../styles/components/PetContainer.css';

class PetContainer extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state ={
            name: this.props.pet.name,
            species: this.props.pet.species,
            status: "visit",
            fullness: 50,
            happiness: 50,
            hygiene: 50,
            energy: 50,
            age: 3, //Time since hatched
        };
        console.log(this.state);
    }
    render() {
      let { name, species, status, age } = this.state;
      let { pet } = this.props;
        return (
            <div className="App">
                <Actions/>
                <Info name={name} species={species} age={age}/>
                <Pet name={name} status={status}/>
                <Stats pet={pet}/>
            </div>
        );
    }
}

Info.propTypes = {
  pet: PropTypes.object
};

export default PetContainer;