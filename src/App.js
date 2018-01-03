import React, { Component } from 'react';
import logo from './logo.svg';
import Pet from './components/Pet.js';
// import Action from './components/Actions';
// import Stat from './components/Stats';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Pet/>
          Views- Home:
          Pet Sprite (Egg, Pet or Skull)
          Actions
          Feed
          Groom
          Play
          Put to Bed
          Stats
          Age (time kept alive since "hatched")
          Hunger (last time since fed- decrease with longer time)
          Happiness (last time since groomed/played with - decrease with longer time)
          Sleep pause time passing ?
      </div>
    );
  }
}

export default App;
