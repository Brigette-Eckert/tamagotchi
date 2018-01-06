import React, { Component } from 'react';
import PetContainer from "./components/PetContainer";
import Egg from './components/Egg.js';
import Dead from './components/Dead.js';

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
      status: "alive"
    }
  }
  render() {
    return (
      <div className="App">
        {/*TODO: Use State to display Alive/Egg*/}
        <Egg/>
        <Dead/>
        <PetContainer pet={PETS[1]}/>
      </div>
    );
  }
}

export default App;
