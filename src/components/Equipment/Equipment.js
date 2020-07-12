import React, { useRef, useEffect, useState } from "react";
import "./Equipment.css";
import EquipmentPanel from "./EquipmentPanel";
import EquipmentSelection from "./EquipmentSelection";

import axios from "axios";

// https://damp-reaches-02112.herokuapp.com/
// const DB_URL = "http://localhost:3000/equipment";
const DB_URL = "https://damp-reaches-02112.herokuapp.com/equipment";

const Equipment = ({
  setEq,
  setComparisonEq,
  unit_equipment_option,
  lHand,
  rHand,
  body,
  head,
  acc1,
  acc2,
}) => {
  const [fetchComplete, setFetchComplete] = useState(false);
  useEffect(() => {
    const fetchEquipmentList = async () => {
      const res = await axios.get(DB_URL);
      setWeaponList(res.data.weapon_list);
      setArmorList(res.data.armor_list);
      setAccessoryList(res.data.accessory_list);
    };
    fetchEquipmentList();
  }, []);

  //-----------------------------------------
  const compDidMount = useRef(true);
  useEffect (() => {
    if (compDidMount.current) {
      console.log(compDidMount.current);
      compDidMount.current = false;
      return;
    }
  }, []);

  const [isEqSelectOpen, setIsEqSelectOpen] = useState("");
  useEffect(() => { //Consider cancelling the timeoutID instead of offscreen rendering
    if(isEqSelectOpen && !compDidMount.current){
      setDisplayEqSelection({flag: true, activeSlot: isEqSelectOpen});
    } 
    // else if (!isEqSelectOpen && !compDidMount.current) {
    //   setDisplayEqSelection({flag: false, activeSlot: isEqSelectOpen});
    // }
    // else if(!isEqSelectOpen && !compDidMount.current) {
    //   // setTimeout( () => {setDisplayEqSelection({flag: false, activeSlot: isEqSelectOpen});}, 300);
    // }
  }, [isEqSelectOpen]);

//----------------------------------


  const [weaponList, setWeaponList] = useState([]);
  const [armorList, setArmorList] = useState([]);
  const [accessoryList, setAccessoryList] = useState([]);

  const [displayEqSelection, setDisplayEqSelection] = useState({
    flag: false,
    activeSlot: "",
  });

  function renderSwitch(param) {
    let filteredEqList = [];

    switch (param) {
      case "rHand":
        let rHandOptions = unit_equipment_option.filter(
          (obj) => obj >= 1 && obj <= 16
        );

        let rShieldOptions = unit_equipment_option.filter(
          (obj) => obj === 30 || obj === 31
        );

        filteredEqList = weaponList.filter((obj) =>
          rHandOptions.includes(obj.type)
        );

        filteredEqList = filteredEqList.concat(
          armorList.filter((obj) => rShieldOptions.includes(obj.type))
        );

        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // setDisplayEqSelection={setDisplayEqSelection}
            setDisplayEqSelection={setIsEqSelectOpen}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      case "lHand":
        let lHandOptions = unit_equipment_option.filter(
          (obj) => obj >= 1 && obj <= 16
        );

        let lShieldOptions = unit_equipment_option.filter(
          (obj) => obj === 30 || obj === 31
        );

        filteredEqList = weaponList.filter((obj) =>
          lHandOptions.includes(obj.type)
        );

        filteredEqList = filteredEqList.concat(
          armorList.filter((obj) => lShieldOptions.includes(obj.type))
        );

        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // setDisplayEqSelection={setDisplayEqSelection}
            setDisplayEqSelection={setIsEqSelectOpen}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      case "head":
        let headOptions = unit_equipment_option.filter(
          (obj) => obj === 40 || obj === 41
        );
        filteredEqList = armorList.filter((obj) =>
          headOptions.includes(obj.type)
        );

        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // setDisplayEqSelection={setDisplayEqSelection}
            setDisplayEqSelection={setIsEqSelectOpen}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      case "body":
        let bodyOptions = unit_equipment_option.filter(
          (obj) => obj >= 50 && obj <= 53
        );
        filteredEqList = armorList.filter((obj) =>
          bodyOptions.includes(obj.type)
        );
        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // setDisplayEqSelection={setDisplayEqSelection}
            setDisplayEqSelection={setIsEqSelectOpen}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      case "acc1":
        // let accSort = accessoryList.sort((a,b) => b.atk - a.atk);
        return (
          <EquipmentSelection
            eqList={accessoryList}
            // eqList={accSort}
            // setDisplayEqSelection={setDisplayEqSelection}
            setDisplayEqSelection={setIsEqSelectOpen}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      case "acc2":
        return (
          <EquipmentSelection
            eqList={accessoryList}
            // setDisplayEqSelection={setDisplayEqSelection}
            setDisplayEqSelection={setIsEqSelectOpen}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      default:
    }
  }

  return (
    <div className="equipment-top-container">
      <div className="equipment-container">
        <div className="equipment-slot-lhand">
          <EquipmentPanel
            slot={"lHand"}
            info={lHand}
            onClick={() =>
              // setDisplayEqSelection({ flag: true, activeSlot: "lHand" })
              setIsEqSelectOpen("lHand")
            }
          />
        </div>
        <div className="equipment-slot-rhand">
          <EquipmentPanel
            slot={"rHand"}
            info={rHand}
            onClick={() => {
              // setDisplayEqSelection({ flag: true, activeSlot: "rHand" });
              setIsEqSelectOpen("rHand");
            }}
          />
        </div>
        <div className="equipment-slot-head">
          <EquipmentPanel
            slot={"head"}
            info={head}
            onClick={() => {
              // setDisplayEqSelection({ flag: true, activeSlot: "head" });
              setIsEqSelectOpen("head");
            }}
          />
        </div>
        <div className="equipment-slot-body">
          <EquipmentPanel
            slot={"body"}
            info={body}
            onClick={() => {
              // setDisplayEqSelection({ flag: true, activeSlot: "body" });
              setIsEqSelectOpen("body");
            }}
          />
        </div>
        <div className="equipment-slot-acc1">
          <EquipmentPanel
            slot={"acc1"}
            info={acc1}
            onClick={() => {
              // setDisplayEqSelection({ flag: true, activeSlot: "acc1" });
              setIsEqSelectOpen("acc1");
            }}
          />
        </div>
        <div className="equipment-slot-acc2">
          <EquipmentPanel
            slot={"acc2"}
            info={acc2}
            onClick={() => {
              // setDisplayEqSelection({ flag: true, activeSlot: "acc2" });
              setIsEqSelectOpen("acc2");
            }}
          />
        </div>
      </div>
      {/* <div className="equipment-selection-container"> */}
      <div className={isEqSelectOpen ? "equipment-selection-container slide-in" : "equipment-selection-container slide-out"}>
        {displayEqSelection.flag
          ? renderSwitch(displayEqSelection.activeSlot)
          : null}
          {/* {renderSwitch(displayEqSelection.activeSlot)} */}
      </div>
    </div>
  );
};

export default React.memo(Equipment);
// export default Equipment;
