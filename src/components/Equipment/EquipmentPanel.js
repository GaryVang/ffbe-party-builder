import React from "react";
import './EquipmentPanel.css';
import earth from '../UnitInfo/ElementalIcon/element-earth.png';

// import {useEffect, useState} from "react";
// import axios from 'axios';

// const DB_URL = 'http://localhost:3000/testLoadEq';


// fetch('http://localhost:3000/testUnit')
//       // .then(res => {console.log('result', res)})
//       .then(response => response.json())
//       // .then(result => {console.log('result', result)})
//       .then(result => {this.setState({
//         user: {
//           unitName: result.name,
//           hp: result.hp,
//           mp: result.mp,
//           atk: result.atk,
//           mag: result.mag,
//           def: result.def,
//           spr: result.spr, 
//         }
//       })})

// function EqTestReactHooks() {
//     const [data, setData] = useState({equipment: {}, isFetching: false});

//     useEffect(() => {
//         const fetchEquipment = async () => {
//             try {
//                 setData({equipment: data.equipment, isFetching: true});
//                 const res = await axios.get(DB_URL);
//                 setData({equipment: res.data, isFetching: false});
//                 // console.log('Hook: ', res.data.name);
//                 // console.log('equipment: ', data.equipment);
//             } catch (e) {
//                 console.log(e)
//                 setData({equipment: data.equipment, isFetching: false});
//             }
//         };
//         fetchEquipment();
//     },[]);

//     return (
//         <div data={data.equipment} 
//                 isFetching={data.isFetching}> 7 
//                 {/* {console.log('hello', data.equipment.name)} */}
//         </div>
//     )
// }


//removed 'key' from prop due to warning
const EquipmentPanel = ({ info, onClick }) => { // Maybe rename file to something more meaningful
    // EqTestReactHooks();

    // if(info != undefined)
    // console.log('test3: ', info.name);
    var count = 1;
    return (
        // <div className='equipment-panel-container'>
        //     <div className='eq-name'>Omega Weapon</div>
        //     <div className='eq-class'></div>
        //     <div className='eq-stat'></div>
        //     <div className='eq-img'>
        //         <img src='https://gamepedia.cursecdn.com/exvius_gamepedia_en/0/08/Icon-Omega_Weapon_%28FFXIII%29.png?version=bad7d1545f58a722eaa2826ff978e82e' alt='failed' />
        //     </div>
        //     <div className='eq-element'>
        //         <img src={earth} alt='element' />
        //     </div>
        //     <div className='eq-handle'>1H</div>
        //     <div className='eq-enhancement'></div>
        //     {/* <EqTestReactHooks/> */}
        // </div>
        
        <div>
            { 
                info !== undefined ? ( //Check to see if it should be !== instead
                    
                    <div className='equipment-panel-container' onClick={onClick}>
                        <div className='eq-name'>{count} {info.name} </div>
                        <div className='eq-class'></div>
                        <div className='eq-stat'></div>
                        <div className='eq-img'>
                            <img src='https://gamepedia.cursecdn.com/exvius_gamepedia_en/0/08/Icon-Omega_Weapon_%28FFXIII%29.png?version=bad7d1545f58a722eaa2826ff978e82e' alt='failed' />
                        </div>
                        <div className='eq-element'>
                            <img src={earth} alt='element' />
                        </div>
                        <div className='eq-handle'>1H</div>
                        <div className='eq-enhancement'></div>
                    </div>
                ) :  
                (           //Change onClick
                    <div className='equipment-panel-container' onClick={onClick}>
                        <div className='eq-name'>Omega Weapon</div>
                        <div className='eq-class'></div>
                        <div className='eq-stat'></div>
                        <div className='eq-img'>
                            <img src='https://gamepedia.cursecdn.com/exvius_gamepedia_en/0/08/Icon-Omega_Weapon_%28FFXIII%29.png?version=bad7d1545f58a722eaa2826ff978e82e' alt='failed' />
                        </div>
                        <div className='eq-element'>
                            <img src={earth} alt='element' />
                        </div>
                        <div className='eq-handle'>1H</div>
                        <div className='eq-enhancement'></div>
                    </div>
                )
            }
        </div>
    );
}

export default EquipmentPanel;