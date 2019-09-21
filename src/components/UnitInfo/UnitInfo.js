import React from "react";
import './UnitInfo.css';
import lightning from './unit-lightning.png';
import poison from './AilmentIcon/ailment-poison.png';
import blind from './AilmentIcon/ailment-blind.png';
import sleep from './AilmentIcon/ailment-sleep.png';
import silence from './AilmentIcon/ailment-silence.png';
import paralysis from './AilmentIcon/ailment-paralysis.png';
import confusion from './AilmentIcon/ailment-confusion.png';
import disease from './AilmentIcon/ailment-disease.png';
import petrification from './AilmentIcon/ailment-petrification.png';

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
            <div className='unit-ailment'>
                <table className='table-ailment'>
                    <tr>
                        <th>
                            <img className='icon-poison' alt='ailment' src={poison} />
                        </th>
                        <th>
                            <img className='icon-blind' alt='ailment' src={blind} />
                        </th>
                        <th>
                            <img className='icon-poison' alt='ailment' src={sleep} />
                        </th>
                        <th>
                            <img className='icon-poison' alt='ailment' src={silence} />
                        </th>
                        <th>
                            <img className='icon-poison' alt='ailment' src={paralysis} />
                        </th>
                        <th>
                            <img className='icon-poison' alt='ailment' src={confusion} />
                        </th>
                        <th>
                            <img className='icon-poison' alt='ailment' src={disease} />
                        </th>
                        <th>
                            <img className='icon-poison' alt='ailment' src={petrification} />
                        </th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </table>
            </div>
            <div className='unit-element'>Element</div>
        </div>
    );
}

export default UnitInfo;