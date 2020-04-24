import React from "react";
import './MateriaPanel.css';
import general from "./MateriaIcon/materia-general.png";

const MateriaPanel = ({ info, onClick }) => {

    const getDescription = (skills) => {
        let description = "";
        // skills.forEach(skill => string += skill.effect + " ")
        for(let i=0; i< skills.length; i++){
            if(i+1 === skills.length){
                description += skills[i].effect + ".";
            } else {
                description += skills[i].effect + ", ";
            }
        }
        return description;
    };

    return (info == null) ? 
         (
            <div className="materia-panel-container" onClick={onClick}>
                <div className="materia-panel-name">Materia</div>
                {/* <div className="materia-panel-bot-wrapper"> */}
                    <img className="materia-panel-img" src={general} alt="materia" />
                    <div className="materia-panel-desc" />
                {/* </div> */}
            </div>
        )
        :  (
            <div className="materia-panel-container" onClick={onClick}>
                <div className="materia-panel-name">{info.name}</div>
                {/* <div className="materia-panel-bot-wrapper"> */}
                    <img className="materia-panel-img" src={general} alt="materia" />
        <div className="materia-panel-desc">{getDescription(info.skills)}</div>
                {/* </div> */}
            </div>
        )
    
    // return (
        
    //     <div className="materia-panel-container" onClick={onClick}>
    //         <div className="materia-panel-name">Materia</div>
    //         {/* <div className="materia-panel-bot-wrapper"> */}
    //             <img className="materia-panel-img" src={general} alt="materia" />
    //             <div className="materia-panel-desc" />
    //         {/* </div> */}
    //     </div>
    // );
};

export default MateriaPanel;