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

const EquipmentSelection = ({
  eqList,
  setDisplayEqSelection,
  setEq,
  setComparisonEq,
  activeSlot,
}) => {
  const [filterFlag, setFilterFlag] = useState(false);
  const [sortFlag, setSortFlag] = useState(false);

  const [didMount, setDidMount] = useState(false);
  useEffect(() => setDidMount(true), []);

  const [selectedEquipment, setselectedEquipment] = useState({});
  useEffect(() => {
    if (didMount) {
      setComparisonEq(activeSlot, selectedEquipment);
    }
  }, [selectedEquipment]);

  // let selectedEquipment;

  const handleChange = (equipment) => (e) => {
    setselectedEquipment(equipment);
    // setComparisonEq(activeSlot, selectedEquipment);
    //-------------------
    // setselectedEquipment(equipment);
  };

  const handleClose = (e) => {
    // setDisplayEqSelection({ flag: false });
    setDisplayEqSelection("");

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
                <div>ASC</div>
                <div>DESC</div>
              </div>
              <div className="eq-sort-stat-container">
                <div className="eq-sort-stat-hp">HP</div>
                <div className="eq-sort-stat-mp">MP</div>
                <div className="eq-sort-stat-atk">ATK</div>
                <div className="eq-sort-stat-DEF">DEF</div>
                <div className="eq-sort-stat-MAG">MAG</div>
                <div className="eq-sort-stat-SPR">SPR</div>
              </div>
            </div>
          ) : null}

          <div className="eq-list">
            {eqList !== undefined
              ? eqList.map((key, index) => {
                  // console.log('eq: ', key);
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

  const onFilterClick = () => {
    setFilterFlag(!filterFlag);
  };

  const onSortClick = () => {
    // setSortFlag(!sortFlag);
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
        <button className="button-close" onClick={handleClose}>
          x
        </button>
      </div>
      {renderEqOrMateria()}
    </div>
  );
};

export default EquipmentSelection;
