import React, { useState, useEffect } from "react";
import "./MateriaPanel.css";
import general from "./MateriaIcon/materia-general.png";

const MateriaPanel = ({ slot, info, onClick, isSelected }) => {

  const getDescription = (skills) => {
    let description = "";
    for (let i = 0; i < skills.length; i++) {
      if (i + 1 === skills.length) {
        description += skills[i].effect + ".";
      } else {
        description += skills[i].effect + ", ";
      }
    }
    return description;
  };

  const getSlotTitle = (slot) => {
    if (slot.indexOf(1) !== -1) {// Checks for an instance of a number instead of an exact string match
      return "MAT 1";
    } else if (slot.indexOf(2) !== -1) {
      return "MAT 2";
    } else if (slot.indexOf(3) !== -1) {
      return "MAT 3";
    } else if (slot.indexOf(4) !== -1) {
      return "MAT 4";
    } else {
      return "Error: Title Unknown";
    }
  };

  return info == null ? (
    <div className="materia-panel-container" onClick={onClick}>
      <div className="materia-panel-header">
        <div className="materia-panel-slot">{getSlotTitle(slot)}</div>
        <div className="materia-panel-name">
          <span className="materia-panel-name-empty">Empty</span>
        </div>
      </div>
      <div className="materia-panel-row-2">
        <img className="materia-panel-img" src={general} alt="materia" />
        <div className="materia-panel-desc" />
      </div>
    </div>
  ) : (
    <div className={isSelected ? "materia-panel-container " + isSelected : "materia-panel-container"} onClick={onClick}>
      <div className="materia-panel-header">
        <div className="materia-panel-slot">{getSlotTitle(slot)}</div>
        <div className="materia-panel-name">{info.name}</div>
      </div>
      <div className="materia-panel-row-2">
        <img className="materia-panel-img" src={general} alt="materia" />
        <div className="materia-panel-desc">{getDescription(info.skills)}</div>
      </div>
    </div>
  );
};

export default MateriaPanel;
