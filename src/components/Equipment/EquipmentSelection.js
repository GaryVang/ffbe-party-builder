import React from "react";
import './EquipmentSelection.css';
import EquipmentPanel from './EquipmentPanel';

const EquipmentSelection = () => {
    return (
        <div className='eq-select-container'>
            <EquipmentPanel>R-Hand</EquipmentPanel>
            <EquipmentPanel>L-Hand</EquipmentPanel>
            <EquipmentPanel>Head</EquipmentPanel>
            <EquipmentPanel>Body</EquipmentPanel>
            <EquipmentPanel>Acc 1</EquipmentPanel>
            <EquipmentPanel>Acc 2</EquipmentPanel>
        </div>
    );
}

export default EquipmentSelection;