import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';
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
    this.toggleAlive = this.toggleAlive.bind(this);
  }

  setPetStatus(status){
    let newState = {
      status: status
    };
    let stat;
    switch(status){
      case "feed":
        stat = 'fullness';
        break;
      case "play":
        stat = 'happiness';
        break;
      case "groom":
        stat = 'hygiene';
        break;
      case "sleep":
        stat = 'energy';
        break;
      default:
        stat = "fullness";
    }

    let current = this.state[stat];
    if(current <= 95) {
      current += 5;
    } else {
      current = 100;
    }
    newState[stat] = current;
    this.setState(newState);
  }


  toggleAlive(){
    this.setState({alive: !this.state.alive});
  }

  render() {
    let { name, species, status, age, fullness, happiness, hygiene, energy, alive } = this.state;
      return (
          <div className="PetContainer">
            <Actions setPetStatus={this.setPetStatus} resetPet={this.resetPet}/>
            { !alive && <Dead name={name} toggleAlive={this.toggleAlive}/> }
            { !!alive && <Info name={name} species={species} age={age}/>}
            { !!alive && <Pet name={name} status={status} toggleAlive={this.toggleAlive}/> }
            <Stats fullness={fullness} happiness = {happiness} hygiene = {hygiene} energy = {energy}/>
          </div>
      );
  }
}

PetContainer.propTypes = {
  pet: PropTypes.object
};

export default PetContainer;

//TODO: Add min