import React from "react";
import './Equipment.css';
import EquipmentPanel from './EquipmentPanel';
import EquipmentSelection from './EquipmentSelection';

import {useEffect, useState, useCallback} from "react";
import axios from 'axios';

const DB_URL = 'http://localhost:3000/loadEq';

const Equipment = () => {


    // function Foo() {
        // const memoizedHandleClick = useCallback(() => {
        //     // console.log('Click happened');
        //     // setDisplayEqSelection(true);

        //     // let we = Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
        //     // .filter(x => x.type === slot);
        //     // console.log('we', we);
            
        //     // console.log(5, data.equipmentList);
        //     // console.log('hello', 
        //     // setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
        //     // .filter(x => x.type === 'accessory'))
        //     // );

        //     // setNewList(we);
        //     // console.log(2, newList);
        //     console.log(3, slot);
        //     console.log('4 data: ', data.isFetching);
        //     // setSlot(slot);
        //   },
        //   [], // Tells React to memoize regardless of arguments.
        // );
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

   

    const [slot1, setSlot] = useState({});
    const [displayEqSelection, setDisplayEqSelection] = useState(false);

    const [newList, setNewList] = useState({});

    const [lHand, setLHand] = useState({});
    const [rHand, setRHand] = useState({});
    const [head, setHead] = useState({});
    const [body, setBody] = useState({});
    const [acc1, setAcc1] = useState({});
    const [acc2, setAcc2] = useState({});

    const[slotTest, setSlotTest] = useState('');

    const[activeSlot, setActiveSlot] = useState('');

    // console.log('setSlot: ', typeof setSlot);

    // let setterRef = setSlot;

    // console.log('setterRef', setterRef);
    // console.log('setSlot', setSlot);
    // if(data.equipmentList !== undefined)
    // {
    //     console.log('1:', data.equipmentList[1]);
    // }

    // if(data.equipmentList[0] !== undefined)
    // {
    //     console.log('5: ', data.equipmentList[0].info);
    // }
    
    // console.log('2:', Object.keys(data.equipmentList));
    
// console.log(1);

// console.log(data.equipmentList);

// console.log('1', Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
//     .filter(x => x.type === 'accessory'));

console.log('acc1: ', acc1);

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

    // let refTest;

    const handleChange = slot => e => {
        console.log('slot: ', slot);
        // console.log('e: ', e);

        // let test = {};
        // test = setAcc1;

        // setSlot(test);
        // console.log('slot1: ', slot1);
        // console.log('acc1 state: ', acc1);
        // console.log('test: ', test);

        // refTest = setAcc1;
        // console.log('refTest: ', refTest);

        // setTimeout(function() {console.log('timeout'); }, 7000);
        setDisplayEqSelection(true);
        
        // setSlot(type);
        // setSlot(setLHand);

        

        switch(slot) {
            case 'accessory 1': //fall-through
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'accessory'));
            //    setSlot(setAcc1);
                setSlotTest(slot);
                console.log('slotTest: ', slotTest);
         
            //    console.log('slot1: ', slot1);
                // setterRef = setAcc1;
                // console.log('4444', setAcc1);
                // console.log('ref555: ', slot1);
                
                // return <button> Thj9ise;rjwe;ljr</button>;
                    // <div>
                    //  displayEqSelection ? 
                    // <EquipmentSelection 
                    //     // eqList={data.equipmentList} 
                    //     eqList={newList} 
                    //     setDisplayEqSelection={setDisplayEqSelection}
                    //     // slot={slot}
                    //     // slot={setterRef}
                    //     slot={setAcc1}
                        
                    // /> 
                    // : null ;
                     
                    // </div>
                    
                break;
            case 'accessory 2':
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'accessory'));
                setSlot(setAcc2);
                // setSlot(2);
                // console.log('slot1: ', slot1);

                // setterRef = setAcc2;
                break;
            case 'head':
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'hat' || 
                                x.type === 'helm'));
                
                setSlot(setHead); 
                // setterRef = setHead;
                break;
            case 'body':
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'clothes' || 
                                x.type === 'light armor' || 
                                x.type === 'heavy armor' || 
                                x.type === 'robe' ));
                setSlot(setBody);
                // setterRef = setBody;
                break;
            case 'rhand':
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type !== 'accessory' && 
                                x.type !== 'hat' && 
                                x.type !== 'helm' &&
                                x.type !== 'clothes' &&
                                x.type !== 'light armor' &&
                                x.type !== 'heavy armor' &&
                                x.type !== 'robe' ));
                setSlot(setRHand);
                break;
            case 'lhand': //weapon/shield
                setNewList(Object.keys(data.equipmentList).map( key => data.equipmentList[key].info)
                    .filter(x => x.type !== 'accessory' && 
                                x.type !== 'hat' && 
                                x.type !== 'helm' &&
                                x.type !== 'clothes' &&
                                x.type !== 'light armor' &&
                                x.type !== 'heavy armor' &&
                                x.type !== 'robe' ));
                setSlot(setLHand);
                break;
            default:
                console.log('SHIT HIT THE FAN');
        }
    };


    const testFunction = slot => e => {
        console.log('testFunction');
        return <div>TestFunction</div>;
    };

    const handleTest = useCallback(() => {
        console.log('nobody');
    return <button>Hello</button>
    });
    // console.log('10', setLHand);

    function renderSwitch(param) {
        console.log('renderSwitch');
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
                            slot={setRHand}
                        />;
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
                            slot={setLHand}
                        />;
            case 'head': 
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'hat' || 
                                 x.type === 'helm');

                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setHead}
                        />;
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
                            slot={setBody}
                        />; 
            case 'accessory 1': 
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'accessory');

                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setAcc1}
                        />;
            default: // accessory 2
                filteredEqList = Object.keys(data.equipmentList)
                    .map( key => data.equipmentList[key].info)
                    .filter(x => x.type === 'accessory');

                return <EquipmentSelection 
                            eqList={filteredEqList} 
                            setDisplayEqSelection={setActiveSlot} 
                            slot={setAcc2}
                        />;
        }
    }

    return (
        <div>
            <div className='equipment-container'>
                <EquipmentPanel info={rHand} onClick={ () => setActiveSlot('rHand') }/>

                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('hand'); }} >L-Hand</EquipmentPanel> */}
                <EquipmentPanel info={lHand} 
                // onClick={ handleChange('lhand') } 
                    onClick={ () => setActiveSlot('lHand')}
                
                />


                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('head'); }} >Head</EquipmentPanel> */}

                <EquipmentPanel info={head} 
                    // onClick={ handleChange('head') } 
                    onClick={ () => setActiveSlot('head')}
                />
                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('body'); }} >Body</EquipmentPanel> */}
                <EquipmentPanel info={body} 
                    // onClick={ handleChange('body') } 
                    onClick={ () => setActiveSlot('body')}
                />

                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     clickTest(event, 'testing');
                     setSlot('accessory'); }} >Acc 1</EquipmentPanel> */}
                <EquipmentPanel info={acc1} 
                    // onClick={ handleChange('acc1') } 
                    onClick={ () => setActiveSlot('accessory 1')}
                />

                {/* <EquipmentPanel onClick={ (event) => {
                     memoizedHandleClick(event); 
                     setSlot('accessory'); }}>Acc 2</EquipmentPanel> */}
                {/* <EquipmentPanel onClick={ eventListener }>Acc 2</EquipmentPanel> */}
                <EquipmentPanel info={acc2} 
                    // onClick={ handleChange('acc2') } 
                    onClick={ () => setActiveSlot('accessory 2')}
                />

                {/* <button onClick={() => alert('goodbye')} >Goodbye </button> */}
            </div>
            <div className='equipment-selection-container'>


                {/* <EquipmentSelection eqList={data.equipmentList}/>  */}

                {/* { displayEqSelection ? 
                    <EquipmentSelection 
                        // eqList={data.equipmentList} 
                        eqList={newList} 
                        setDisplayEqSelection={setDisplayEqSelection}
                        // slot={slot}
                        // slot={setterRef}
                        // slot={setAcc1}                   
                    /> 
                    : null 
                } */}
                { activeSlot ? (
                    renderSwitch(activeSlot)
                  ) : (null)
            
                }

                {/* {console.log('data.eqlist: ', data.equipmentList)} */}
            </div>
        </div>
    );
}

export default Equipment;