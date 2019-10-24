import React, { Component } from 'react';
import UnitSearch from './components/UnitSearch/UnitSearch';
import UnitInfo from './components/UnitInfo/UnitInfo';
import Equipment from './components/Equipment/Equipment';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        unitName: "",
        hp: 0,
        mp: 0,
        atk: 0,
        mag: 0,
        def: 0,
        spr: 0,
      }
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      // .then(console.log)
      // .then(result => {this.setState({ 
      //   user: {
      //     nameName: result.name
      //   }
      // })});
        // unitName: result.name })})
      // .then(console.log)
      // .then(result => {console.log('result', result[0].name)})
      .then(result => {this.setState({
        user: {
          unitName: result[0].name
        }
      })})
  }

  render() {
    return (
      <div className="App">
        <h1>FFBE Unit Builder</h1>
        <UnitSearch></UnitSearch>
        <UnitInfo name={this.state.user.unitName} ></UnitInfo>
        <Equipment></Equipment>
        {/* <Materia></Materia>
        <Esper></Esper> */}
        {/* <h1>Name: {this.state.user.unitName}</h1> */}
      </div>
    );
  }
}

export default App;
