import React from "react";
import './EquipmentSelection.css';
import EquipmentPanel from './EquipmentPanel';

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

//To-do:
// Make render trigger only when EqSelection is closed (i.e. when 'x' button is clicked)
// While still updating
const EquipmentSelection = ({ eqList, setDisplayEqSelection, slot }) => {

    const handleChange = equipment => e => {
        console.log('eqSelection: ', equipment);
        // console.log('eqS slot setter: ', slot);
        slot(equipment);
    };

    console.log("Render: EqSelection");

    return (
        <div className='eq-select-container'>
            <input className='eq-search-box'
                type="text"
                placeholder="Ex: tdw, atk, 1h, fire"
                // onKeyUp={filterUnitList()}
                // value = {} //Specifies initial value
                // onChange={} //Specifies action
            />
 
            <button className='button-sort'>Sort</button>
            <button className='button-filter'>Filter</button>
            <button className='button-close' onClick={() => {setDisplayEqSelection(false)} }>X</button>
           
            <div className='eq-filter-icons'>

            </div>
            <div className='eq-icon-container'>
                <div className='eq-icon-weapon'>
                    <img className='icon-dagger' alt='dagger' src={dagger} />
                    <img className='icon-sword' alt='sword' src={sword} />
                    <img className='icon-greatsword' alt='greatsword' src={greatsword} />
                    <img className='icon-katana' alt='katana' src={katana} />     
                    <img className='icon-staff' alt='staff' src={staff} />
                    <img className='icon-rod' alt='rod' src={rod} />
                    <img className='icon-bow' alt='bow' src={bow} />
                    <img className='icon-axe' alt='axe' src={axe} />
                    <img className='icon-hammer' alt='hammer' src={hammer} />
                    <img className='icon-spear' alt='spear' src={spear} />
                    <img className='icon-instrument' alt='instrument' src={instrument} />
                    <img className='icon-whip' alt='whip' src={whip} />
                    <img className='icon-throwingweapon' alt='throwingweapon' src={throwingweapon} />
                    <img className='icon-gun' alt='gun' src={gun} />
                    <img className='icon-mace' alt='mace' src={mace} />
                    <img className='icon-fist' alt='fist' src={fist} />
                </div>
                <div className='eq-icon-armor'>
                    <img className='icon-lightshield' alt='lightshield' src={lightshield} />
                    <img className='icon-heavyshield' alt='heavyshield' src={heavyshield} />
                    <img className='icon-clothes' alt='clothes' src={clothes} />
                    <img className='icon-lightarmor' alt='lightarmor' src={lightarmor} />
                    <img className='icon-heavyarmor' alt='heavyarmor' src={heavyarmor} />
                    <img className='icon-robe' alt='robe' src={robe} />
                    <img className='icon-hat' alt='hat' src={hat} />
                    <img className='icon-helm' alt='helm' src={helm} />
                </div>
                <img className='icon-accessory' alt='accessory' src={accessory} />
            </div>
            <div className='eq-list'>          
                {   eqList !== undefined ? ( 
                        Object.keys(eqList).map(key => {
                            return(
                                <EquipmentPanel
                                    info={eqList[key]}
                                    key={key}
                                    onClick={ handleChange(eqList[key]) }
                                />
                            )
                        })
                    ) : (null) 
                }
            </div>
        </div>
    );
}

export default EquipmentSelection;