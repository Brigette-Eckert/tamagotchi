import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Pet from './Pet.js';
import Actions from './Actions.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Dead from './Dead.js';
import '../styles/components/PetContainer.css';

class PetContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: this.props.pet.name,
      species: this.props.pet.species,
      status: "visit",
      fullness: 50,
      happiness: 50,
      hygiene: 50,
      energy: 50,
      hatchDate: new Date(),
      age: 3,
      alive: true
      //now: new Moment(new Date()),
      //age: hatchDate.from(now, true),
    };
    this.setPetStatus = this.setPetStatus.bind(this);
  }

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
    let { name, species, status, age, fullness, happiness, hygiene, energy, alive } = this.state;
    let { pet } = this.props;
      return (
          <div className="PetContainer">
            <Actions setPetStatus={this.setPetStatus}/>
            {/*TODO: Hide/Show Dead/Pet based on status or alive boolean*/}
            { !alive && <Dead/> }
            { !!alive && <Info name={name} species={species} age={age}/>}
            { !!alive && <Pet name={name} status={status}/> }
            <Stats fullness={fullness} happiness = {happiness} hygiene = {hygiene} energy = {energy}/>
          </div>
      );
  }
}

PetContainer.propTypes = {
  pet: PropTypes.object
};

export default PetContainer;

//TODO: Add min and max 0 and 100 to stat numbers
//TODO: Display alive or dead- hide everything  / hide action when dead -