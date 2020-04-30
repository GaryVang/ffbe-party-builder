import React, { Component } from "react";
import UnitSearch from "./components/UnitSearch/UnitSearch";
import UnitInfo from "./components/UnitInfo/UnitInfo";
import Equipment from "./components/Equipment/Equipment";
import Materia from "./components/Materia/Materia";

import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unit_1: {
        name: "",
        // unit_id: 0,
        sex_id: -1,
        sub_id: 0,
        roles: [],
        hp: [0, 0, 0], // Base, Pot, Door
        mp: [0, 0, 0],
        atk: [0, 0, 0],
        def: [0, 0, 0],
        mag: [0, 0, 0],
        spr: [0, 0, 0],
        equipment_option: [], // A combination of weapon + armor + 60 for accessory, delete if unused
        weapon_option: [],
        armor_option: [],
        //8:fire,ice,lightning,water,wind,earth,light,dark
        element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
        //8:poison,blind,sleep,silence,paralysis,confusion,disease,petrification
        status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
        magical_resist: 0,
        physical_resist: 0,
        skills: [],
        latent_skills: [],
      },
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
      resetFlag: false,
    };
    this.initUnitState = this.state.unit_1;
    this.initWeaponState = this.state.lHand;
    this.initArmorState = this.state.body;
    this.initAccessoryState = this.state.acc1;
    this.initMateriaState = this.state.materia1;
    this.setEq = this.setEq.bind(this);
    this.setComparisonEq = this.setComparisonEq.bind(this);
    this.resetBuilder = this.resetBuilder.bind(this);
    this.reset = this.reset.bind(this);
  }

  getInitUnitState = () => ({
    name: "",
    sex_id: -1,
    sub_id: 0,
    roles: [],
    hp: [0, 0, 0],
    mp: [0, 0, 0],
    atk: [0, 0, 0],
    def: [0, 0, 0],
    mag: [0, 0, 0],
    spr: [0, 0, 0],
    equipment_option: [],
    weapon_option: [],
    armor_option: [],
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    magical_resist: 0,
    physical_resist: 0,
    skills: [],
    latent_skills: [],
  });

  getInitWeaponState = () => ({
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
  });

  setEq(slot, equipment) {
    this.setState({ [slot]: equipment });
  }

  setComparisonEq(activeSlot, equipment) {
    this.setState({ comparisonSlot: activeSlot });
    this.setState({ comparisonEq: equipment });
  }

  onUnitSelection = (unit_id) => {
    fetch(`http://localhost:3000/unit/${unit_id}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState((initUnitState) => ({
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
            weapon_option: res.equip.filter((x) => x >= 1 && x <= 16),
            armor_option: res.equip.filter((x) => x >= 30 && x <= 53),
            element_resist: [
              res.fire_resist,
              res.ice_resist,
              res.lightning_resist,
              res.water_resist,
              res.wind_resist,
              res.earth_resist,
              res.light_resist,
              res.dark_resist,
            ],
            status_resist: [
              res.poison_resist,
              res.blind_resist,
              res.sleep_resist,
              res.silence_resist,
              res.paralyze_resist,
              res.confusion_resist,
              res.disease_resist,
              res.petrify_resist,
            ],
            physical_resist: res.physical_resist,
            magical_resist: res.magical_resist,
            skills: res.skills,
            latent_skills: res.latent_skills,
          },
        }));
      });
  };

  componentDidMount() {
    this.getUnitList();
  }

  getUnitList = async () => {
    let res = await axios.get("http://localhost:3000/unit");
    let data = res.data;
    this.setState({
      unitList: data,
    });
  };

  resetBuilder = () => {
    this.setState({
      unit_1: this.initUnitState,
      // unit_1: this.getInitUnitState(),
      lHand: this.initWeaponState,
      // lHand: this.getInitWeaponState(),
      rHand: this.initWeaponState,
      // rHand: this.getInitWeaponState(),
      body: this.initArmorState,
      head: this.initArmorState,
      acc1: this.initAccessoryState,
      acc2: this.initAccessoryState,
      materia1: this.initMateriaState,
      materia2: this.initMateriaState,
      materia3: this.initMateriaState,
      materia4: this.initMateriaState,
    });
    this.setState({ resetFlag: !this.state.resetFlag });
  };

  reset = () => {
    this.setState({ resetFlag: false });
  };

  render() {
    return (
      <div className="App">
        <header className="app-header-container">
          <h1 className="app-header-title">FFBE: Unit Builder</h1>
          <h1 className="app-header-reset" onClick={this.resetBuilder}>
            RESET BUILDER
          </h1>
        </header>

        <UnitSearch
          defaultSearch={this.state.unit_1.name}
          key={this.state.resetFlag}
          unitList={this.state.unitList}
          onUnitSelection={this.onUnitSelection}
        />
        <UnitInfo
          unit={this.state.unit_1}
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
          setEq={this.setEq}
          setComparisonEq={this.setComparisonEq}
          unit_equipment_option={this.state.unit_1.equipment_option}
          lHand={this.state.lHand}
          rHand={this.state.rHand}
          head={this.state.head}
          body={this.state.body}
          acc1={this.state.acc1}
          acc2={this.state.acc2}
        />
        <Materia
          setEq={this.setEq}
          setComparisonEq={this.setComparisonEq}
          mat1={this.state.materia1}
          mat2={this.state.materia2}
          mat3={this.state.materia3}
          mat4={this.state.materia4}
        />
      </div>
    );
  }
}

export default App;
