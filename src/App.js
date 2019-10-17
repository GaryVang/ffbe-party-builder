import React, { Component } from 'react';
import UnitSearch from './components/UnitSearch/UnitSearch';
import UnitInfo from './components/UnitInfo/UnitInfo';
import Equipment from './components/Equipment/Equipment';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      unitName: "",

    }
  }
  render() {
    return (
      <div className="App">
        <h1>FFBE Unit Builder</h1>
        <UnitSearch></UnitSearch>
        <UnitInfo></UnitInfo>
        <Equipment></Equipment>
        {/* <Materia></Materia>
        <Esper></Esper> */}

      </div>
    );
  }
}

export default App;
