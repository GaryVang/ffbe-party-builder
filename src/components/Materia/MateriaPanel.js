import React from "react";
import "./MateriaPanel.css";
import general from "./MateriaIcon/materia-general.png";

const MateriaPanel = ({ slot, info, onClick }) => {
  const getDescription = (skills) => {
    let description = "";
    // skills.forEach(skill => string += skill.effect + " ")
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
    // Checks for an instance of a number instead of an exact string match
    if (slot.indexOf(1) !== -1) {
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

    // switch (slot) {
    //     case "materia1":
    //         return "MAT 1";
    //     case "materia2":
    //         return "MAT 2";
    //     case "materia3":
    //         return "MAT 3";
    //     case "materia4":
    //         return "MAT 4";
    //     default:
    //         return "Title Error";
    // }
  };

  return info == null ? (
    <div className="materia-panel-container" onClick={onClick}>
      <div className="materia-panel-header">
        <div className="materia-panel-slot">{getSlotTitle(slot)}</div>
        <div className="materia-panel-name"><span className="materia-panel-name-empty">Empty</span></div>
      </div>
      <div className="materia-panel-row-2">
        <img className="materia-panel-img" src={general} alt="materia" />
        <div className="materia-panel-desc" />
      </div>
    </div>
  ) : (
    <div className="materia-panel-container" onClick={onClick}>
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
