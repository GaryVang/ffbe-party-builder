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

    const [displayEqSelection, setDisplayEqSelection] = useState(false);

    return (
        <div>
            <div className='equipment-container'>
                <EquipmentPanel onClick={memoizedHandleClick} >R-Hand</EquipmentPanel>
                <EquipmentPanel>L-Hand</EquipmentPanel>
                <EquipmentPanel>Head</EquipmentPanel>
                <EquipmentPanel>Body</EquipmentPanel>
                <EquipmentPanel>Acc 1</EquipmentPanel>
                <EquipmentPanel>Acc 2</EquipmentPanel>
                {/* <button onClick={() => alert('goodbye')} >Goodbye </button> */}
            </div>
            <div className='equipment-selection-container'>


                {/* <EquipmentSelection eqList={data.equipmentList}/>  */}

                { displayEqSelection ? 
                    <EquipmentSelection 
                        eqList={data.equipmentList} 
                        setDisplayEqSelection={setDisplayEqSelection}/> 
                    : null 
                }

                {/* {console.log('data.eqlist: ', data.equipmentList)} */}
            </div>
        </div>
    );
}

export default Equipment;