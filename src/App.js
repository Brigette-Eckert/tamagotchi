import React, { Component } from 'react';
import PetContainer from "./components/PetContainer";
import './styles/App.css';

const PETS = [{
  name: "Bun",
  species: "Bunny"
}, {
  name: "Pusheen",
  species: "Cat"
}, {
  name: "Biscuit",
  species: "Puppy"
}];


class App extends Component {
    //state active pets
  render() {
    return (
      <div className="App">
        <PetContainer pet={PETS[0]}/>
      </div>
    );
  }
}

export default App;
