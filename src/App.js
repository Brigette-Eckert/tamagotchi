import React, { Component } from 'react';
import PetContainer from "./components/PetContainer";
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
  render() {
    return (
      <div className="App">
        <PetContainer pet={PETS[1]}/>
      </div>
    );
  }
}

export default App;
