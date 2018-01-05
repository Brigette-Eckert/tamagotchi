import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
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
      hatchDate: new Date(),
      age: 3
      //now: new Moment(new Date()),
      //age: hatchDate.from(now, true),
    };
    this.setPetStatus = this.setPetStatus.bind(this);
  }

  //TODO: Update progress bar based on new state - status is working but display not updating
  //TODO: Pass in fullness, happpiness etc into Stats instead of 'pet'
  setPetStatus(status){
    let newState = {
      status: status
    };
    switch(status){
      case "feed":
        newState.fullness = this.state.fullness + 5;
        break;
      case "play":
        newState.happiness = this.state.happiness + 5;
        break;
      case "groom":
        newState.hygiene = this.state.hygiene + 5;
        break;
      case "sleep":
        newState.energy = this.state.energy + 5;

    }
    console.log(newState);
    this.setState(newState);
  }



  render() {
    let { name, species, status, age } = this.state;
    let { pet } = this.props;
      return (
          <div className="App">
              <Actions setPetStatus={this.setPetStatus}/>
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
