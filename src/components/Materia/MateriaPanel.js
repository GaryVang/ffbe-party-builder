import React from "react";
import './MateriaPanel.css';
import general from "./MateriaIcon/materia-general.png";

const MateriaPanel = ({}) => {


    return (
        <div className="materia-panel-container">
            <div className="materia-panel-name">Materia</div>
            {/* <div className="materia-panel-bot-wrapper"> */}
                <img className="materia-panel-img" src={general} alt="materia" />
                <div className="materia-panel-desc" />
            {/* </div> */}
        </div>
    );
};

export default MateriaPanel;