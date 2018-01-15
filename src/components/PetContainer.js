import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet.js';
import Actions from './Actions.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Dead from './Dead.js';
import '../styles/components/PetContainer.css';

class PetContainer extends Component {constructor(props){
    super(props);
    this.state ={
      name: this.props.pet.name,
      species: this.props.pet.species,
      status: "visit",
      fullness: 80,
      happiness: 80,
      hygiene: 80,
      energy: 80,
      hatchDate: this.props.pet.hatchDate,
      currentDate: null,
      age: 0,
      alive: true,
      causeOfDeath: null,


    };
    this.setPetStatus = this.setPetStatus.bind(this);
    this.toggleAlive = this.toggleAlive.bind(this);
    this.decreaseStats = this.decreaseStats.bind(this);
    this.getTime = this.getTime.bind(this);
    this.getAge = this.getAge.bind(this);

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
        stat = null;
    }

    let current = this.state[stat];
    if(current <= 95) {
      current += 5;
    } else {
      current = 100;
    }
    newState[stat] = current;
    this.setState(newState, () => {
      setTimeout(() => this.setState({status: 'visit'}), 8000);
    });
  }

  decreaseStats() {
    let newState = {};

    if ((this.state.fullness > 0) && (this.state.happiness > 0) && (this.state.hygiene > 0) && (this.state.energy)) {
      newState = {
        fullness: this.state.fullness - 1,
        happiness: this.state.happiness - 1,
        hygiene: this.state.hygiene - 1,
        energy: this.state.energy - 1,
      }
    } else if (this.state.fullness <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Starvation";
    } else if (this.state.happiness <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Boredom";
    } else if (this.state.hygiene <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Scabies";
    } else if (this.state.energy <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Exhaustion";
    }

    this.setState(newState);
  }

  //set time now
  getTime() {
    let newState = {
      currentDate: new Date()
    };

    this.setState(newState);
    console.log(newState);

  }

  //TODO: Figure out get age function

  getAge(){
  console.log("hatch date " + this.state.hatchDate);
  console.log("current date " + this.state.currentDate);
    let newState = {
      age: parseInt((this.state.hatchDate - this.state.currentDate))
    };
    this.setState(newState);
    console.log(newState)
  }


//loose one point from each stat every five minutes
  componentDidMount(){
    //development/demo interval 8 seconds so can easy see stats decrease
 // setInterval(this.decreaseStats, 8000);
    //live application interval 5 minutes so game is playable - can check in on pet roughly once a day
    setInterval(this.decreaseStats, 30000);
    setInterval(this.getTime, 5000)
    setInterval(this.getAge, 5000)
  }



  toggleAlive(){
    this.setState({alive: !this.state.alive});
  }



  render() {
    let { name, species, status, age, hatchDate, fullness, happiness, hygiene, energy, alive, causeOfDeath } = this.state;
      return (
          <div className="PetContainer">
            { !alive && <Dead name={name} causeOfDeath={causeOfDeath} toggleAlive={this.toggleAlive} resetPet={this.props.resetPet}/> }
            { !!alive && <Actions setPetStatus={this.setPetStatus} resetPet={this.props.resetPet}/>}
            { !!alive && <Info name={name} species={species} age={age} hatchDate={hatchDate}/>}
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

