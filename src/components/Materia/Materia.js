import React from "react";
import { useEffect, useState } from "react";
import MateriaPanel from './MateriaPanel';
import "./Materia.css";





const Materia = ({  }) => {
    console.log("Render: Materia");

    return (
        <div className="materia-container">
            <div className="materia-container-header"><span>Materia</span></div>
            <MateriaPanel />
            <MateriaPanel />
            <MateriaPanel />
            <MateriaPanel />
        </div>
    );


};

export default Materia;
