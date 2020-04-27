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
        // unit_id: 0,
        sex_id: -1,
        sub_id: 0,
        roles: [],
        hp: [0,0,0], // Base, Pot, Door
        mp: [0,0,0],
        atk: [0,0,0],
        def: [0,0,0],
        mag: [0,0,0],
        spr: [0,0,0],
        equipment_option: [], // A combination of weapon + armor + 60 for accessory, delete if unused
        weapon_option:[],
        armor_option:[],
        //8:fire,ice,lightning,water,wind,earth,light,dark
        element_resist: [0,0,0,0,0,0,0,0],
        //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
        status_resist: [0,0,0,0,0,0,0,0],
        //5:charm,stop,berserk,break,death
        // resist_enfeeblement: [0,0,0,0,0],
        //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
        // killer:[0,0,0,0,0,0,0,0,0,0,0], 
        magical_resist: 0,
        physical_resist: 0,
        skills: [],
        latent_skills: [],
      },
      // unit_2: {
      //   name: "Blank",
      //   hp: [0,0,0], //[base, pot, door]
      //   mp: [0,0,0],
      //   atk: [0,0,0],
      //   def: [0,0,0],
      //   mag: [0,0,0],
      //   spr: [0,0,0],
      //   passive: [0,0,0,0,0,0], //[hp, mp, atk, def, mag, spr]
      //   //----------------------------implement later: 0 for cannot equip, 1 for can;
      //   weapon:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //16:dagger,sword,greatsword,katana,staff,rod,bow,axe,hammer,spear,instrument,whip,throwingweapon,gun,mace,fist
      //   armor:[0,0,0,0,0,0,0,0], //8:lightshield,heavyshield,hat,helm,clothes,lightarmor,heavyarmor,robe
      //   //-----------------------------
      //   element_resist: [0,0,0,0,0,0,0,0], //8:fire,ice,lightning,water,wind,earth,light,dark
      //   status_resist: [0,0,0,0,0,0,0,0], //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
      //   resist_enfeeblement: [0,0,0,0,0], //5:charm,stop,berserk,break,death
      //   killer:[0,0,0,0,0,0,0,0,0,0,0], //11:aquatic,beast,bird,demon,dragon,fairy,human,insect,machine,plant,stone
      //   tdh: 0, //percentage
      //   tdw: 0, //percentage
      //   lb_damage: 0, //percentage
      //   lb_fill_stone: 0, //max 12
      //   lb_fill_rate: 0, //p=percentage
      //   evasion_physical: 0, //softcap 100
      //   evasion_magic: 0, //softcap 100, multiple sources do NOT stack
      //   physical_resist: 0,
      //   magical_resist: 0,
      //   conditional: {},
      // },
      lHand: {
        name: "Empty",
        rarity: 0,
        eq_id: 0,
        type: 0,
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        // element_resist: [0,0,0,0,0,0,0,0],
        // status_resist: [0,0,0,0,0,0,0,0],
        is_twohanded: false,
        accuracy: 0,
        lower_limit: 0,
        upper_limit: 0,
        element_inflict: null,
        status_inflict: null,
        sex_requirements: null,
        unit_requirements: null,
        skills: null,
        fire_resist: 0,
        ice_resist: 0,
        lightning_resist: 0,
        water_resist: 0,
        wind_resist: 0,
        earth_resist: 0,
        light_resist: 0,
        dark_resist: 0,
        poison_resist: 0,
        blind_resist: 0,
        sleep_resist: 0,
        silence_resist: 0,
        paralyze_resist: 0,
        confusion_resist: 0,
        disease_resist: 0,
        petrify_resist: 0,
      }, 
      rHand: {
        name: "Spirit Gun",
        rarity: 0,
        eq_id: 0,
        type: 0,
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        // element_resist: [0,0,0,0,0,0,0,0],
        // status_resist: [0,0,0,0,0,0,0,0],
        is_twohanded: false,
        accuracy: 0,
        lower_limit: 0,
        upper_limit: 0,
        element_inflict: null,
        status_inflict: null,
        sex_requirements: null,
        unit_requirements: null,
        skills: null,
        fire_resist: 0,
        ice_resist: 0,
        lightning_resist: 0,
        water_resist: 0,
        wind_resist: 0,
        earth_resist: 0,
        light_resist: 0,
        dark_resist: 0,
        poison_resist: 0,
        blind_resist: 0,
        sleep_resist: 0,
        silence_resist: 0,
        paralyze_resist: 0,
        confusion_resist: 0,
        disease_resist: 0,
        petrify_resist: 0,
      },
      head: {
        name: "Empty",
        rarity: 0,
        eq_id: 0,
        type: 0,
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        // element_resist: [0,0,0,0,0,0,0,0],
        // status_resist: [0,0,0,0,0,0,0,0],
        sex_requirements: null,
        unit_requirements: null,
        skills: null,
        fire_resist: 0,
        ice_resist: 0,
        lightning_resist: 0,
        water_resist: 0,
        wind_resist: 0,
        earth_resist: 0,
        light_resist: 0,
        dark_resist: 0,
        poison_resist: 0,
        blind_resist: 0,
        sleep_resist: 0,
        silence_resist: 0,
        paralyze_resist: 0,
        confusion_resist: 0,
        disease_resist: 0,
        petrify_resist: 0,
      },
      body: {
        name: "Empty",
        rarity: 0,
        eq_id: 0,
        type: 0,
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        // element_resist: [0,0,0,0,0,0,0,0],
        // status_resist: [0,0,0,0,0,0,0,0],
        sex_requirements: null,
        unit_requirements: null,
        skills: null,
        fire_resist: 0,
        ice_resist: 0,
        lightning_resist: 0,
        water_resist: 0,
        wind_resist: 0,
        earth_resist: 0,
        light_resist: 0,
        dark_resist: 0,
        poison_resist: 0,
        blind_resist: 0,
        sleep_resist: 0,
        silence_resist: 0,
        paralyze_resist: 0,
        confusion_resist: 0,
        disease_resist: 0,
        petrify_resist: 0,
      },
      acc1: {
        name: "Empty",
        rarity: 0,
        eq_id: 0,
        type: 0,
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        // element_resist: [0,0,0,0,0,0,0,0],
        // status_resist: [0,0,0,0,0,0,0,0],
        sex_requirements: null,
        unit_requirements: null,
        skills: null,
        fire_resist: 0,
        ice_resist: 0,
        lightning_resist: 0,
        water_resist: 0,
        wind_resist: 0,
        earth_resist: 0,
        light_resist: 0,
        dark_resist: 0,
        poison_resist: 0,
        blind_resist: 0,
        sleep_resist: 0,
        silence_resist: 0,
        paralyze_resist: 0,
        confusion_resist: 0,
        disease_resist: 0,
        petrify_resist: 0,
      },
      acc2: {
        name: "Empty",
        rarity: 0,
        eq_id: 0,
        type: 0,
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        // element_resist: [0,0,0,0,0,0,0,0],
        // status_resist: [0,0,0,0,0,0,0,0],
        sex_requirements: null,
        unit_requirements: null,
        skills: null,
        fire_resist: 0,
        ice_resist: 0,
        lightning_resist: 0,
        water_resist: 0,
        wind_resist: 0,
        earth_resist: 0,
        light_resist: 0,
        dark_resist: 0,
        poison_resist: 0,
        blind_resist: 0,
        sleep_resist: 0,
        silence_resist: 0,
        paralyze_resist: 0,
        confusion_resist: 0,
        disease_resist: 0,
        petrify_resist: 0,
      },
      comparisonSlot: null,
      comparisonEq: null,
      materia1: null,
      materia2: null,
      materia3: null,
      materia4: null,
      unitList: {},
    }
    this.initUnitState = this.state.unit_1;
    this.initWeaponState = this.state.lHand;
    this.initArmorState = this.state.body;
    this.initAccessoryState = this.state.acc1;
    this.setEq = this.setEq.bind(this);
    this.setComparisonEq = this.setComparisonEq.bind(this);
  }

  async setEq(slot, equipment) { //remove async and await when testing finishes
    await this.setState({[slot]: equipment});
    
    // if(slot === "comparisonSlot"){
    //   await this.setState({[slot]: equipment});
    // } else {
    //   await this.setState({[slot]: equipment});
    //   await this.setState({comparisonSlot: null});
    // }
    // console.log(5);
    // console.log(`${slot}`, this.state[slot]);
  }

  setComparisonEq(activeSlot, equipment) {
    this.setState({comparisonSlot: activeSlot});
    this.setState({comparisonEq: equipment});
  }

  

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
        sub_id: res.sub_id,
        roles: res.roles,
        sex_id: res.sex_id,
        hp: [res.hp_base, res.hp_pot, res.hp_door],
        mp: [res.mp_base, res.mp_pot, res.mp_door],
        atk: [res.atk_base, res.atk_pot, res.atk_door],
        def: [res.def_base, res.def_pot, res.def_door],
        mag: [res.mag_base, res.mag_pot, res.mag_door],
        spr: [res.spr_base, res.spr_pot, res.spr_door],
        equipment_option: res.equip,
        // weapon_option: res.equip.map(x => { if(x>=1 && x<=16) return x }),
        weapon_option: res.equip.filter(x =>  x>=1 && x<=16),
        // armor_option: res.equip.map(x => { if(x>=30 && x<=53) return x }),
        armor_option: res.equip.filter(x => x>=30 && x<=53),
        element_resist: [res.fire_resist, res.ice_resist, res.lightning_resist, res.water_resist, res.wind_resist, res.earth_resist, res.light_resist, res.dark_resist],
        status_resist: [res.poison_resist, res.blind_resist, res.sleep_resist, res.silence_resist, res.paralyze_resist, res.confusion_resist, res.disease_resist, res.petrify_resist],
        physical_resist: res.physical_resist,
        magical_resist: res.magical_resist,
        skills: res.skills,
        latent_skills: res.latent_skills
      }
    }))})
};


  //resets unit to default state
  //In the future, pass unit number as parameter ex: unit_x, where x=number(1-5).
  resetUnit = () => {
    // this.setState({['unit_1']: this.initUnitState}); //
    this.setState({unit_1: this.initUnitState});
  };

 

  componentDidMount () {
      this.getUnitList();
      // this.getUnit();
      
      this.getTest();
  }

  getTest = async () => {
    // let x = 401006805; // Esther 5*
    let x = 401006807; // Esther 7*
    // let x = 100012505; // MS Nichol
    // let x = 215000605;
    let res = await axios.get(`http://localhost:3000/unit/${x}`);
    // let res = await axios.get('http://localhost:3000/unit');
    // let res = await axios.get('http://localhost:3000/materia');
    let data = res.data;
    console.log("Test Pull: ", data);
  };

  getUnitList = async () => {
    // let res = await axios.get('http://localhost:3000/unitList');
    let res = await axios.get('http://localhost:3000/unit');
    let data = res.data;
    this.setState({
      unitList: data
    });
  };

  //load unit for testing, remove when finished
  // getUnit = async () => { 
  //   let res = await axios.get('http://localhost:3000/loadDefaultUnit');
  //   let data = res.data;

  //   this.setState(initUnitState => ({
  //     unit_2: {
  //       ...initUnitState.unit_2,
  //       name: data.name,
  //       hp: data.stats.hp,
  //       mp: data.stats.mp,
  //       atk: data.stats.atk,
  //       def: data.stats.def,
  //       mag: data.stats.mag,
  //       spr: data.stats.spr,
  //       passive: data.stats.passive,
  //       weapon: data.weapon,
  //       armor: data.armor,
  //       element_resist: this.calcResistElement(data.resistance_element),
  //       status_resist: this.calcResistAilment(data.resistance_ailment),
  //       resist_enfeeblement: this.calcResistEnfeeblement(data.resistance_enfeeblement),
  //       killer: this.calcKiller(data.killer),
  //       tdh: data.tdh,
  //       tdw: data.tdw,
  //       lb_damage: data.lb_damage,
  //       lb_fill_rate: data.lb_fill_rate,
  //       lb_fill_stone: data.lb_fill_stone,
  //       evasion_magic: data.evasion_magic,
  //       evasion_physical: data.evasion_physical,
  //       regen_hp: data.regen_hp,
  //       regen_mp: data.regen_mp,
  //       conditional: data.conditional
  //     }
  //   }))
  // }
  
  render() {
    console.log('Render: App');
    return (
      <div className="App">
        <header className="app-header-container">
          <h1 className="app-header-title">FFBE: Unit Builder</h1>
          <h1 className="app-header-reset">RESET BUILDER</h1>
        </header>
        
        <UnitSearch 
          unitList={this.state.unitList} 
          onUnitSelection={this.onUnitSelection}
          // loadUnit={this.loadUnit} 
        />
        <UnitInfo 
          unit={this.state.unit_1} 
          // unit_2={this.state.unit_2}
          // equipment={this.calcTotalEqStats()}
          lHand={this.state.lHand}
          rHand={this.state.rHand}
          head={this.state.head}
          body={this.state.body}
          acc1={this.state.acc1}
          acc2={this.state.acc2}
          materia1={this.state.materia1}
          materia2={this.state.materia2}
          materia3={this.state.materia3}
          materia4={this.state.materia4}
          comparisonSlot={this.state.comparisonSlot}
        />
        <Equipment 
          setEq = {this.setEq}
          setComparisonEq = {this.setComparisonEq}
          // unit_weapon_option = {this.state.unit_1.weapon_option}
          // unit_armor_option = {this.state.unit_1.armor_option}
          unit_equipment_option = {this.state.unit_1.equipment_option}
          lHand={this.state.lHand}
          rHand={this.state.rHand}
          head={this.state.head}
          body={this.state.body}
          acc1={this.state.acc1}
          acc2={this.state.acc2}
        />
        {/* <div className="materia-seperator">
          <h1 className="materia-seperator-text">Materia</h1>
        </div> */}
        <Materia
          setEq = {this.setEq}
          setComparisonEq = {this.setComparisonEq}
          mat1={this.state.materia1}
          mat2={this.state.materia2}
          mat3={this.state.materia3}
          mat4={this.state.materia4}
        
        />
        {/* <button onClick={() => {this.resetUnit()}} > Reset </button> */}
      </div>
    );
  }
}

export default App;