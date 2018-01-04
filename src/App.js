import React, { Component } from 'react';
import Pet from './components/Pet.js';
import Actions from './components/Actions';
import Stats from './components/Stats';
import './styles/App.css';

class App extends Component {
  render() {

      let pet = {
          name: "Bun",
          status: "groom",
      };

    return (
      <div className="App">
          <Actions/>
          <Pet pet={pet}/>
          <Stats/>
      </div>
    );
  }
}

export default App;
