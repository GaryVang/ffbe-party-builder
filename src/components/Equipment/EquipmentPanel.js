import React from "react";
import "./EquipmentPanel.css";
// element icons
// import fire from "../UnitInfo/ElementalIcon/element-fire.png";
// import ice from "../UnitInfo/ElementalIcon/element-ice.png";
// import lightning from "../UnitInfo/ElementalIcon/element-lightning.png";
// import water from "../UnitInfo/ElementalIcon/element-water.png";
// import wind from "../UnitInfo/ElementalIcon/element-wind.png";
// import earth from "../UnitInfo/ElementalIcon/element-earth.png";
// import light from "../UnitInfo/ElementalIcon/element-light.png";
// import dark from "../UnitInfo/ElementalIcon/element-dark.png";

//equipment icons
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
import accessory from "./EquipmentIcon/equipment-accessory.png";

import materia from "../Materia/MateriaIcon/materia-general.png"; // Remove when finish

const EquipmentPanel = ({ slot, info, onClick, isSelected }) => {
  const displayTypeIcon = (type) => {
    switch (type) {
      case 1:
        return dagger;
      case 2:
        return sword;
      case 3:
        return greatsword;
      case 4:
        return katana;
      case 5:
        return staff;
      case 6:
        return rod;
      case 7:
        return bow;
      case 8:
        return axe;
      case 9:
        return hammer;
      case 10:
        return spear;
      case 11:
        return instrument;
      case 12:
        return whip;
      case 13:
        return throwingweapon;
      case 14:
        return gun;
      case 15:
        return mace;
      case 16:
        return fist;
      case 30:
        return lightshield;
      case 31:
        return heavyshield;
      case 40:
        return hat;
      case 41:
        return helm;
      case 50:
        return clothes;
      case 51:
        return lightarmor;
      case 52:
        return heavyarmor;
      case 53:
        return robe;
      case 60:
        return accessory;
      default:
        return accessory;
    }
  };

  const getSlotTitle = (slot) => {
    // Checks for an instance of a number instead of an exact string match
    if (slot.indexOf("r") !== -1) {
      return "R HAND";
    } else if (slot.indexOf("l") !== -1) {
      return "L HAND";
    } else if (slot.indexOf("head") !== -1) {
      return "HEAD";
    } else if (slot.indexOf("body") !== -1) {
      return "BODY";
    } else if (slot.indexOf(1) !== -1) {
      return "ACC 1";
    } else if (slot.indexOf(2) !== -1) {
      return "ACC 2";
    } else {
      return "Error: Title Unknown";
    }
  };

  return info.eq_id === 0 ? (
    <div className="equipment-panel-container" onClick={onClick}>
      <div className="equipment-panel-header">
        <div className="equipment-panel-slot">{getSlotTitle(slot)}</div>
        <div className="equipment-panel-name">
          <span className="equipment-panel-name-empty">Empty</span>
        </div>
        <img
          className="equipment-panel-type"
          src={displayTypeIcon(info.type)}
          alt="type"
        />
      </div>
      <div className="equipment-panel-row-2">
        <img className="equipment-panel-img" src={materia} alt="equipment" />
        <div className="equipment-panel-desc"></div>
      </div>
    </div>
  ) : (
    <div className={isSelected ? "equipment-panel-container " + isSelected : "equipment-panel-container"} onClick={onClick}>
      <div className="equipment-panel-header">
        <div className="equipment-panel-slot">{getSlotTitle(slot)}</div>
        <div className="equipment-panel-name">{info.name}</div>
        <img
          className="equipment-panel-type"
          src={displayTypeIcon(info.type)}
          alt="type"
        />
      </div>
      <div className="equipment-panel-row-2">
        <img className="equipment-panel-img" src={materia} alt="equipment" />
        <div className="equipment-panel-desc">
          <div className="equipment-panel-desc-stat-wrapper">
            {info.atk !== 0 ? (
              <div className="equipment-panel-desc-stat-atk">
                <div>ATK</div>
                <div>{info.atk}</div>
              </div>
            ) : null}
            {info.def !== 0 ? (
              <div className="equipment-panel-desc-stat-def">
                <div>DEF</div>
                <div>{info.def}</div>
              </div>
            ) : null}
            {info.mag !== 0 ? (
              <div className="equipment-panel-desc-stat-mag">
                <div>MAG</div>
                <div>{info.mag}</div>
              </div>
            ) : null}
            {info.spr !== 0 ? (
              <div className="equipment-panel-desc-stat-spr">
                <div>SPR</div>
                <div>{info.spr}</div>
              </div>
            ) : null}
            {info.hp !== 0 ? (
              <div className="equipment-panel-desc-stat-hp">
                <div>HP</div>
                <div>{info.hp}</div>
              </div>
            ) : null}
            {info.mp !== 0 ? (
              <div className="equipment-panel-desc-stat-mp">
                <div>MP</div>
                <div>{info.mp}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPanel;
