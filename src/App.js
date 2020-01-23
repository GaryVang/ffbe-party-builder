import React, { Component } from 'react';
import UnitSearch from './components/UnitSearch/UnitSearch';
import UnitInfo from './components/UnitInfo/UnitInfo';
import Equipment from './components/Equipment/Equipment';

import { useEffect, useState } from "react";
import axios from 'axios';

import './App.css';

const _ = require("lodash"); // Remove if remains unused

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
      unit_1: {
        name: "",
        hp: [],
        mp: [],
        atk: [],
        def: [],
        mag: [],
        spr: [],
        weapon:[],
        armor:[],
        //8:fire,ice,lightning,water,wind,earth,light,dark
        resist_element: [0,0,0,0,0,0,0,0],
        //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
        resist_ailment: [0,0,0,0,0,0,0,0],
        //5:charm,stop,berserk,break,death
        resist_enfeeblement: [0,0,0,0,0],
        //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
        killer:[0,0,0,0,0,0,0,0,0,0,0],
        hp_base: 0,
        mp_base: 0,
        atk_base: 0,
        def_base: 0,
        mag_base: 0,
        spr_base: 0,
        hp_p: 0, //p=percentage
        mp_p: 0,
        atk_p: 0,
        def_p: 0,
        mag_p: 0,
        spr_p: 0,
        resist_element_fire: 0,
        resist_element_ice: 0,
        resist_element_lightning: 0,
        resist_element_water: 0,
        resist_element_wind: 0,
        resist_element_earth: 0,
        resist_element_light: 0,
        resist_element_dark: 0,
        resist_ailment_poison: 0,
        resist_ailment_blind: 0,
        resist_ailment_sleep: 0,
        resist_ailment_silence: 0,
        resist_ailment_paralysis: 0,
        resist_ailment_confusion: 0,
        resist_ailment_disease: 0,
        resist_ailment_petrification: 0,
        resistance_enfeeblement_charm: 0,
        resistance_enfeeblement_stop: 0,
        resistance_enfeeblement_berserk: 0,
        resistance_enfeeblement_break: 0,
        killer_aquatic: 0, //percentage
        killer_beast: 0,
        killer_bird: 0,
        killer_demon: 0,
        killer_dragon: 0,
        killer_fairy: 0,
        killer_human: 0,
        killer_insect: 0,
        killer_machine: 0,
        killer_plant: 0,
        killer_stone: 0,
        tdh: 0, //percentage
        tdw: 0, //percentage
        lb_damage: 0, //percentage
        lb_fill_stone: 0, //max 12
        lb_fill_p: 0, //p=percentage
        evasion_physical: 0, //softcap 100
        evasion_magic: 0, //softcap 100, multiple sources do NOT stack
        conditional: {},
      },
      unit_2: {
        name: "",
        hp: [1,1,1], //[base, pot, door]
        mp: [1,1,1],
        atk: [1,1,1],
        def: [1,1,1],
        mag: [1,1,1],
        spr: [1,1,1],
        passive: [0,0,0,0,0,0], //[hp, mp, atk, def, mag, spr]
        //----------------------------implement later: 0 for cannot equip, 1 for can;
        //16:dagger,sword,greatsword,katana,staff,rod,bow,axe,hammer,spear,instrument,whip,throwingweapon,gun,mace,fist
        weapon:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        armor:[0,0,0,0,0,0,0,0], //8:lightshield,heavyshield,hat,helm,clothes,lightarmor,heavyarmor,robe
        //-----------------------------
        resist_element: [0,0,0,0,0,0,0,0], //8:fire,ice,lightning,water,wind,earth,light,dark
        resist_ailment: [0,0,0,0,0,0,0,0], //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
        resist_enfeeblement: [0,0,0,0,0], //5:charm,stop,berserk,break,death
        killer:[0,0,0,0,0,0,0,0,0,0,0], //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
        tdh: 0, //percentage
        tdw: 0, //percentage
        lb_damage: 0, //percentage
        lb_fill_stone: 0, //max 12
        lb_fill_rate: 0, //p=percentage
        evasion_physical: 0, //softcap 100
        evasion_magic: 0, //softcap 100, multiple sources do NOT stack
        conditional: {},
      },
      lHand: null, //Fill in with properties after state update tests
      rHand: null,
      head: null,
      body: null,
      acc1: null,
      acc2: null,
      eqCompare: {}, // For comparisons
      totalEqStats: {
        name: "",
        type: "",
        element: "",
        stat: [0,0,0,0,0,0],
        passive: [0,0,0,0,0,0],
        resist_element: [0,0,0,0,0,0,0,0], //8:fire,ice,lightning,water,wind,earth,light,dark
        resist_ailment: [0,0,0,0,0,0,0,0], //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
        resist_enfeeblement: [0,0,0,0,0], //5:charm,stop,berserk,break,death
        killer:[0,0,0,0,0,0,0,0,0,0,0], //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
        tdh: 0, //percentage
        tdw: 0, //percentage
        lb_damage: 0, //percentage
        lb_fill_stone: 0, //max 12
        lb_fill_rate: 0, //p=percentage
        evasion_physical: 0, //softcap 100
        evasion_magic: 0, //softcap 100, multiple sources do NOT stack

      }, 
      unitList: {},
    }
    this.initState = this.state.unit_1;
    this.initUnitState = this.state.unit_2;
    this.setEq = this.setEq.bind(this);
  }

  async setEq(slot, equipment) { //remove async and await when testing finishes
    await this.setState({[slot]: equipment});
    console.log(`${slot}`, this.state[slot]);
  }

  //Use for equipment comparisons
  handleEqComparison(slot, equipment) {

  }

  //----------------------------------Continue---------------------------------
  calcTotalEqStats = () => {
    let total = {
      base: [0,0,0,0,0,0],
      passive: [0,0,0,0,0,0],
      resist_element: [0,0,0,0,0,0,0,0], //8:fire,ice,lightning,water,wind,earth,light,dark
      resist_ailment: [0,0,0,0,0,0,0,0], //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
      resist_enfeeblement: [0,0,0,0,0], //5:charm,stop,berserk,break,death
      killer:[0,0,0,0,0,0,0,0,0,0,0], //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
      tdh: 0, //percentage
      tdw: 0, //percentage
      lb_damage: 0, //percentage
      lb_fill_stone: 0, //max 12
      lb_fill_rate: 0, //p=percentage
      evasion_physical: 0, //softcap 100
      evasion_magic: 0
    };
    let { lHand, rHand, head, body, acc1, acc2 } = this.state;
    let eqArr = [lHand, rHand, head, body, acc1, acc2];

    for (let slot of eqArr) {
      // if(eq != null) { // js coerces
      if(slot) {
        for(let key in slot){
          if(key === 'name'){
            //do nothing
            console.log('eq name ', key);
          } else if(key === 'stats'){
            for(let stat in key){
              if(stat === 'hp'){
                total.base[0] += key[stat];
              } else if(stat === 'mp'){
                total.base[1] += key[stat];
              } else if(stat === 'atk'){
                total.base[2] += key[stat];
              } else if(stat === 'def'){
                total.base[3] += key[stat];
              } else if(stat === 'mag'){
                total.base[4] += key[stat];
              } else if(stat === 'spr'){
                total.base[5] += key[stat];
              } else if(stat === 'passive'){
                total.passive += key[stat]; // doublecheck
              }
            }
            total.base[0] += slot[key]['hp'];
            // total.base[0] += slot.key.hp;

            console.log('bracket ', slot[key]);
            // console.log('dot ', slot.key);
          }
        }
      }
    }

    console.log('total ', total);
    // this.setState({totalEqStats: total});

  }

   //Hook States specifically only for equipment
  //  const [lHand, setLHand] = useState({});
  //  const [rHand, setRHand] = useState({});
  //  const [head, setHead] = useState({});
  //  const [body, setBody] = useState({});
  //  const [acc1, setAcc1] = useState({});
  //  const [acc2, setAcc2] = useState({});

  //  //Currently selected equipment slot
  //  const[activeSlot, setActiveSlot] = useState('');

  // onDropdownSelect = () => {
  //   this.setState({ });
  //   fetch("http://localhost:3000/", {
  //     method: "get",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({

  //     })
  //   })
  // }

  

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
      // .then(result => {this.setState({
      //   user: {
      //     unitName: result.name,
      //     hp: result.hp,
      //     mp: result.mp,
      //     atk: result.atk,
      //     mag: result.mag,
      //     def: result.def,
      //     spr: result.spr, 
      //   }
      // })})
      .then(res => {this.setState(initUnitState => ({
        unit_2: {
          ...initUnitState.unit_2,
          name: res.name,
          hp: res.stats.hp,
          mp: res.stats.mp,
          atk: res.stats.atk,
          def: res.stats.def,
          mag: res.stats.mag,
          spr: res.stats.spr,
          passive: res.stats.passive,
          weapon: res.weapon,
          armor: res.armor,
          resist_element: this.setResistElement(res.resistance_element),
          resist_ailment: this.setResistAilment(res.resistance_ailment),
          resist_enfeeblement: this.setReistEnfeeblement(res.resistance_enfeeblement),
          killer: this.setKiller(res.killer),
          tdh: res.tdh,
          tdw: res.tdw,
          lb_damage: res.lb_damage,
          lb_fill_rate: res.lb_fill_rate,
          lb_fill_stone: res.lb_fill_stone,
          evasion_magic: res.evasion_magic,
          evasion_physical: res.evasion_physical,
          regen_hp: res.regen_hp,
          regen_mp: res.regen_mp,
          conditional: res.conditional
        }
      }))})
  };

  loadUnit = (unitData) => { //Currently unused
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

  //resets unit to default state
  //In the future, pass unit number as parameter ex: unit_x, where x=number(1-5).
  resetUnit = () => {
    this.setState({['unit_2']: this.initUnitState}); //
  };

  //change the function's name to something more meaningful
  //8:fire,ice,lightning,water,wind,earth,light,dark
  setResistElement = (obj) => {
    // console.log('obj ', obj);
    let elementArr = [0,0,0,0,0,0,0,0];
    
    if(obj !== undefined){
      for(let element in obj){
        if(element === 'fire') {
          // console.log('elemental: ', element);
          elementArr[0] += obj[element];
        } else if(element === 'ice') {
          elementArr[1] += obj[element]; 
        } else if(element === 'lightning') {
          elementArr[2] += obj[element]; 
        } else if(element === 'water') {
          elementArr[3] += obj[element]; 
        } else if(element === 'wind') {
          elementArr[4] += obj[element]; 
        } else if(element === 'earth') {
          elementArr[5] += obj[element]; 
        } else if(element === 'light') {
          elementArr[6] += obj[element]; 
        } else if(element === 'dark') {
          elementArr[7] += obj[element]; 
        } 
      }
    }
    console.log('elArr ', elementArr);
    return elementArr;
  }

  //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
  setResistAilment = (obj) => {
    let elementArr = [0,0,0,0,0,0,0,0];
    if(obj !== undefined){
      for(let element in obj){
        if(element === 'poison') {
          elementArr[0] += obj[element];
        } else if(element === 'blind') {
          elementArr[1] += obj[element]; 
        } else if(element === 'sleep') {
          elementArr[2] += obj[element]; 
        } else if(element === 'silence') {
          elementArr[3] += obj[element]; 
        } else if(element === 'paralysis') {
          elementArr[4] += obj[element]; 
        } else if(element === 'confusion') {
          elementArr[5] += obj[element]; 
        } else if(element === 'disease') {
          elementArr[6] += obj[element]; 
        } else if(element === 'petrification') {
          elementArr[7] += obj[element]; 
        } 
      }
    }
    console.log('ailmentArr ', elementArr);
    return elementArr;
  }

  //5:charm,stop,berserk,break,death
  setReistEnfeeblement = (obj) => {
    let elementArr = [0,0,0,0,0,];
    if(obj !== undefined){
      for(let element in obj){
        if(element === 'charm') {;
          elementArr[0] += obj[element];
        } else if(element === 'stop') {
          elementArr[1] += obj[element]; 
        } else if(element === 'berserk') {
          elementArr[2] += obj[element]; 
        } else if(element === 'break') {
          elementArr[3] += obj[element]; 
        } else if(element === 'death') {
          elementArr[4] += obj[element]; 
        } 
      }
    }
    console.log('enfeebleArr ', elementArr);
    return elementArr;
  }

  //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
  setKiller = (obj) => {
    let elementArr = [0,0,0,0,0,0,0,0,0,0,0];
    if(obj !== undefined){
      for(let element in obj){
        if(element === 'aquatic') {
          elementArr[0] += obj[element];
        } else if(element === 'beast') {
          elementArr[1] += obj[element]; 
        } else if(element === 'bird') {
          elementArr[2] += obj[element]; 
        } else if(element === 'demon') {
          elementArr[3] += obj[element]; 
        } else if(element === 'dragon') {
          elementArr[4] += obj[element]; 
        } else if(element === 'fairy') {
          elementArr[5] += obj[element]; 
        } else if(element === 'human') {
          elementArr[6] += obj[element]; 
        } else if(element === 'insect') {
          elementArr[7] += obj[element]; 
        } else if(element === 'machine') {
          elementArr[8] += obj[element]; 
        } else if(element === 'plant') {
          elementArr[9] += obj[element]; 
        } else if(element === 'stone') {
          elementArr[10] += obj[element]; 
        } 
      }
    }
    console.log('killerArr ', elementArr);
    return elementArr;
  }


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
      
      // fetch('http://localhost:3000/loadDefaultUnit')
      //   .then(response => response.json())
      //   // .then(result => {console.log('result', result)})
      //   // .then(result => {console.log('result: ', result.name)})
      //   .then(result => { this.setState(initState => ({ 
      //     unit_1: {
      //         ...initState.unit_1,
      //       name: result.name,
      //       hp: result.stats.hp,
      //       mp: result.stats.mp,
      //       atk: result.stats.atk,
      //       def: result.stats.def,
      //       mag: result.stats.mag,
      //       spr: result.stats.spr,
      //       //resistance_ailment:
      //       // resistance_elemental: this.setResistanceElemental(result.stats.resistance_elemental),
      //       //resistance_enfeeblement:
      //       //killer
      //       evasion_magic: result.evasion_magic,
      //       evasion_physical: result.evasion_physical,
      //       regen_mp: result.regen_mp,
      //       conditional: result.conditional
      //     }
      //   }))
      // })
        // .then(console.log('name: ', this.state.unit_1.name))

//--------------original unitList fetch
//       fetch('http://localhost:3000/unitList')
//       .then(res => res.json())
//       .then(result => {this.setState({
//         unitList: result
//       })})
// //-------------------------------------
      this.getUnitList();
      this.getUnit();


      // console.log('total: ', this.state.totalEqStats);
      // this.state.lHand == null ?  console.log('7 lHand empty ', this.state.lHand):
      // console.log('6 lhand not ', this.state.lHand);
      // let unit1 = {'name': "Lightning", 'hp': 10};
      // let unit2 = {'name': "Esther", 'hp': 15};

      // console.log('merge: ', _.merge(unit1, unit2));

      // let items = [
      //   { 'lightBlue': 4, 'darkBlue': 2, 'red': 4, 'orange': 6, 'purple': 7 },
      //   { 'lightBlue': 6, 'darkBlue': 5, 'red': 1, 'orange': 2, 'purple': 3 },
      //   { 'lightBlue': 2, 'darkBlue': 4, 'red': 3, 'orange': 4, 'purple': 9 }
      // ], userSelectedColors = ['lightBlue', 'darkBlue'];

      // console.log('lodash ', _.sumBy(userSelectedColors, _.partial(_.sumBy, items)));
  }

  getUnitList = async () => {
    let res = await axios.get('http://localhost:3000/unitList');
    let data = res.data;
    this.setState({
      unitList: data
    })
  }

  getUnit = async () => {
    let res = await axios.get('http://localhost:3000/loadDefaultUnit');
    let data = res.data;

    this.setState(initUnitState => ({
      unit_2: {
        ...initUnitState.unit_2,
        name: data.name,
        hp: data.stats.hp,
        mp: data.stats.mp,
        atk: data.stats.atk,
        def: data.stats.def,
        mag: data.stats.mag,
        spr: data.stats.spr,
        passive: data.stats.passive,
        weapon: data.weapon,
        armor: data.armor,
        resist_element: this.setResistElement(data.resistance_element),
        resist_ailment: this.setResistAilment(data.resistance_ailment),
        resist_enfeeblement: this.setReistEnfeeblement(data.resistance_enfeeblement),
        killer: this.setKiller(data.killer),
        tdh: data.tdh,
        tdw: data.tdw,
        lb_damage: data.lb_damage,
        lb_fill_rate: data.lb_fill_rate,
        lb_fill_stone: data.lb_fill_stone,
        evasion_magic: data.evasion_magic,
        evasion_physical: data.evasion_physical,
        regen_hp: data.regen_hp,
        regen_mp: data.regen_mp,
        conditional: data.conditional
      }
    }))
    console.log('unit_2 ', this.state.unit_2);
  }
  
  render() {
    console.log('Render: App');

    return (
      <div className="App">
        <h1>FFBE Unit Builder</h1>
        <UnitSearch 
          unitList={this.state.unitList} 
          onUnitSelection={this.onUnitSelection}
          // loadUnit={this.loadUnit} 
          >
        </UnitSearch>
        <UnitInfo 
          // unit={this.state.user} 
          unit_2={this.state.unit_2}
        >
        </UnitInfo>
        <Equipment setEq = {this.setEq}></Equipment>
        {/* <Materia></Materia>
        <Esper></Esper> */}
        {/* <h1>Name: {this.state.user.unitName}</h1> */}
        {/* <h2>Test: {console.log('unit list: ', this.state.unitList)}</h2>  */}
        <button onClick={() => {this.resetUnit()}} > Reset </button>
        <button onClick={() => {this.calcTotalEqStats()}} > Calc </button>

      </div>
    );
  }
}

export default App;
