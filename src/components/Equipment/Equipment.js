import React from "react";
import "./Equipment.css";
import EquipmentPanel from "./EquipmentPanel";
import EquipmentSelection from "./EquipmentSelection";

import { useEffect, useState, useRef } from "react";
import axios from "axios";

// const DB_URL = "http://localhost:3000/loadEq";
const DB_URL = "http://localhost:3000/equipment";

const Equipment = ({
  // Consider removing weapon_option and armor_option if equipment_option suffices
  setEq,
  setComparisonEq,
  // unit_weapon_option,
  // unit_armor_option,
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
      // console.log(res);
      setWeaponList(res.data.weapon_list);
      setArmorList(res.data.armor_list);
      setAccessoryList(res.data.accessory_list);
    };
    fetchEquipmentList();
  }, []);

  const [weaponList, setWeaponList] = useState([]);
  // useEffect(() => {
  //   console.log("Weapon List: ", weaponList);
  // }, [weaponList]);
  const [armorList, setArmorList] = useState([]);
  // useEffect(() => {
  //   console.log('Armor List: ', armorList);
  // }, [armorList]);
  const [accessoryList, setAccessoryList] = useState([]);
  // useEffect(() => {
  //   console.log('Accessory List: ', accessoryList);
  // }, [accessoryList]);


  const [displayEqSelection, setDisplayEqSelection] = useState({
    flag: false,
    activeSlot: "",
  });

  function renderSwitch(param) {
    // console.log(55555);
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
            setDisplayEqSelection={setDisplayEqSelection}
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
            setDisplayEqSelection={setDisplayEqSelection}
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
            setDisplayEqSelection={setDisplayEqSelection}
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
            setDisplayEqSelection={setDisplayEqSelection}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      case "acc1":
        return (
          <EquipmentSelection
            eqList={accessoryList}
            setDisplayEqSelection={setDisplayEqSelection}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
      default:
        // accessory 2
        return (
          <EquipmentSelection
            eqList={accessoryList}
            setDisplayEqSelection={setDisplayEqSelection}
            setEq={setEq}
            setComparisonEq={setComparisonEq}
            activeSlot={displayEqSelection.activeSlot}
          />
        );
    }
  }

  console.log("Render: Eq");

  return (
    <div className="equipment-top-container">
      <div className="equipment-container">
        <div className="equipment-slot-lhand">
          <div className="equipment-slot-name">L. Hand</div>
          <EquipmentPanel
            info={lHand}
            onClick={() => 
              setDisplayEqSelection({ flag: true, activeSlot: "lHand" })
            }
          />
        </div>
        <div className="equipment-slot-rhand">
          <div className="equipment-slot-name">R. Hand</div>
          <EquipmentPanel
            info={rHand}
            onClick={() => {
              setDisplayEqSelection({ flag: true, activeSlot: "rHand" });
            }}
          />
        </div>
        <div className="equipment-slot-head">
          <div className="equipment-slot-name">Head</div>
          <EquipmentPanel
            info={head}
            onClick={() => {
              setDisplayEqSelection({ flag: true, activeSlot: "head" });
            }}
          />
        </div>
        <div className="equipment-slot-body">
          <div className="equipment-slot-name">Body</div>
          <EquipmentPanel
            info={body}
            onClick={() => {
              setDisplayEqSelection({ flag: true, activeSlot: "body" });
            }}
          />
        </div>
        <div className="equipment-slot-acc1">
          <div className="equipment-slot-name">Acc 1</div>
          <EquipmentPanel
            info={acc1}
            onClick={() => {
              setDisplayEqSelection({ flag: true, activeSlot: "acc1" });
            }}
          />
        </div>
        <div className="equipment-slot-acc2">
          <div className="equipment-slot-name">Acc 2</div>
          <EquipmentPanel
            info={acc2}
            onClick={() => {
              setDisplayEqSelection({ flag: true, activeSlot: "acc2" });
            }}
          />
        </div>
      </div>
      <div className="equipment-selection-container">
        {/* {displayEqSelection.flag ? renderSwitch(activeSlot) : null} */}
        {displayEqSelection.flag
          ? renderSwitch(displayEqSelection.activeSlot)
          : null}
      </div>
    </div>
  );
};

export default React.memo (Equipment);
// export default Equipment;
