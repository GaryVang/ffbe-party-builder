import React from "react";
import './Equipment.css';
import EquipmentPanel from './EquipmentPanel';
import EquipmentSelection from './EquipmentSelection';

import {useEffect, useState, useCallback} from "react";
import axios from 'axios';

const DB_URL = 'http://localhost:3000/loadEq';

const Equipment = () => {


    // function Foo() {
        const memoizedHandleClick = useCallback(
          () => {
            // console.log('Click happened');
            setDisplayEqSelection(true);
            // setSlot(slot);
          },
          [], // Tells React to memoize regardless of arguments.
        );
        // return <Button onClick={memoizedHandleClick}>Click Me</Button>;
    //   }
    



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
                console.log(e)
                setData({equipmentList: data.equipmentList, isFetching: false});
            }
        };
        fetchEquipmentList();
    },[]);

    // myClick: function () {
    //     alert("Hello World!");
    // }


    // constructor (props) {
    //     super(props);
    //     this.state = { selectedSection: 0 };

    //     this.selectSection = this.selectSection.bind(this)
    // }
    // selectSection(e) {
    //     console.log(e);
    // }
    const [slot, setSlot] = useState('');
    const [displayEqSelection, setDisplayEqSelection] = useState(false);
    
    // if(data.equipmentList !== undefined)
    // {
    //     console.log('1:', data.equipmentList[1]);
    // }

    // if(data.equipmentList[0] !== undefined)
    // {
    //     console.log('5: ', data.equipmentList[0].info);
    // }
    
    // console.log('2:', Object.keys(data.equipmentList));
    
    // console.log('3', 
    //     Object.keys(data.equipmentList)
    //       .filter(key => data.equipmentList[key].info == 1)
    // );

    Object.keys(data.equipmentList).map(key => {
        console.log(data.equipmentList[key].info.name);
    })
        //   .filter(key => data.equipmentList[key].info == 1)

    return (
        <div>
            <div className='equipment-container'>
                <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('hand'); }} />
                <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('hand'); }} >L-Hand</EquipmentPanel>
                <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('head'); }} >Head</EquipmentPanel>
                <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('body'); }} >Body</EquipmentPanel>
                <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('accessory'); }} >Acc 1</EquipmentPanel>
                <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('accessory'); }}>Acc 2</EquipmentPanel>
                {/* <button onClick={() => alert('goodbye')} >Goodbye </button> */}
            </div>
            <div className='equipment-selection-container'>


                {/* <EquipmentSelection eqList={data.equipmentList}/>  */}

                { displayEqSelection ? 
                    <EquipmentSelection 
                        eqList={data.equipmentList} 
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