import React, { Component } from 'react';
import UnitSearch from './components/UnitSearch/UnitSearch';
import UnitInfo from './components/UnitInfo/UnitInfo';
import Equipment from './components/Equipment/Equipment';
import Materia from './components/Materia/Materia';

import axios from 'axios';

import './App.css';

// const _ = require("lodash"); // Remove if remains unused

class App extends Component {
  constructor() {
    super();
    this.state = {
      unit_1: {
        name: "Unit Name",
        hp: [0,0,0],
        mp: [0,0,0],
        atk: [0,0,0],
        def: [0,0,0],
        mag: [0,0,0],
        spr: [0,0,0],
        equipment: [], // A combination of weapon + armor + 60 for accessory, delete if unused
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
        name: "Blank",
        hp: [0,0,0], //[base, pot, door]
        mp: [0,0,0],
        atk: [0,0,0],
        def: [0,0,0],
        mag: [0,0,0],
        spr: [0,0,0],
        passive: [0,0,0,0,0,0], //[hp, mp, atk, def, mag, spr]
        //----------------------------implement later: 0 for cannot equip, 1 for can;
        weapon:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //16:dagger,sword,greatsword,katana,staff,rod,bow,axe,hammer,spear,instrument,whip,throwingweapon,gun,mace,fist
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
        physical_resist: 0,
        magical_resist: 0,
        conditional: {},
      },
      lHand: {}, //Fill in with properties after state update tests
      rHand: {},
      head: {},
      body: {},
      acc1: {},
      acc2: {},
      eqCompare: {}, // For comparisons
      // totalEqStats: {
      //   name: "",
      //   type: "",
      //   element: "",
      //   stat: [0,0,0,0,0,0],
      //   passive: [0,0,0,0,0,0],
      //   resist_element: [0,0,0,0,0,0,0,0], //8:fire,ice,lightning,water,wind,earth,light,dark
      //   resist_ailment: [0,0,0,0,0,0,0,0], //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
      //   resist_enfeeblement: [0,0,0,0,0], //5:charm,stop,berserk,break,death
      //   killer:[0,0,0,0,0,0,0,0,0,0,0], //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
      //   tdh: 0, //percentage
      //   tdw: 0, //percentage
      //   lb_damage: 0, //percentage
      //   lb_fill_stone: 0, //max 12
      //   lb_fill_rate: 0, //p=percentage
      //   evasion_physical: 0, //softcap 100
      //   evasion_magic: 0, //softcap 100, multiple sources do NOT stack
      // }, 
      unitList: {},
    }
    this.initUnitState = this.state.unit_2;
    this.setEq = this.setEq.bind(this);
  }

  async setEq(slot, equipment) { //remove async and await when testing finishes
    await this.setState({[slot]: equipment});
    // console.log(`${slot}`, this.state[slot]);
  }

  //Save for equipment comparisons
  // handleEqComparison(slot, equipment) {
  // }

  //----------------------------------Continue---------------------------------
  calcTotalEqStats = () => {
    let total = { //temp state
      base: [0,0,0,0,0,0],
      passive: [0,0,0,0,0,0],
      resist_ailment: [0,0,0,0,0,0,0,0], //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
      resist_element: [0,0,0,0,0,0,0,0], //8:fire,ice,lightning,water,wind,earth,light,dark
      resist_enfeeblement: [0,0,0,0,0], //5:charm,stop,berserk,break,death
      killer:[0,0,0,0,0,0,0,0,0,0,0], //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
      tdh: 0, 
      tdw: 0,
      lb_damage: 0,
      lb_fill_rate: 0, 
      lb_fill_stone: 0, //max 12
      evasion_physical: 0, //softcap 100
      evasion_magic: 0
    };
    let { lHand, rHand, head, body, acc1, acc2 } = this.state;
    let eqArr = [lHand, rHand, head, body, acc1, acc2];

    for (let slot of eqArr) {
      if(Object.keys(slot).length > 0 && slot.constructor === Object) {
        for(let key in slot){
          if(key === 'name'){
            //do nothing, remove later
            // console.log('eq name ', key);
          } else if(key === 'stats'){
            for(let stat in slot[key]){
              if(stat === 'hp'){
                total.base[0] += slot[key][stat];
              } else if(stat === 'mp'){
                total.base[1] += slot[key][stat];
              } else if(stat === 'atk'){
                total.base[2] += slot[key][stat];
              } else if(stat === 'def'){
                total.base[3] += slot[key][stat];
              } else if(stat === 'mag'){
                total.base[4] += slot[key][stat];
              } else if(stat === 'spr'){
                total.base[5] += slot[key][stat];
              } else if(stat === 'passive'){
                let passiveArr = slot[key][stat];
                total.passive = total.passive.map(function (num, index) {
                  return num + passiveArr[index];
                });
              } 
            }
          } else if(key === 'resistance_ailment'){
            let ailmentArr = this.calcResistAilment(slot[key]);
            total.resist_ailment = total.resist_ailment.map(function (num, index) {
              return num + ailmentArr[index];
            });
          } else if(key === 'resistance_element'){
            let elementArr = this.calcResistElement(slot[key]);
            total.resist_element = total.resist_element.map(function (num, index) {
              return num + elementArr[index];
            });
          } else if(key === 'resistance_enfeeblement'){
            let enfeeblementArr = this.setResistEnfeeblement(slot[key]);
            total.resist_enfeeblement = total.resist_enfeeblement.map(function (num, index) {
              return num + enfeeblementArr[index];
            });
          } else if(key === 'killer'){
            let killerArr = this.calcKiller(slot[key]);
            total.killer = total.killer.map(function (num, index) {
              return num + killerArr[index];
            });
          } else if(key === 'tdh'){
            total.tdh += slot[key];
          } else if(key === 'tdw'){
            total.tdw += slot[key];
          } else if(key === 'lb_damage'){
            total.lb_damage += slot[key];
          } else if(key === 'lb_fill_rate'){
            total.lb_fill_rate += slot[key];
          } else if(key === 'lb_fill_stone'){
            total.lb_fill_stone += slot[key];
          } else if(key === 'evasion_magic'){
            total.evasion_magic += slot[key];
          } else if(key === 'evasion_physical'){
            total.evasion_physical += slot[key];
          } else if(key === 'regen_hp'){
            total.regen_hp += slot[key];
          } else if(key === 'regen_mp'){
            total.regen_mp += slot[key];
          } else if(key === 'conditional'){
            this.calcConditional(slot[key], total);
          }
          // console.log('bracket ', slot[key]);
        }
      }
    }

    this.calcConditional(this.state.unit_2.conditional, total);
    return total;
  }

  calcConditional = (obj, total) => {
    let eqArr = [];
    if(Object.keys(this.state.lHand).length > 0 && this.state.lHand.constructor === Object){
      eqArr.push(this.state.lHand);
    }
    if(Object.keys(this.state.rHand).length > 0 && this.state.rHand.constructor === Object){
      eqArr.push(this.state.rHand);
    }
    if(Object.keys(this.state.head).length > 0 && this.state.head.constructor === Object){
      eqArr.push(this.state.head);
    }
    if(Object.keys(this.state.body).length > 0 && this.state.body.constructor === Object){
      eqArr.push(this.state.body);
    }

    let tmrFlag = false;
    let tmrArr = [...eqArr];
    if(Object.keys(this.state.acc1).length > 0 && this.state.acc1.constructor === Object){
      tmrArr.push(this.state.acc1);
    }
    if(Object.keys(this.state.acc2).length > 0 && this.state.acc2.constructor === Object){
      tmrArr.push(this.state.acc2);
    }

    for(let condition in obj){
      //Checks specifically for equipment conditionals
      if(eqArr.some(function(element){ return element.type === condition ? true : false; })){
        for(let key in obj[condition]){
          this.addStats(obj[condition], key, total);
        }
      } else if (condition === 'tmr'){
        if(tmrArr.some(function(element){ return element.name === obj[condition]['name'] ? true : false; })){
          tmrFlag = true;     
          for(let key in obj[condition]){
            this.addStats(obj[condition], key, total);
          }
        }
      } else if (tmrFlag === false && condition === 'stmr'){
        if(tmrArr.some(function(element){ return element.name === obj[condition]['name'] ? true : false; })){
          tmrFlag = true;    
          for(let key in obj[condition]){
            this.addStats(obj[condition], key, total);
          }
        }
      }
    }
    // console.log('con total: ', total);
  }

  addStats = (obj, key, total) => {
    if( key === 'hp'){
      total.passive[0] += obj[key];
    } else if(key === 'mp'){
      total.passive[1] += obj[key];
    } else if(key === 'atk'){
      total.passive[2] += obj[key];
    } else if(key === 'def'){
      total.passive[3] += obj[key];
    } else if(key === 'mag'){
      total.passive[4] += obj[key];
    } else if(key === 'spr'){
      total.passive[5] += obj[key];
    } else if(key === 'resistance_ailment'){
      let ailmentArr = this.calcResistAilment(obj[key]);
      total.resist_ailment = total.resist_ailment.map(function (num, index) {
        return num + ailmentArr[index];
      });
    } else if(key === 'resistance_element'){
      let elementArr = this.calcResistElement(obj[key]);
      total.resist_element = total.resist_element.map(function (num, index) {
        return num + elementArr[index];
      });
    } else if(key === 'resistance_enfeeblement'){
      let enfeeblementArr = this.setResistEnfeeblement(obj[key]);
      total.resist_enfeeblement = total.resist_enfeeblement.map(function (num, index) {
        return num + enfeeblementArr[index];
      });
    } else if(key === 'killer'){
      let killerArr = this.calcKiller(obj[key]);
      total.killer = total.killer.map(function (num, index) {
        return num + killerArr[index];
      });
    } else if(key === 'tdh'){ //Next
      total.tdh += obj[key];
    } else if(key === 'tdw'){
      total.tdw += obj[key];
    } else if(key === 'lb_damage'){
      total.lb_damage += obj[key];
    } else if(key === 'lb_fill_rate'){
      total.lb_fill_rate += obj[key];
    } else if(key === 'lb_fill_stone'){
      total.lb_fill_stone += obj[key];
    } else if(key === 'evasion_magic'){
      total.evasion_magic += obj[key];
    } else if(key === 'evasion_physical'){
      total.evasion_physical += obj[key];
    } else if(key === 'regen_hp'){
      total.regen_hp += obj[key];
    } else if(key === 'regen_mp'){
      total.regen_mp += obj[key];
    }
  }


  //Researved for search field
  // onUnitSelection = (unitName) => {
  //   fetch("http://localhost:3000/loadUnit", {
  //       method: "post",
  //       headers: { 
  //         "Accept": "application/json",
  //         "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         unitName: unitName,
  //         // password: this.state.signInPassword
  //       })
  //     })
  //     .then(response => response.json())
  //     .then(res => {this.setState(initUnitState => ({
  //       unit_2: {
  //         ...initUnitState.unit_2,
  //         name: res.name,
  //         hp: res.stats.hp,
  //         mp: res.stats.mp,
  //         atk: res.stats.atk,
  //         def: res.stats.def,
  //         mag: res.stats.mag,
  //         spr: res.stats.spr,
  //         passive: res.stats.passive,
  //         weapon: res.weapon,
  //         armor: res.armor,
  //         resist_element: this.calcResistElement(res.resistance_element),
  //         resist_ailment: this.calcResistAilment(res.resistance_ailment),
  //         resist_enfeeblement: this.calcResistEnfeeblement(res.resistance_enfeeblement),
  //         killer: this.calcKiller(res.killer),
  //         tdh: res.tdh,
  //         tdw: res.tdw,
  //         lb_damage: res.lb_damage,
  //         lb_fill_rate: res.lb_fill_rate,
  //         lb_fill_stone: res.lb_fill_stone,
  //         evasion_magic: res.evasion_magic,
  //         evasion_physical: res.evasion_physical,
  //         regen_hp: res.regen_hp,
  //         regen_mp: res.regen_mp,
  //         conditional: res.conditional
  //       }
  //     }))})
  // };

  //---------------------------------------------New
  // New on searchbar selection
  onUnitSelection = (unit_id) => {
    fetch(`http://localhost:3000/unit/${unit_id}`, {
      method: "get",
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json" 
      }
    })
    .then(response => response.json())
    // .then(res => console.log(res.name));
    .then(res => {this.setState(initUnitState => ({
      unit_1: {
        ...initUnitState.unit_1,
        name: res.name,
        hp: [res.hp_base, res.hp_pot, res.hp_door],
        mp: [res.mp_base, res.mp_pot, res.mp_door],
        atk: [res.atk_base, res.atk_pot, res.atk_door],
        def: [res.def_base, res.def_pot, res.def_door],
        mag: [res.mag_base, res.mag_pot, res.mag_door],
        spr: [res.spr_base, res.spr_pot, res.spr_door],
        // passive: res.stats.passive,
        equipment: res.equipment_option,
        weapon: res.equipment_option.map(x => { if(x>=1 && x<=16) return x }),
        armor: res.equipment_option.map(x => { if(x>=30 && x<=53) return x }),
        resist_element: [res.fire_resist, res.ice_resist, res.lightning_resist, res.water_resist, res.wind_resist, res.earth_resist, res.light_resist, res.dark_resist],
        resist_ailment: [res.poison_resist, res.blind_resist, res.sleep_resist, res.silence_resist, res.paralyze_resist, res.confusion_resist, res.disease_resist, res.petrify_resist],
        // resist_enfeeblement: this.calcResistEnfeeblement(res.resistance_enfeeblement),
        // killer: this.calcKiller(res.killer),
        // tdh: res.tdh,
        // tdw: res.tdw,
        // lb_damage: res.lb_damage,
        // lb_fill_rate: res.lb_fill_rate,
        // lb_fill_stone: res.lb_fill_stone,
        // evasion_magic: res.evasion_magic,
        // evasion_physical: res.evasion_physical,
        // regen_hp: res.regen_hp,
        // regen_mp: res.regen_mp,
        // conditional: res.conditional
        physical_resist: res.physical_resist,
        magical_resist: res.magical_resist
      }
    }))})
};


  //resets unit to default state
  //In the future, pass unit number as parameter ex: unit_x, where x=number(1-5).
  resetUnit = () => {
    this.setState({['unit_2']: this.initUnitState}); //
  };

  //change the function's name to something more meaningful
  //8:fire,ice,lightning,water,wind,earth,light,dark
  calcResistElement = (obj) => {
    let elementArr = [0,0,0,0,0,0,0,0];
    if(obj !== undefined){
      for(let element in obj){
        if(element === 'fire') {
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
    return elementArr;
  }

  //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
  calcResistAilment = (obj) => {
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
    return elementArr;
  }

  //5:charm,stop,berserk,break,death
  calcResistEnfeeblement = (obj) => {
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
    return elementArr;
  }

  //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
  calcKiller = (obj) => {
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
    return elementArr;
  }

  componentDidMount () {
      this.getUnitList();
      this.getUnit();
      
      this.getTest();
  }

  getTest = async () => {
    let x = 401006805;
    let res = await axios.get(`http://localhost:3000/unit/${x}`);
    // let res = await axios.get('http://localhost:3000/unit');
    let data = res.data;
    console.log("xxxx: ", data);
  }

  getUnitList = async () => {
    // let res = await axios.get('http://localhost:3000/unitList');
    let res = await axios.get('http://localhost:3000/unit');
    let data = res.data;
    this.setState({
      unitList: data
    })
  }

  //load unit for testing, remove when finished
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
        resist_element: this.calcResistElement(data.resistance_element),
        resist_ailment: this.calcResistAilment(data.resistance_ailment),
        resist_enfeeblement: this.calcResistEnfeeblement(data.resistance_enfeeblement),
        killer: this.calcKiller(data.killer),
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
    // console.log('unit_2 ', this.state.unit_2);
  }
  
  render() {
    console.log('Render: App');
    return (
      <div className="App">
        <h1 className="app-header">FFBE Unit Builder</h1>
        <UnitSearch 
          unitList={this.state.unitList} 
          onUnitSelection={this.onUnitSelection}
          // loadUnit={this.loadUnit} 
          >
        </UnitSearch>
        <UnitInfo 
          unit_1={this.state.unit_1} 
          unit_2={this.state.unit_2}
          equipment={this.calcTotalEqStats()}
        >
        </UnitInfo>
        <Equipment setEq = {this.setEq}></Equipment>
        {/* <div className="materia-seperator">
          <h1 className="materia-seperator-text">Materia</h1>
        </div> */}
        <Materia></Materia>
        {/* <Esper></Esper> */}
        <button onClick={() => {this.resetUnit()}} > Reset </button>
        <button onClick={() => {this.calcTotalEqStats()}} > Calc </button>
      </div>
    );
  }
}

export default App;