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
      firstVisit: false,
      activePet: null,
    }
  }

  // TODO: Use function to set active pet when egg selected and dropdown is used to set active pet
  setActivePet(activePet){
    console.log(this.activePet)
  }

  render() {
    let {firstVisit} = this.state;
    return (
      <div className="App">
        { !!firstVisit && <EggContainer pets={PETS}/> }
        { !firstVisit && <PetContainer pet={PETS[1]}/> }
      </div>
    );
  }
}

export default App;
