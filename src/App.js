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
      },
      unitList: {},
    }
  }

  onDropdownSelect = () => {
    this.setState({ });
    fetch("http://localhost:3000/", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({

      })
    })
  }

  testGetRequest = () => {
    fetch("http://localhost:3000/testUnit", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        unit_id: this.state.user.unit_id
      })
    });
  }

  //Researved for search field
  onUnitSelection = (unitName) => {
    fetch("http://localhost:3000/loadUnit", {
        method: "post",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json" },
        body: JSON.stringify({
          unitName: unitName,
          // password: this.state.signInPassword
        })
      })
      .then(response => response.json())
      // .then(result => {console.log('result', result)})
      .then(result => {this.setState({
        user: {
          unitName: result.name,
          hp: result.hp,
          mp: result.mp,
          atk: result.atk,
          mag: result.mag,
          def: result.def,
          spr: result.spr, 
        }
      })})
  };

  loadUnit = (unitData) => {
    this.setState({
      user: {
        unitName: unitData.name,
        hp: unitData.hp,
        mp: unitData.mp,
        atk: unitData.atk,
        mag: unitData.mag,
        def: unitData.def,
        spr: unitData.spr, 
      }
    });
  };

  componentDidMount () {
    fetch('http://localhost:3000/testUnit')
      // .then(res => {console.log('result', res)})
      .then(response => response.json())
      // .then(result => {console.log('result', result)})
      .then(result => {this.setState({
        user: {
          unitName: result.name,
          hp: result.hp,
          mp: result.mp,
          atk: result.atk,
          mag: result.mag,
          def: result.def,
          spr: result.spr, 
        }
      })})
      
      // .then(console.log)
      // .then(result => {this.setState({ 
      //   user: {
      //     nameName: result.name
      //   }
      // })});
        // unitName: result.name })})
      // .then(console.log)
      // .then(result => {console.log('result', result[0].name)})

      // .then(result => {this.setState({
      //   user: {
      //     unitName: result[0].name
      //   }
      // })})
      fetch('http://localhost:3000/unitList')
      .then(res => res.json())
      // unitList is an object
      // .then(unitList => {console.log('unit list: ', unitList)})
      .then(result => {this.setState({
        unitList: result
      })})

  }

  render() {
    return (
      <div className="App">
        <h1>FFBE Unit Builder</h1>
        <UnitSearch 
          unitList={this.state.unitList} 
          onUnitSelection={this.onUnitSelection}
          loadUnit={this.loadUnit}>
        </UnitSearch>
        <UnitInfo unit={this.state.user} ></UnitInfo>
        <Equipment></Equipment>
        {/* <Materia></Materia>
        <Esper></Esper> */}
        <h1>Name: {this.state.user.unitName}</h1>
        {/* <h2>Test: {console.log('unit list: ', this.state.unitList)}</h2>  */}
      </div>
    );
  }
}

export default App;
