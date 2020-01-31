import React from "react";
import './UnitInfo.css';
import poison from './AilmentIcon/ailment-poison.png';
import blind from './AilmentIcon/ailment-blind.png';
import sleep from './AilmentIcon/ailment-sleep.png';
import silence from './AilmentIcon/ailment-silence.png';
import paralysis from './AilmentIcon/ailment-paralysis.png';
import confusion from './AilmentIcon/ailment-confusion.png';
import disease from './AilmentIcon/ailment-disease.png';
import petrification from './AilmentIcon/ailment-petrification.png';
import fire from './ElementalIcon/element-fire.png';
import ice from './ElementalIcon/element-ice.png';
import lightning from './ElementalIcon/element-lightning.png';
import water from './ElementalIcon/element-water.png';
import wind from './ElementalIcon/element-wind.png';
import earth from './ElementalIcon/element-earth.png';
import light from './ElementalIcon/element-light.png';
import dark from './ElementalIcon/element-dark.png';
import imgLightning from './unit-lightning.png';
import imgEsther from './unit-esther.png';
import imgOlive from './unit-olive.png';

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Confirm whether to round up or down
function calcStat(unitBase, unitPassive, eqBase, eqPassive){ 
    return Math.ceil( (unitBase[0]+unitBase[1]) * (eqPassive+100)/100 + eqBase + 
            (unitBase[0]+unitBase[1]) * (unitPassive)/100 );
}

function getUnitImg(str){
    if(str === 'lightning'){
        return imgLightning;
    } else if(str === 'esther'){
        return imgEsther;
    } else if(str === 'olvie'){
        return imgOlive;
    }
    //default
    return imgLightning;
}

const UnitInfo = ({ unit, unit_2, equipment }) => {
    console.log('Render: UnitInfo: ', unit_2);
    // console.log('unit info ', equipment);
    return (
        <div>
            {
                unit_2 !== undefined ? (
                    <div className='unit-info-container'>
                        <div className='unit-name'>{`${capitalizeFirstLetter(unit_2.name)}`}</div>
                        <div className='unit-stat'>
                            <ul><b>HP: {calcStat(unit_2.hp, unit_2.passive[0], equipment.base[0], equipment.passive[0])}</b></ul>
                            <ul><b>MP: {calcStat(unit_2.mp, unit_2.passive[1], equipment.base[1], equipment.passive[1])}</b></ul>
                            <ul><b>ATK: {calcStat(unit_2.atk, unit_2.passive[2], equipment.base[2], equipment.passive[2])}</b></ul>
                            <ul><b>MAG: {calcStat(unit_2.mag, unit_2.passive[3], equipment.base[3], equipment.passive[3])}</b></ul>
                            <ul><b>DEF: {calcStat(unit_2.def, unit_2.passive[4], equipment.base[4], equipment.passive[4])}</b></ul>
                            <ul><b>SPR: {calcStat(unit_2.spr, unit_2.passive[5], equipment.base[5], equipment.passive[5])}</b></ul>
                        </div>
                        <div className='unit-img'>
                            <img 
                                alt='unit img' 
                                // src={imgLightning} 
                                src={[getUnitImg(unit_2.name)]} 
                                />
                        </div>
                        <div className='unit-weapon-type'>
                            <ul><b>{`TDW: ${unit_2.tdw}%   ATK: +100`}</b></ul>
                            <ul><b>{`TDH: ${unit_2.tdh}%   ATK: +Add later: Calc with Eq`}</b></ul>
                        </div>
                        <div className='unit-killer'>Killers</div>
                        <div className='unit-ailment'>
                            <img className='icon-poison' alt='ailment' src={poison} />
                            <img className='icon-blind' alt='ailment' src={blind} />
                            <img className='icon-sleep' alt='ailment' src={sleep} />
                            <img className='icon-silence' alt='ailment' src={silence} />
                            <img className='icon-paralysis' alt='ailment' src={paralysis} />
                            <img className='icon-confusion' alt='ailment' src={confusion} />
                            <img className='icon-disease' alt='ailment' src={disease} />
                            <img className='icon-petrification' alt='ailment' src={petrification} />
                            <div>{unit_2.resist_ailment[0] + equipment.resist_ailment[0]}</div>
                            <div>{unit_2.resist_ailment[1] + equipment.resist_ailment[1]}</div>
                            <div>{unit_2.resist_ailment[2] + equipment.resist_ailment[2]}</div>
                            <div>{unit_2.resist_ailment[3] + equipment.resist_ailment[3]}</div>
                            <div>{unit_2.resist_ailment[4] + equipment.resist_ailment[4]}</div>
                            <div>{unit_2.resist_ailment[5] + equipment.resist_ailment[5]}</div>
                            <div>{unit_2.resist_ailment[6] + equipment.resist_ailment[6]}</div>
                            <div>{unit_2.resist_ailment[7] + equipment.resist_ailment[7]}</div>
                        </div>
                        <div className='unit-element'>
                            <img className='icon-fire' alt='ailment' src={fire} />
                            <img className='icon-ice' alt='ailment' src={ice} />
                            <img className='icon-lightning' alt='ailment' src={lightning} />
                            <img className='icon-water' alt='ailment' src={water} />
                            <img className='icon-wind' alt='ailment' src={wind} />
                            <img className='icon-earth' alt='ailment' src={earth} />
                            <img className='icon-light' alt='ailment' src={light} />
                            <img className='icon-dark' alt='ailment' src={dark} />
                            <div>{unit_2.resist_element[0] + equipment.resist_element[0]}</div>
                            <div>{unit_2.resist_element[1] + equipment.resist_element[1]}</div>
                            <div>{unit_2.resist_element[2] + equipment.resist_element[2]}</div>
                            <div>{unit_2.resist_element[3] + equipment.resist_element[3]}</div>
                            <div>{unit_2.resist_element[4] + equipment.resist_element[4]}</div>
                            <div>{unit_2.resist_element[5] + equipment.resist_element[5]}</div>
                            <div>{unit_2.resist_element[6] + equipment.resist_element[6]}</div>
                            <div>{unit_2.resist_element[7] + equipment.resist_element[7]}</div>   
                        </div>
                    </div>
                ) : 
                (
                    <div className='unit-info-container'>
                        <div className='unit-name'>{`${unit.unitName}`}</div>
                        <div className='unit-stat'>
                            {/* {
                                `HP: 5000 
                                MP: 900 
                                ATK: 3000 
                                MAG: 3000 
                                DEF: 1000 
                                SPR: 1000`
                            } */}
                            <ul><b>HP: {unit.hp}</b></ul>
                            <ul><b>MP: {unit.mp}</b></ul>
                            <ul><b>ATK: {unit.atk}</b></ul>
                            <ul><b>MAG: {unit.mag}</b></ul>
                            <ul><b>DEF: {unit.def}</b></ul>
                            <ul><b>SPR: {unit.spr}</b></ul>
                        </div>
                        <div className='unit-img'>
                            <img alt='unit img' src={imgLightning} />
                        </div>
                        <div className='unit-weapon-type'>
                            <ul><b>TDW: 100% ATK: +100</b></ul>
                            <ul><b>TDH: 0% ATK: +0</b></ul>
                        </div>
                        <div className='unit-killer'>Killers</div>
                        <div className='unit-ailment'>
                            <img className='icon-poison' alt='ailment' src={poison} />
                            <img className='icon-blind' alt='ailment' src={blind} />
                            <img className='icon-sleep' alt='ailment' src={sleep} />
                            <img className='icon-silence' alt='ailment' src={silence} />
                            <img className='icon-paralysis' alt='ailment' src={paralysis} />
                            <img className='icon-confusion' alt='ailment' src={confusion} />
                            <img className='icon-disease' alt='ailment' src={disease} />
                            <img className='icon-petrification' alt='ailment' src={petrification} />
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                        </div>
                        <div className='unit-element'>
                            <img className='icon-fire' alt='ailment' src={fire} />
                            <img className='icon-ice' alt='ailment' src={ice} />
                            <img className='icon-lightning' alt='ailment' src={lightning} />
                            <img className='icon-water' alt='ailment' src={water} />
                            <img className='icon-wind' alt='ailment' src={wind} />
                            <img className='icon-earth' alt='ailment' src={earth} />
                            <img className='icon-light' alt='ailment' src={light} />
                            <img className='icon-dark' alt='ailment' src={dark} />
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>
                            <div>100</div>   
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default UnitInfo;