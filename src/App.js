import React, { Component } from 'react';
import PetContainer from "./components/PetContainer";
import EggContainer from './components/EggContainer.js';

import './styles/App.css';

const PETS = [{
  name: "Bun",
  species: "Bunny"
}, {
  name: "Pusheen",
  species: "Delightfully Chubby Cat"
}, {
  name: "Biscuit",
  species: "Corgi"
}];


class App extends Component {
    //state active pets
  constructor(props){
    super(props);
    this.state = {
      firstVisit: true,
      activePet: null,
    };
    this.setActivePet = this.setActivePet.bind(this);
    this.resetPet = this.resetPet.bind(this);
  }

  setActivePet(activePet, firstVisit){
    let newState = {
      activePet: activePet,
      firstVisit: false
    };
    this.setState(newState);
  }

  resetPet(activePet, firstVisit){
    let newState = {
      activePet: null,
      firstVisit: true,
    };
    this.setState(newState);
  }

  render() {
    let {firstVisit, activePet} = this.state;
    return (
      <div className="App">
        { !!firstVisit && <EggContainer pets={PETS} setActivePet={this.setActivePet} /> }
        { !firstVisit && <PetContainer pet={activePet} resetPet={this.resetPet}/> }
      </div>
    );
  }
}

export default App;

//TODO: Setup local storage to remember session info so stats don't reset every time player refreshes/leaves and comes back