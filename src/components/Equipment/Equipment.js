import React from "react";
import "./Equipment.css";
import EquipmentPanel from "./EquipmentPanel";
import EquipmentSelection from "./EquipmentSelection";

import { useEffect, useState, useRef } from "react";
import axios from "axios";

// const DB_URL = "http://localhost:3000/loadEq";
const DB_URL = "http://localhost:3000/equipment";

const Equipment = ({ // Consider removing weapon_option and armor_option if equipment_option suffices
  setEq,
  unit_weapon_option,
  unit_armor_option,
  unit_equipment_option,
}) => {
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
    console.log("Weapon List: ", weaponList);
  }, [weaponList]);
  const [armorList, setArmorList] = useState([]);
  useEffect(() => {
    console.log('Armor List: ', armorList);
  }, [armorList]);
  const [accessoryList, setAccessoryList] = useState([]);
  useEffect(() => {
    console.log('Accessory List: ', accessoryList);
  }, [accessoryList]);


  const lHandDidMount  = useRef(true);
  const rHandDidMount  = useRef(true);
  const headDidMount  = useRef(true);
  const bodyDidMount  = useRef(true);
  const acc1DidMount  = useRef(true);
  const acc2DidMount  = useRef(true);
  // useEffect (() => {
  //   if (isFirstRun.current) {
  //     isFirstRun.current = false;
  //     return;
  //   }

  //   console.log("Effect was run");
  // });

  //State
  const [lHand, setLHand] = useState({});
  useEffect(() => {
    //test: see if parent state is updated
    // console.log('lHand called');
    if(lHandDidMount.current){
      lHandDidMount.current = false;
      return;
    }
    setEq("lHand", lHand);
  }, [lHand]);

  const [rHand, setRHand] = useState({});
  useEffect(() => {
    if(rHandDidMount.current){
      rHandDidMount.current = false;
      return;
    }
    setEq("rHand", rHand);
  }, [rHand]);

  const [head, setHead] = useState({});
  useEffect(() => {
    if(headDidMount.current){
      headDidMount.current = false;
      return;
    }
    setEq("head", head);
  }, [head]);

  const [body, setBody] = useState({});
  useEffect(() => {
    if(bodyDidMount.current){
      bodyDidMount.current = false;
      return;
    }
    setEq("body", body);
  }, [body]);

  const [acc1, setAcc1] = useState({});
  useEffect(() => {
    if(acc1DidMount.current){
      acc1DidMount.current = false;
      return;
    }
    setEq("acc1", acc1);
  }, [acc1]);

  const [acc2, setAcc2] = useState({});
  useEffect(() => {
    if(acc2DidMount.current){
      acc2DidMount.current = false;
      return;
    }
    setEq("acc2", acc2);
  }, [acc2]);

  //Currently selected equipment slot
  const [activeSlot, setActiveSlot] = useState("");
  // useEffect(() => {
  //   console.log(useState);
  // }, []);

  const [displayEqSelection, setDisplayEqSelection] = useState(false);

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
            // eqList={filteredEqList}
            eqList={filteredEqList}
            setDisplayEqSelection={setActiveSlot}
            slot={setRHand}
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

        // filteredEqList = armorList.filter(obj =>
        //   obj.type === 30 ||
        //   obj.type === 31 );
        // filteredEqList = weaponList.concat(filteredEqList);

        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // eqList={weaponList}
            setDisplayEqSelection={setActiveSlot}
            slot={setLHand}
          />
        );
      case "head":
        let headOptions = unit_armor_option.filter(
          (obj) => obj === 40 || obj === 41
        );
        filteredEqList = armorList.filter((obj) =>
          headOptions.includes(obj.type)
        );

        return (
          <EquipmentSelection
            eqList={filteredEqList}
            // eqList={armorList}
            setDisplayEqSelection={setActiveSlot}
            slot={setHead}
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
            // eqList={armorList}
            setDisplayEqSelection={setActiveSlot}
            slot={setBody}
          />
        );
      case "accessory 1":
        // let acc1Options = unit_equipment_option.filter(obj =>
        //   obj === 60);
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
          <EquipmentPanel
            info={acc1}
            onClick={() => setActiveSlot("accessory 1")}
          />
        </div>
        <div className="equipment-slot-acc2">
          <div className="equipment-slot-name">Acc 2</div>
          <EquipmentPanel
            info={acc2}
            onClick={() => setActiveSlot("accessory 2")}
          />
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
