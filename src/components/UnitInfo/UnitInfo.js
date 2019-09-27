import React from "react";
import './UnitInfo.css';
import imgLightning from './unit-lightning.png';
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

const UnitInfo = ({ name= "Lightning", stats }) => {
    return (
        <div className='unit-info-container'>
            <div className='unit-name'>{`${name}`}</div>
            <div className='unit-stat'>
                {/* {
                    `HP: 5000 
                    MP: 900 
                    ATK: 3000 
                    MAG: 3000 
                    DEF: 1000 
                    SPR: 1000`
                } */}
                <ul><b>HP: 1000</b></ul>
                <ul><b>MP: 1000</b></ul>
                <ul><b>ATK: 1000</b></ul>
                <ul><b>MAG: 1000</b></ul>
                <ul><b>DEF: 1000</b></ul>
                <ul><b>SPR: 1000</b></ul>
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
    );
}

export default UnitInfo;