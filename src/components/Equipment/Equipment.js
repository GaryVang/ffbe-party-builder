import React from "react";
import './Equipment.css';
import EquipmentPanel from './EquipmentPanel';

const Equipment = () => {
    return (
        <div className='equipment-container'>
            <EquipmentPanel>R-Hand</EquipmentPanel>
            {/* <EquipmentPanel>L-Hand</EquipmentPanel>
            <EquipmentPanel>Head</EquipmentPanel>
            <EquipmentPanel>Body</EquipmentPanel>
            <EquipmentPanel>Acc 1</EquipmentPanel>
            <EquipmentPanel>Acc 2</EquipmentPanel> */}
        </div>
    );
}

export default Equipment;