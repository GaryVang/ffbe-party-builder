import React from "react";
import './UnitInfo.css';
import lightning from './unit-lightning.png';

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
                <img alt='unit img' src={lightning} />
            </div>
            <div className='unit-weapon-type'>
                <ul><b>TDW: 100% ATK: +100</b></ul>
                <ul><b>TDH: 0% ATK: +0</b></ul>
            </div>
            <div className='unit-killer'>Killers</div>
            <div className='unit-ailment'>Ailment</div>
            <div className='unit-element'>Element</div>
        </div>
    );
}

export default UnitInfo;