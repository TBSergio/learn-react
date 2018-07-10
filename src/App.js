import React, { Component } from 'react';
import './App.css';
import Smenu from './Components/Slide-Menu/slide-menu.js';
import TranList from './Components/TranList/TranList.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <Smenu />
        <TranList />
      </div>
    );
  }
}

export default App;
