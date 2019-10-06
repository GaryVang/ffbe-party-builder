import React from "react";
import './EquipmentPanel.css';
import earth from '../UnitInfo/ElementalIcon/element-earth.png';

const EquipmentPanel = () => { // Maybe rename file to something more meaningful
    return (
        <div className='equipment-panel-container'>
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
    );
}

export default EquipmentPanel;