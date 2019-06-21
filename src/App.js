import React, { Component } from 'react';
import './App.css';
import Adinkra from './Adinkra';

class App extends Component {
  render() {
      return (
          <div className="App">
              <h1 className="App-h1">Random Adinkra Generator</h1>
              <Adinkra />
          </div>
      )
  }
}

export default App;
