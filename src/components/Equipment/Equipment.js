import React from "react";
import './Equipment.css';
import EquipmentPanel from './EquipmentPanel';
import EquipmentSelection from './EquipmentSelection';

import {useEffect, useState, useCallback} from "react";
import axios from 'axios';

const DB_URL = 'http://localhost:3000/loadEq';

const Equipment = () => {


    // function Foo() {
        const memoizedHandleClick = useCallback(() => {
            // console.log('Click happened');
            // setDisplayEqSelection(true);

            // let we = Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
            // .filter(x => x.type === slot);
            // console.log('we', we);
            
            // console.log(5, data.equipmentList);
            // console.log('hello', 
            // setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
            // .filter(x => x.type === 'accessory'))
            // );

            // setNewList(we);
            // console.log(2, newList);
            console.log(3, slot);
            console.log('4 data: ', data.isFetching);
            // setSlot(slot);
          },
          [], // Tells React to memoize regardless of arguments.
        );
        // return <Button onClick={memoizedHandleClick}>Click Me</Button>;
    //   }
    
    function clickTest(event, y) {
        console.log('event: ', event);
        console.log('y: ', y);

        console.log('object: ', Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
        .filter(x => x.type === 'accessory'));

        // let we = Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
        // .filter(x => x.type === 'accessory');

        // console.log(3, we);
        setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
        .filter(x => x.type === 'accessory'));
        // setNewList(we);
        setNewList({'hello' : 3})
        console.log('newList: ', newList);

    }


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

   

    const [slot, setSlot] = useState('');
    const [displayEqSelection, setDisplayEqSelection] = useState(false);

    const [newList, setNewList] = useState({});

    const [lHand, setLHand] = useState({});
    const [rHand, setRHand] = useState({});
    const [head, setHead] = useState({});
    const [body, setBody] = useState({});
    const [acc1, setAcc1] = useState({});
    const [acc2, setAcc2] = useState({});

    
    
    // if(data.equipmentList !== undefined)
    // {
    //     console.log('1:', data.equipmentList[1]);
    // }

    // if(data.equipmentList[0] !== undefined)
    // {
    //     console.log('5: ', data.equipmentList[0].info);
    // }
    
    // console.log('2:', Object.keys(data.equipmentList));
    
console.log(1);

console.log(data.equipmentList);

console.log('1', Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
    .filter(x => x.type === 'accessory'));

    // let we = Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
    //         .filter(x => x.type === 'accessory');
    
    // console.log('we ', we);

    // console.log('newList 1: ', newList);
    // setNewList(we);
    // console.log('newList 2: ', newList);

    function eventListener() {
        // console.log(test);
        setDisplayEqSelection(true);
        
        setSlot('accessory');

        setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
        .filter(x => x.type === 'accessory'));
    }

    const handleChange = type => e => {
        console.log('slot: ', type);
        console.log('e: ', e);

        setDisplayEqSelection(true);
        
        setSlot(type);

        setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
        .filter(x => x.type === type));

        switch(type) {
            case 'accessory':
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'accessory'));
                break;
            case 'head':
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'hat' || 
                                x.type === 'helm'));
                break;
            case 'body':
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'clothes' || 
                                x.type === 'light armor' || 
                                x.type === 'heavy armor' || 
                                x.type === 'robe' ));
                break;
            default: //weapon/shield
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type !== 'accessory' && 
                                x.type !== 'hat' && 
                                x.type !== 'helm' &&
                                x.type !== 'clothes' &&
                                x.type !== 'light armor' &&
                                x.type !== 'heavy armor' &&
                                x.type !== 'robe' ));
                break;
        }
    };



    return (
        <div>
            <div className='equipment-container'>
                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('hand'); }} /> */}

                <EquipmentPanel onClick={ handleChange('hand') } />

                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('hand'); }} >L-Hand</EquipmentPanel> */}
                <EquipmentPanel onClick={ handleChange('hand') } />


                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('head'); }} >Head</EquipmentPanel> */}

                <EquipmentPanel onClick={ handleChange('head') } />
                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('body'); }} >Body</EquipmentPanel> */}
                <EquipmentPanel onClick={ handleChange('body') } />

                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     clickTest(event, 'testing');
                     setSlot('accessory'); }} >Acc 1</EquipmentPanel> */}
                <EquipmentPanel onClick={ handleChange('accessory') } />

                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('accessory'); }}>Acc 2</EquipmentPanel> */}
                {/* <EquipmentPanel onClick={ eventListener }>Acc 2</EquipmentPanel> */}
                <EquipmentPanel onClick={ handleChange('accessory') } />

                {/* <button onClick={() => alert('goodbye')} >Goodbye </button> */}
            </div>
            <div className='equipment-selection-container'>


                {/* <EquipmentSelection eqList={data.equipmentList}/>  */}

                { displayEqSelection ? 
                    <EquipmentSelection 
                        // eqList={data.equipmentList} 
                        eqList={newList} 
                        setDisplayEqSelection={setDisplayEqSelection}
                        slot={slot}
                    /> 
                    : null 
                }

                {/* {console.log('data.eqlist: ', data.equipmentList)} */}
            </div>
        </div>
    );
}

export default Equipment;