import React, { useCallback } from "react";
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


const EquipmentSelection = ({ eqList, setDisplayEqSelection, slot }) => {

    // eqList.map(i => {
    //     return (
    //         console.log('map: ', i)
    //     )
    // });
    // console.log(eqList.eqList);

    // eqList.map((item, index) => {
    //     console.log(item);
    // });

    // console.log(5, eqList);

    // for(let key in eqList)
    // {
    //     // console.log('1', eqList[key]);
    //     let obj = eqList[key];
    //     for(let index in obj)
    //     {
    //         // console.log('2: ', obj[index].name);
    //     }
    // }

    // const test = Object.keys(eqList).map(key => {
    //     console.log('test', eqList[key])
    // })

    //---------------------------------------------------
    // if(eqList != undefined)
    // {
    //     const test = Object.keys(eqList).map(key => {
    //         // console.log('test', eqList[key].info)
    //         for(let index in eqList[key])
    //         {
    //             // console.log('2 test', eqList[key][index])
                
    //             // <EquipmentPanel info={eqList[key][index]}>
    //             //     </EquipmentPanel>
    //         }
    //     })
    // }

    const memoizedHandleClick = useCallback(
        () => {
          console.log('Click happened');
        },
        [], // Tells React to memoize regardless of arguments.
      );

    // console.log('closedisplay:', setDisplayEqSelection);

        console.log('slot: ', slot);
        console.log('eqList', eqList);

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
                {/* <EquipmentPanel>R-Hand</EquipmentPanel>
                <EquipmentPanel>L-Hand</EquipmentPanel>
                <EquipmentPanel>Head</EquipmentPanel>
                <EquipmentPanel>Body</EquipmentPanel>
                <EquipmentPanel>Acc 1</EquipmentPanel>
                <EquipmentPanel>Acc 2</EquipmentPanel> */}
                
                {   eqList !== undefined ? ( //Check to see if it should be !== instead
                        Object.keys(eqList).map(key => {
                            return(
                                <EquipmentPanel
                                    // info={eqList[key].info}
                                    info={eqList[key]}
                                    key={key}
                                    onClick={memoizedHandleClick}
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