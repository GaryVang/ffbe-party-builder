import React from "react";
import './Equipment.css';
import EquipmentPanel from './EquipmentPanel';
import EquipmentSelection from './EquipmentSelection';

import { useEffect, useState } from "react";
import axios from 'axios';

const DB_URL = 'http://localhost:3000/loadEq';

const Equipment = () => {
    
    const [data, setData] = useState({equipmentList: {}, isFetching: false});
    useEffect(() => {
        const fetchEquipmentList = async () => {
            try {
                setData({equipmentList: data.equipmentList, isFetching: true});
                const res = await axios.get(DB_URL);
                setData({equipmentList: res.data, isFetching: false});
                console.log('Hook: ', res.data);
                // console.log('equipment: ', data.equipment);
            } catch (e) {
                console.log(e);
                setData({equipmentList: data.equipmentList, isFetching: false});
            }
        };
        fetchEquipmentList();
    },[]);

   //State
    const [lHand, setLHand] = useState({});
    const [rHand, setRHand] = useState({});
    const [head, setHead] = useState({});
    const [body, setBody] = useState({});
    const [acc1, setAcc1] = useState({});
    const [acc2, setAcc2] = useState({});

    //Currently selected equipment slot
    const[activeSlot, setActiveSlot] = useState('');

    function renderSwitch(param) {
        let filteredEqList;

        switch(param) {
            case 'rHand': 
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type !== 'accessory' && 
                        x.type !== 'hat' && 
                        x.type !== 'helm' &&
                        x.type !== 'clothes' &&
                        x.type !== 'light armor' &&
                        x.type !== 'heavy armor' &&
                        x.type !== 'robe' );
                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setRHand} />;
            case 'lHand': 
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type !== 'accessory' && 
                        x.type !== 'hat' && 
                        x.type !== 'helm' &&
                        x.type !== 'clothes' &&
                        x.type !== 'light armor' &&
                        x.type !== 'heavy armor' &&
                        x.type !== 'robe' );
                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setLHand} />;
            case 'head': 
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'hat' || 
                                 x.type === 'helm');
                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setHead} />;
            case 'body':
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'clothes' || 
                                 x.type === 'light armor' || 
                                 x.type === 'heavy armor' || 
                                 x.type === 'robe' );
                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setBody} />; 
            case 'accessory 1': 
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'accessory');
                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setAcc1} />;
            default: // accessory 2
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'accessory');
                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setAcc2} />;
        }
    }

    console.log('Render: Eq');

    return (
        <div>
            <div className='equipment-container'>
                <EquipmentPanel info={rHand} onClick={ () => setActiveSlot('rHand') } />
                <EquipmentPanel info={lHand} onClick={ () => setActiveSlot('lHand') } />
                <EquipmentPanel info={head} onClick={ () => setActiveSlot('head') } />
                <EquipmentPanel info={body} onClick={ () => setActiveSlot('body') } />
                <EquipmentPanel info={acc1} onClick={ () => setActiveSlot('accessory 1') } />
                <EquipmentPanel info={acc2} onClick={ () => setActiveSlot('accessory 2') } />
            </div>
            <div className='equipment-selection-container'>
                { activeSlot ? ( renderSwitch(activeSlot) ) : (null) }
            </div>
        </div>
    );
}

export default Equipment;