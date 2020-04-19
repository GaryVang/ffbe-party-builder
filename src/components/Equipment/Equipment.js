import React from "react";
import "./Equipment.css";
import EquipmentPanel from "./EquipmentPanel";
import EquipmentSelection from "./EquipmentSelection";

import { useEffect, useState } from "react";
import axios from "axios";

// const DB_URL = "http://localhost:3000/loadEq";
const DB_URL = "http://localhost:3000/equipment";

const Equipment = ({ setEq }) => {
  // const [data, setData] = useState({ equipmentList: {}, isFetching: false });
  // useEffect(() => {
  //   const fetchEquipmentList = async () => {
  //     try {
  //       setData({ equipmentList: data.equipmentList, isFetching: true });
  //       const res = await axios.get(DB_URL);
  //       setData({ equipmentList: res.data, isFetching: false });
  //       // console.log('Hook: ', res.data);
  //       // console.log('equipment: ', data.equipment);
  //     } catch (e) {
  //       console.log(e);
  //       setData({ equipmentList: data.equipmentList, isFetching: false });
  //     }
  //   };
  //   fetchEquipmentList();
  // }, []);

  const [fetchComplete, setFetchComplete] = useState(false);
  useEffect(() => {
    const fetchEquipmentList = async () => {
      const res = await axios.get(DB_URL);
      // console.log(res);
      setWeaponList(res.data.weapon_list);
      setArmorList(res.data.armor_list);
      setAccessoryList(res.data.accessory_list);


      setFetchComplete(true);
    };
    fetchEquipmentList();
  }, []);

  const [weaponList, setWeaponList] = useState([]);
  useEffect(() => {
    console.log(weaponList);
  }, [weaponList]);
  const [armorList, setArmorList] = useState([]);
  const [accessoryList, setAccessoryList] = useState([]);


  //State
  const [lHand, setLHand] = useState({});
  useEffect(() => {
    //test: see if parent state is updated
    setEq("lHand", lHand);
  }, [lHand]);

  const [rHand, setRHand] = useState({});
  useEffect(() => {
    setEq("rHand", rHand);
  }, [rHand]);

  const [head, setHead] = useState({});
  useEffect(() => {
    setEq("head", head);
  }, [head]);

  const [body, setBody] = useState({});
  useEffect(() => {
    setEq("body", body);
  }, [body]);

  const [acc1, setAcc1] = useState({});
  useEffect(() => {
    setEq("acc1", acc1);
  }, [acc1]);

  const [acc2, setAcc2] = useState({});
  useEffect(() => {
    setEq("acc2", acc2);
  }, [acc2]);

  //Currently selected equipment slot
  const [activeSlot, setActiveSlot] = useState("");

  function renderSwitch(param) {
    let filteredEqList;

    switch (param) {
      case "rHand":
        filteredEqList = armorList.filter(obj => 
          obj.type === 30 ||
          obj.type === 31 );
        // const comboList = weaponList.concat(filteredEqList);
        filteredEqList = weaponList.concat(filteredEqList);
        // filteredEqList = Object.keys(data.equipmentList)
        //   .map(key => data.equipmentList[key].info)
        //   .filter(
        //     x =>
        //       x.type !== "accessory" &&
        //       x.type !== "hat" &&
        //       x.type !== "helm" &&
        //       x.type !== "clothes" &&
        //       x.type !== "light armor" &&
        //       x.type !== "heavy armor" &&
        //       x.type !== "robe"
        //   );
        return (
          <EquipmentSelection
            // eqList={filteredEqList}
            eqList={filteredEqList}
            setDisplayEqSelection={setActiveSlot}
            slot={setRHand}
          />
        );
      case "lHand":
        filteredEqList = armorList.filter(obj => 
          obj.type === 30 ||
          obj.type === 31 );
        filteredEqList = weaponList.concat(filteredEqList);
        // filteredEqList = Object.keys(data.equipmentList)
        //   .map(key => data.equipmentList[key].info)
        //   .filter(
        //     x =>
        //       x.type !== "accessory" &&
        //       x.type !== "hat" &&
        //       x.type !== "helm" &&
        //       x.type !== "clothes" &&
        //       x.type !== "light armor" &&
        //       x.type !== "heavy armor" &&
        //       x.type !== "robe"
        //   );
        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // eqList={weaponList}
            setDisplayEqSelection={setActiveSlot}
            slot={setLHand}
          />
        );
      case "head":
        // filteredEqList = Object.keys(data.equipmentList)
        //   .map(key => data.equipmentList[key].info)
        //   .filter(x => x.type === "hat" || x.type === "helm");
        filteredEqList = armorList.filter(obj => 
          obj.type === 40 ||
          obj.type === 41 );
        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // eqList={armorList}
            setDisplayEqSelection={setActiveSlot}
            slot={setHead}
          />
        );
      case "body":
        // filteredEqList = Object.keys(data.equipmentList)
        //   .map(key => data.equipmentList[key].info)
        //   .filter(
        //     x =>
        //       x.type === "clothes" ||
        //       x.type === "light armor" ||
        //       x.type === "heavy armor" ||
        //       x.type === "robe"
        //   );
          filteredEqList = armorList.filter(obj => 
            obj.type === 50 ||
            obj.type === 51 ||
            obj.type === 52 ||
            obj.type === 53);
        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // eqList={armorList}
            setDisplayEqSelection={setActiveSlot}
            slot={setBody}
          />
        );
      case "accessory 1":
        // filteredEqList = Object.keys(data.equipmentList)
        //   .map(key => data.equipmentList[key].info)
        //   .filter(x => x.type === "accessory");
        return (
          <EquipmentSelection
            // eqList={filteredEqList}
            eqList={accessoryList}
            setDisplayEqSelection={setActiveSlot}
            slot={setAcc1}
          />
        );
      default:
        // accessory 2
        // filteredEqList = Object.keys(data.equipmentList)
        //   .map(key => data.equipmentList[key].info)
        //   .filter(x => x.type === "accessory");
        return (
          <EquipmentSelection
            // eqList={filteredEqList}
            eqList={accessoryList}
            setDisplayEqSelection={setActiveSlot}
            slot={setAcc2}
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
          <EquipmentPanel info={lHand} onClick={() => setActiveSlot("lHand")} />
        </div>
        <div className="equipment-slot-rhand">
          <div className="equipment-slot-name">R. Hand</div>
          <EquipmentPanel info={rHand} onClick={() => setActiveSlot("rHand")} />
        </div>
        <div className="equipment-slot-head">
          <div className="equipment-slot-name">Head</div>
          <EquipmentPanel info={head} onClick={() => setActiveSlot("head")} />
        </div>
        <div className="equipment-slot-body">
          <div className="equipment-slot-name">Body</div>
          <EquipmentPanel info={body} onClick={() => setActiveSlot("body")} />
        </div>
        <div className="equipment-slot-acc1">
          <div className="equipment-slot-name">Acc 1</div>
          <EquipmentPanel info={acc1} onClick={() => setActiveSlot("accessory 1")} />
        </div>
        <div className="equipment-slot-acc2">
          <div className="equipment-slot-name">Acc 2</div>
          <EquipmentPanel info={acc2} onClick={() => setActiveSlot("accessory 2")} />
        </div>


        {/* <EquipmentPanel info={rHand} onClick={() => setActiveSlot("rHand")} />
        <EquipmentPanel info={lHand} onClick={() => setActiveSlot("lHand")} />
        <EquipmentPanel info={head} onClick={() => setActiveSlot("head")} />
        <EquipmentPanel info={body} onClick={() => setActiveSlot("body")} />
        <EquipmentPanel
          info={acc1}
          onClick={() => setActiveSlot("accessory 1")}
        />
        <EquipmentPanel
          info={acc2}
          onClick={() => setActiveSlot("accessory 2")}
        /> */}
      </div>
      <div className="equipment-selection-container">
        {activeSlot ? renderSwitch(activeSlot) : null}
      </div>
    </div>
  );
};

export default Equipment;
