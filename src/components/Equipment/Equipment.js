import React from "react";
import './Equipment.css';
import EquipmentPanel from './EquipmentPanel';
import EquipmentSelection from './EquipmentSelection';

const Equipment = () => {
    return (
        <div>
            <div className='equipment-container'>
                <EquipmentPanel>R-Hand</EquipmentPanel>
                <EquipmentPanel>L-Hand</EquipmentPanel>
                <EquipmentPanel>Head</EquipmentPanel>
                <EquipmentPanel>Body</EquipmentPanel>
                <EquipmentPanel>Acc 1</EquipmentPanel>
                <EquipmentPanel>Acc 2</EquipmentPanel>
            </div>
            <div className='equipment-selection-container'>
                <EquipmentSelection> </EquipmentSelection>
            </div>
        </div>
    );
}

export default Equipment;