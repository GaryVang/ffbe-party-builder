import React from "react";
import { useEffect, useState } from "react";
import MateriaPanel from "./MateriaPanel";
import EquipmentSelection from "../Equipment/EquipmentSelection";
import "./Materia.css";

import axios from "axios";

const MATERIA_URL = "http://localhost:3000/materia";

const Materia = ({ setEq, setComparisonEq, mat1, mat2, mat3, mat4 }) => {
  const [fetchComplete, setFetchComplete] = useState(false);
  useEffect(() => {
    const fetchEquipmentList = async () => {
      const res = await axios.get(MATERIA_URL);
      setmateriaList(res.data);
    };
    fetchEquipmentList();
  }, []);

  const [materiaList, setmateriaList] = useState([]);

  const [displayEqSelection, setDisplayEqSelection] = useState({
    flag: false,
    activeSlot: "",
  });

  const renderMateriaSelection = () => {
    return (
      <EquipmentSelection
        eqList={materiaList}
        setDisplayEqSelection={setDisplayEqSelection}
        setEq={setEq}
        setComparisonEq={setComparisonEq}
        activeSlot={displayEqSelection.activeSlot}
      />
    );
  };

  return (
    <div className="materia-top-container">
      <div className="materia-container">
        <MateriaPanel
          className="materia-1"
          slot="materia1"
          info={mat1}
          onClick={() => {
            setDisplayEqSelection({ flag: true, activeSlot: "materia1" });
          }}
        />
        <MateriaPanel
          className="materia-2"
          slot="materia2"
          info={mat2}
          onClick={() => {
            setDisplayEqSelection({ flag: true, activeSlot: "materia2" });
          }}
        />
        <MateriaPanel
          className="materia-3"
          slot="materia3"
          info={mat3}
          onClick={() => {
            setDisplayEqSelection({ flag: true, activeSlot: "materia3" });
          }}
        />
        <MateriaPanel
          className="materia-4"
          slot="materia4"
          info={mat4}
          onClick={() => {
            setDisplayEqSelection({ flag: true, activeSlot: "materia4" });
          }}
        />
      </div>
      <div className="materia-selection-container">
        {displayEqSelection.flag ? renderMateriaSelection() : null}
      </div>
    </div>
  );
};

export default React.memo(Materia);
