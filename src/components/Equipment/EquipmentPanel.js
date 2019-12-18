import React from "react";
import './EquipmentPanel.css';
// element icons
import fire from '../UnitInfo/ElementalIcon/element-fire.png';
import ice from '../UnitInfo/ElementalIcon/element-ice.png';
import lightning from '../UnitInfo/ElementalIcon/element-lightning.png';
import water from '../UnitInfo/ElementalIcon/element-water.png';
import wind from '../UnitInfo/ElementalIcon/element-wind.png';
import earth from '../UnitInfo/ElementalIcon/element-earth.png';
import light from '../UnitInfo/ElementalIcon/element-light.png';
import dark from '../UnitInfo/ElementalIcon/element-dark.png';

//equipment icons
import dagger from './EquipmentIcon/Weapon/equipment-dagger.png';
import sword from './EquipmentIcon/Weapon/equipment-sword.png';
import greatsword from './EquipmentIcon/Weapon/equipment-greatsword.png';
import katana from './EquipmentIcon/Weapon/equipment-katana.png';
import staff from './EquipmentIcon/Weapon/equipment-staff.png';
import rod from './EquipmentIcon/Weapon/equipment-rod.png';
import bow from './EquipmentIcon/Weapon/equipment-bow.png';
import axe from './EquipmentIcon/Weapon/equipment-axe.png';
import hammer from './EquipmentIcon/Weapon/equipment-hammer.png';
import spear from './EquipmentIcon/Weapon/equipment-spear.png';
import instrument from './EquipmentIcon/Weapon/equipment-instrument.png';
import whip from './EquipmentIcon/Weapon/equipment-whip.png';
import throwingweapon from './EquipmentIcon/Weapon/equipment-throwingweapon.png';
import gun from './EquipmentIcon/Weapon/equipment-gun.png';
import mace from './EquipmentIcon/Weapon/equipment-mace.png';
import fist from './EquipmentIcon/Weapon/equipment-fist.png';
import lightshield from './EquipmentIcon/Armor/equipment-lightshield.png';
import heavyshield from './EquipmentIcon/Armor/equipment-heavyshield.png';
import clothes from './EquipmentIcon/Armor/equipment-clothes.png';
import lightarmor from './EquipmentIcon/Armor/equipment-lightarmor.png';
import heavyarmor from './EquipmentIcon/Armor/equipment-heavyarmor.png';
import robe from './EquipmentIcon/Armor/equipment-robe.png';
import hat from './EquipmentIcon/Armor/equipment-hat.png';
import helm from './EquipmentIcon/Armor/equipment-helm.png';
import accessory from './EquipmentIcon/equipment-accessory.png';

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

    //Determines how to display equipoment based on its type
    function displaySwitch() { 
        let eqType = '';
        let eqIcon = '';

        if (info.type === 'accessory') { eqType = 'accessory'; eqIcon = accessory; }
        else if (info.type === 'hat') { eqType = 'armor'; eqIcon = hat; }
        else if (info.type === 'helm') { eqType = 'armor'; eqIcon = helm; }
        else if (info.type === 'clothes') { eqType = 'armor'; eqIcon = clothes; }
        else if (info.type === 'light armor') { eqType = 'armor'; eqIcon = lightarmor; }
        else if (info.type === 'heavy armor') { eqType = 'armor'; eqIcon = heavyarmor; }
        else if (info.type === 'robe') { eqType = 'armor'; eqIcon = robe; }
        else if (info.type === 'light shield') { eqType = 'armor'; eqIcon = lightshield; }
        else if (info.type === 'heavy shield') { eqType = 'armor'; eqIcon = heavyshield; }
        else if (info.type === 'dagger') { eqType = 'weapon'; eqIcon = dagger; }
        else if (info.type === 'sword') { eqType = 'weapon'; eqIcon = sword; }
        else if (info.type === 'great sword') { eqType = 'weapon'; eqIcon = greatsword; }
        else if (info.type === 'katana') { eqType = 'weapon'; eqIcon = katana; }
        else if (info.type === 'staff') { eqType = 'weapon'; eqIcon = staff; }
        else if (info.type === 'rod') { eqType = 'weapon'; eqIcon = rod; }
        else if (info.type === 'bow') { eqType = 'weapon'; eqIcon = bow; }
        else if (info.type === 'axe') { eqType = 'weapon'; eqIcon = axe; }
        else if (info.type === 'hammer') { eqType = 'weapon'; eqIcon = hammer; }
        else if (info.type === 'spear') { eqType = 'weapon'; eqIcon = spear; }
        else if (info.type === 'instrument') { eqType = 'weapon'; eqIcon = instrument; }
        else if (info.type === 'whip') { eqType = 'weapon'; eqIcon = whip; }
        else if (info.type === 'throwing weapon') { eqType = 'weapon'; eqIcon = throwingweapon; }
        else if (info.type === 'gun') { eqType = 'weapon'; eqIcon = gun; }
        else if (info.type === 'mace') { eqType = 'mace'; eqIcon = mace; }
        else { eqType = 'weapon'; eqIcon = fist; }
        // else if (info.type === 'fist') { eqType = 'weapon'; eqIcon = fist; }

        if ( info.type === 'accessory' ) {
            eqType = 'accessory';
        } else if ( info.type === 'light shield' ||
            info.type === 'heavy shield' ||
            info.type === 'hat' ||
            info.type === 'helm' ||
            info.type === 'clothes' ||
            info.type === 'light armor' ||
            info.type === 'heavy armor' ||
            info.type === 'robe') {
                eqType = 'armor';
        } else {
            eqType = 'weapon';
        }

        switch(eqType) {
            case 'weapon':
                let weaponElement = '';
                if (info.element === 'nonelemental') {//Design something for nonelemental
                    weaponElement = fire; 
                 }
                else if (info.element === 'fire') { weaponElement = fire; }
                else if (info.element === 'ice') { weaponElement = ice; }
                else if (info.element === 'lightning') { weaponElement = lightning; }
                else if (info.element === 'water') { weaponElement = water; }
                else if (info.element === 'wind') { weaponElement = wind; }
                else if (info.element === 'earth') { weaponElement = earth; }
                else if (info.element === 'light') { weaponElement = light; }
                else { weaponElement = dark; }

                return <div className='equipment-panel-container' onClick={onClick}>
                            <div className='eq-name'> {info.name} </div>
                            <div className='eq-class'>
                                <img src={eqIcon} alt='type' />
                            </div>
                            <div className='eq-stat'></div>
                            <div className='eq-img'>
                                <img src='https://gamepedia.cursecdn.com/exvius_gamepedia_en/0/08/Icon-Omega_Weapon_%28FFXIII%29.png?version=bad7d1545f58a722eaa2826ff978e82e' alt='failed' />
                            </div>
                            { info.element !== 'nonelemental' ? ( //Checks to see if weapon has an element
                                <div className='eq-element'>
                                    <img src={weaponElement} alt='e' /> 
                                </div>
                            ) : (null) }
                            <div className='eq-handle'>1H</div>
                            <div className='eq-enhancement'></div>
                        </div>;
            case 'armor':
                return <div className='equipment-panel-container' onClick={onClick}>
                            <div className='eq-name'>{info.name}</div>
                            <div className='eq-class'>
                                    <img src={eqIcon} alt='type' />
                            </div>
                            <div className='eq-stat'></div>
                            <div className='eq-img'>
                                <img src='https://gamepedia.cursecdn.com/exvius_gamepedia_en/0/08/Icon-Omega_Weapon_%28FFXIII%29.png?version=bad7d1545f58a722eaa2826ff978e82e' alt='failed' />
                            </div>
                            {/* <div className='eq-element'>
                                <img src={ earth } alt='element' />
                            </div> */}
                            <div className='eq-handle'>1H</div>
                            <div className='eq-enhancement'></div>
                        </div>;
            default: //accessory
                return <div className='equipment-panel-container' onClick={onClick}>
                            <div className='eq-name'> {info.name} </div>
                            <div className='eq-class'>
                                        <img src={eqIcon} alt='type' />
                            </div>
                            <div className='eq-stat'></div>
                            <div className='eq-img'>
                                <img src='https://gamepedia.cursecdn.com/exvius_gamepedia_en/0/08/Icon-Omega_Weapon_%28FFXIII%29.png?version=bad7d1545f58a722eaa2826ff978e82e' alt='failed' />
                            </div>
                            {/* <div className='eq-element'>
                                <img src={ earth } alt='element' />
                            </div> */}
                            <div className='eq-handle'>1H</div>
                            <div className='eq-enhancement'></div>
                        </div>;
        }
    }

    console.log('Render: EqPanel');

    return (
        <div>
            {
                Object.keys(info).length !== 0 ? (
                    displaySwitch()
                ) :
                (           
                    <div className='equipment-panel-container' onClick={onClick}>
                        <div className='eq-name'>Empty</div>
                        <div className='eq-class'></div>
                        <div className='eq-stat'></div>
                        <div className='eq-img'>
                            <img src='' 
                            alt='eq' />
                        </div>
                        {/* <div className='eq-element'>
                            <img src={earth} alt='element' />
                        </div> */}
                        <div className='eq-handle'>1H</div>
                        <div className='eq-enhancement'></div>
                    </div>
                )
            }
            
        </div>
    );
}

export default EquipmentPanel;

//<div className='eq-img'>
//https://gamepedia.cursecdn.com/exvius_gamepedia_en/0/08/Icon-Omega_Weapon_%28FFXIII%29.png?version=bad7d1545f58a722eaa2826ff978e82e