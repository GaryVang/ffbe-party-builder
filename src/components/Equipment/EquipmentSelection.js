import React, { useEffect, useState } from "react";
import "./EquipmentSelection.css";
import EquipmentPanel from "./EquipmentPanel";
import MateriaPanel from "../Materia/MateriaPanel";

import dagger from "./EquipmentIcon/Weapon/equipment-dagger.png";
import sword from "./EquipmentIcon/Weapon/equipment-sword.png";
import greatsword from "./EquipmentIcon/Weapon/equipment-greatsword.png";
import katana from "./EquipmentIcon/Weapon/equipment-katana.png";
import staff from "./EquipmentIcon/Weapon/equipment-staff.png";
import rod from "./EquipmentIcon/Weapon/equipment-rod.png";
import bow from "./EquipmentIcon/Weapon/equipment-bow.png";
import axe from "./EquipmentIcon/Weapon/equipment-axe.png";
import hammer from "./EquipmentIcon/Weapon/equipment-hammer.png";
import spear from "./EquipmentIcon/Weapon/equipment-spear.png";
import instrument from "./EquipmentIcon/Weapon/equipment-instrument.png";
import whip from "./EquipmentIcon/Weapon/equipment-whip.png";
import throwingweapon from "./EquipmentIcon/Weapon/equipment-throwingweapon.png";
import gun from "./EquipmentIcon/Weapon/equipment-gun.png";
import mace from "./EquipmentIcon/Weapon/equipment-mace.png";
import fist from "./EquipmentIcon/Weapon/equipment-fist.png";
import lightshield from "./EquipmentIcon/Armor/equipment-lightshield.png";
import heavyshield from "./EquipmentIcon/Armor/equipment-heavyshield.png";
import clothes from "./EquipmentIcon/Armor/equipment-clothes.png";
import lightarmor from "./EquipmentIcon/Armor/equipment-lightarmor.png";
import heavyarmor from "./EquipmentIcon/Armor/equipment-heavyarmor.png";
import robe from "./EquipmentIcon/Armor/equipment-robe.png";
import hat from "./EquipmentIcon/Armor/equipment-hat.png";
import helm from "./EquipmentIcon/Armor/equipment-helm.png";
import { set } from "lodash";

import CloseIcon from "@material-ui/icons/KeyboardArrowLeft";

const EquipmentSelection = ({
  eqList,
  setDisplayEqSelection,
  setEq,
  setComparisonEq,
  activeSlot,
}) => {
  const [filterFlag, setFilterFlag] = useState(false);
  const [sortFlag, setSortFlag] = useState(false);

  const [sortConfig, setSortConfig] = useState({type: 'name', order: 'asc'});
  useEffect(() => {
    console.log('sortConfig: ', sortConfig);
  }, [sortConfig]);

  const [didMount, setDidMount] = useState(false);
  useEffect(() => setDidMount(true), []);

  const [selectedEquipment, setSelectedEquipment] = useState({});
  useEffect(() => {
    if (didMount && (Object.keys(selectedEquipment).length !== 0 && selectedEquipment.constructor === Object)) {
    // if (didMount) { //Uncomment if lower resource cost is preferred over quicker load time
      setComparisonEq(activeSlot, selectedEquipment);
    }
  }, [selectedEquipment]);

  const handleChange = (equipment) => (e) => {
    setSelectedEquipment(equipment);
    // setComparisonEq(activeSlot, selectedEquipment);
    //-------------------
    // setSelectedEquipment(equipment);
  };

  const handleClose = (e) => {
    // setDisplayEqSelection({ flag: false });
    setDisplayEqSelection("");
    setSelectedEquipment({}); //Comment if lower resource cost is preferred over quicker load time

    // if (selectedEquipment) {
    //   setEq(activeSlot, selectedEquipment);
    //   setComparisonEq(null, null);
    // }
    if (
      Object.keys(selectedEquipment).length !== 0 &&
      selectedEquipment.constructor === Object
    ) {
      setEq(activeSlot, selectedEquipment);
      setComparisonEq(null, null);
    }
  };

  const renderEqOrMateria = () => {
    if (
      activeSlot === "lHand" ||
      activeSlot === "rHand" ||
      activeSlot === "head" ||
      activeSlot === "body" ||
      activeSlot === "acc1" ||
      activeSlot === "acc2"
    ) {
      return (
        <div className="eq-select-content-container">
          {filterFlag !== false ? (
            <div className="eq-icon-container">
              <div className="eq-icon-weapon">
                <img className="icon-dagger" alt="dagger" src={dagger} />
                <img className="icon-sword" alt="sword" src={sword} />
                <img
                  className="icon-greatsword"
                  alt="greatsword"
                  src={greatsword}
                />
                <img className="icon-katana" alt="katana" src={katana} />
                <img className="icon-staff" alt="staff" src={staff} />
                <img className="icon-rod" alt="rod" src={rod} />
                <img className="icon-bow" alt="bow" src={bow} />
                <img className="icon-axe" alt="axe" src={axe} />
                <img className="icon-hammer" alt="hammer" src={hammer} />
                <img className="icon-spear" alt="spear" src={spear} />
                <img
                  className="icon-instrument"
                  alt="instrument"
                  src={instrument}
                />
                <img className="icon-whip" alt="whip" src={whip} />
                <img
                  className="icon-throwingweapon"
                  alt="throwingweapon"
                  src={throwingweapon}
                />
                <img className="icon-gun" alt="gun" src={gun} />
                <img className="icon-mace" alt="mace" src={mace} />
                <img className="icon-fist" alt="fist" src={fist} />
              </div>
              <div className="eq-icon-armor">
                <img
                  className="icon-lightshield"
                  alt="lightshield"
                  src={lightshield}
                />
                <img
                  className="icon-heavyshield"
                  alt="heavyshield"
                  src={heavyshield}
                />
                <img className="icon-clothes" alt="clothes" src={clothes} />
                <img
                  className="icon-lightarmor"
                  alt="lightarmor"
                  src={lightarmor}
                />
                <img
                  className="icon-heavyarmor"
                  alt="heavyarmor"
                  src={heavyarmor}
                />
                <img className="icon-robe" alt="robe" src={robe} />
                <img className="icon-hat" alt="hat" src={hat} />
                <img className="icon-helm" alt="helm" src={helm} />
              </div>
            </div>
          ) : null}

          {sortFlag ? ( // Consider using buttons instead of divs
            <div className="eq-sort-container">
              <div className="eq-sort-orderby">
                <div onClick={() => { handleSortOrderChange('asc'); }}>ASC</div>
                <div onClick={() => { handleSortOrderChange('desc'); }}>DESC</div>
              </div>
              <div className="eq-sort-stat-container">
                <div className="eq-sort-stat-name" onClick={() => { handleSortTypeChange('name'); }}>Name</div>
                <div className="eq-sort-stat-hp" onClick={() => { handleSortTypeChange('hp'); }}>HP</div>
                <div className="eq-sort-stat-mp" onClick={() => { handleSortTypeChange('mp'); }}>MP</div>
                <div className="eq-sort-stat-atk" onClick={() => { handleSortTypeChange('atk'); }}>ATK</div>
                <div className="eq-sort-stat-DEF" onClick={() => { handleSortTypeChange('def'); }}>DEF</div>
                <div className="eq-sort-stat-MAG" onClick={() => { handleSortTypeChange('mag'); }}>MAG</div>
                <div className="eq-sort-stat-SPR" onClick={() => { handleSortTypeChange('spr'); }}>SPR</div>
              </div>
            </div>
          ) : null}

          <div className="eq-list">
            {eqList !== undefined
              // ? eqList.map((key, index) => {
                ? sortEQList(eqList, sortConfig).map((key, index) => {
                  return (
                    <EquipmentPanel
                      slot={activeSlot}
                      info={key}
                      key={key.eq_id}
                      onClick={handleChange(key)}
                      isSelected={
                        selectedEquipment.eq_id === key.eq_id
                          ? "eq-select-outline"
                          : false
                      }
                    />
                  );
                })
              : null}
          </div>
        </div>
      );
    } else if (
      activeSlot === "materia1" ||
      activeSlot === "materia2" ||
      activeSlot === "materia3" ||
      activeSlot === "materia4"
    ) {
      return (
        <div className="eq-select-content-container">
          <div className="eq-list">
            {eqList !== undefined
              ? eqList.map((key, index) => {
                  return (
                    <MateriaPanel
                      slot={activeSlot}
                      info={key}
                      key={key.mat_id}
                      onClick={handleChange(key)}
                      isSelected={
                        selectedEquipment.mat_id === key.mat_id
                          ? "eq-select-outline"
                          : false
                      }
                    />
                  );
                })
              : null}
          </div>
        </div>
      );
    }
  };

  //--------------Sort-------------------

  const handleSortTypeChange = (str) => {
    setSortConfig((prevState) => ({ ...prevState, type: str }));
  };

  const handleSortOrderChange = (str) => {
    setSortConfig((prevState) => ({ ...prevState, order: str }));
  };

  const sortEQList = (eqArr, sortConfig) => {
    let order = sortConfig.order;
    let type = sortConfig.type;

    console.log('order: ', order);
    console.log('type: ', type);

    switch(type) {
      case 'name':  
        if(order === 'asc'){
          return eqArr.sort((a,b) => a.name.localeCompare(b.name));
        } else {
          return eqArr.sort((a,b) => b.name.localeCompare(a.name));
        }
        // break;
      case 'hp':
        if(order === 'asc'){
          return sortAsc(eqArr, 'hp');
          // return eqArr.sort( (a, b) => {return a.hp-b.hp});
        } else {
          return sortDesc(eqArr, 'hp');
          // return eqArr.sort((a,b) => {return b.hp-a.hp})
        }
        // break;
      case 'mp':
        if(order === 'asc'){
          return sortAsc(eqArr, 'mp');
        } else {
          return sortDesc(eqArr, 'mp');
        }
        // break;
      case 'atk':
        if(order === 'asc'){
          return sortAsc(eqArr, 'atk');
        } else {
          return sortDesc(eqArr, 'atk');
        }
        // break;
      case 'def':
        if(order === 'asc'){
          return sortAsc(eqArr, 'def');
        } else {
          return sortDesc(eqArr, 'def');
        }
        // break;
      case 'mag':
        if(order === 'asc'){
          return sortAsc(eqArr, 'mag');
        } else {
          return sortDesc(eqArr, 'mag');
        }
        // break;
      case 'spr':
        if(order === 'asc'){
          return sortAsc(eqArr, 'spr');
        } else {
          return sortDesc(eqArr, 'spr');
        }
        // break;
      default:
        return eqArr; 
    }
  };

  const sortAsc = (eqArr, stat) => {
    return eqArr.sort((a,b) => { return a[stat]-b[stat] });
  }

  const sortDesc = (eqArr, stat) => {
    return eqArr.sort((a,b) => { return b[stat]-a[stat] });
  }

  //----------------------------------

  const onFilterClick = () => {
    setFilterFlag(!filterFlag);
  };

  const onSortClick = () => {
    setSortFlag(!sortFlag);
  };

  return (
    <div className="eq-select-container">
      <div className="eq-select-header">
        <input
          className="eq-search-box"
          type="text"
          placeholder="Ex: tdw, atk, 1h, fire"
        />

        <button className="button-sort" onClick={onSortClick}>
          Sort
        </button>
        <button className="button-filter" onClick={onFilterClick}>
          Filter
        </button>
        {/* <button className="button-close" onClick={handleClose}>
          x
        </button> */}
        <CloseIcon
          className="eq-select-icon-close"
          fontSize="large"
          onClick={handleClose}
        />
      </div>
      {renderEqOrMateria()}
    </div>
  );
};

export default EquipmentSelection;
