import React from "react";
import "./UnitInfo.css";
import poison from "./AilmentIcon/ailment-poison.png";
import blind from "./AilmentIcon/ailment-blind.png";
import sleep from "./AilmentIcon/ailment-sleep.png";
import silence from "./AilmentIcon/ailment-silence.png";
import paralysis from "./AilmentIcon/ailment-paralysis.png";
import confusion from "./AilmentIcon/ailment-confusion.png";
import disease from "./AilmentIcon/ailment-disease.png";
import petrification from "./AilmentIcon/ailment-petrification.png";
import fire from "./ElementalIcon/element-fire.png";
import ice from "./ElementalIcon/element-ice.png";
import lightning from "./ElementalIcon/element-lightning.png";
import water from "./ElementalIcon/element-water.png";
import wind from "./ElementalIcon/element-wind.png";
import earth from "./ElementalIcon/element-earth.png";
import light from "./ElementalIcon/element-light.png";
import dark from "./ElementalIcon/element-dark.png";
import imgLightning from "./unit-lightning.png";
import imgEsther from "./unit-esther.png";
import imgOlive from "./unit-olive.png";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Confirm whether to round up or down
function calcStat(unitBase, unitPassive, eqBase, eqPassive) {
  return Math.ceil(
    ((unitBase[0] + unitBase[1]) * (eqPassive + 100)) / 100 +
      eqBase +
      ((unitBase[0] + unitBase[1]) * unitPassive) / 100
  );
}

function getUnitImg(str) {
  if (str === "lightning") {
    return imgLightning;
  } else if (str === "esther") {
    return imgEsther;
  } else if (str === "olvie") {
    return imgOlive;
  }
  //default
  return imgLightning;
}

const UnitInfo = ({ unit_1, unit_2, equipment }) => {
  console.log("Render: UnitInfo: ", unit_2);
  // console.log('unit info ', equipment);

  return (
    <div className="new-unit-info-container">
      <div className="new-unit-name">{unit_1.name}</div>
      <button className="new-unit-more-info">+</button>
      <div className="new-unit-stat-general-container">

        <div className="new-unit-stat-general-hp-wrapper">
          <div className="new-unit-stat-hp">HP:</div>
          <div className="new-unit-stat-hp-total">25235</div>
          <div className="new-unit-stat-hp-change">+1553</div>

          <div>400</div>
          <div>+100</div>
        </div>

        <div className="new-unit-stat-general-mp-wrapper">
          <div className="new-unit-stat-mp">MP:</div>
          <div className="new-unit-stat-mp-total">0</div>
          <div className="new-unit-stat-mp-change">+53</div>

          <div>400</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-atk-wrapper">
          <div className="new-unit-stat-atk">ATK:</div>
          <div className="new-unit-stat-atk-total">5235</div>
          <div className="new-unit-stat-atk-change">+53</div>

          <div>400</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-def-wrapper">
          <div className="new-unit-stat-def">DEF:</div>
          <div className="new-unit-stat-def-total">5235</div>
          <div className="new-unit-stat-def-change">+53</div>

          <div>400</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-mag-wrapper">
          <div className="new-unit-stat-mag">MAG:</div>
          <div className="new-unit-stat-mag-total">5235</div>
          <div className="new-unit-stat-mag-change">+53</div>

          <div>400</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-spr-wrapper">
          <div className="new-unit-stat-spr">SPR:</div>
          <div className="new-unit-stat-spr-total">5235</div>
          <div className="new-unit-stat-spr-change">+53</div>

          <div>400</div>
          <div>+75</div>
        </div>
      </div>
      <div className="new-unit-stat-esper-container">Esper</div>
        
      <div className="new-unit-stat-resist">

          <div className="new-unit-stat-resist-ailment-wrapper">
            <img src={poison} alt=""/>
            <img src={blind} alt=""/>
            <img src={sleep} alt=""/>
            <img src={silence} alt=""/>
            <img src={paralysis} alt=""/>
            <img src={confusion} alt=""/>
            <img src={disease} alt=""/>
            <img src={petrification} alt=""/>

            <div>0</div>
            <div>100</div>
            <div>200</div>
            <div>75</div>
            <div>3</div>
            <div>23</div>
            <div>500</div>
            <div>2</div>
          </div> 

        {/* <div className="new-unit-stat-resist-element"> */}
          <div className="new-unit-stat-resist-element-wrapper">
            <img src={fire} alt=""/>
            <img src={ice} alt=""/>
            <img src={lightning} alt=""/>
            <img src={water} alt=""/>
            <img src={wind} alt=""/>
            <img src={earth} alt=""/>
            <img src={light} alt=""/>
            <img src={dark} alt=""/>

            <div>0</div>
            <div>100</div>
            <div>200</div>
            <div>75</div>
            <div>3</div>
            <div>23</div>
            <div>500</div>
            <div>2</div>
          </div>

      </div>
      
      <div className="new-unit-stat-br-container">
        <div className="new-unit-stat-br-td-container">
          <div className="new-unit-stat-br-td-header">
            <div>TDH</div>
            <div>|</div>
            <div>TDW</div>
          </div>
          <div className="new-unit-stat-br-td-stat">
            <div className="new-unit-stat-br-td-stat-type">ATK:</div>
            <div className="new-unit-stat-br-td-stat-total">100</div>
            <div className="new-unit-stat-br-td-stat-change">+50</div>
           
          </div>
      
        </div>
        <div className="new-unit-stat-br-killer-container">
          <div className="new-unit-stat-br-killer-header">
            <div>Killer:</div>
            <div>Physical</div>
            <div>Magic</div>
          </div>
          <div className="new-unit-stat-br-killer">
            <div className="new-unit-stat-br-killer-type">Beast:</div>
            <div className="new-unit-stat-br-killer-physical">125</div>
            <div className="new-unit-stat-br-killer-physical-change">+125</div>
            <div className="new-unit-stat-br-killer-magic">125</div>
            <div className="new-unit-stat-br-killer-magic-change">+125</div>
          </div>
        </div>
      </div>

    </div>

    //----------Original-------------------------------------
    // <div>
    //   {unit_2 !== undefined ? (
    //     <div className="unit-info-container">
    //       <div className="unit-name">{`${capitalizeFirstLetter(
    //         unit_2.name
    //       )}`}</div>
    //       <div className="unit-stat">
    //         <ul>
    //           <b>
    //             HP:{" "}
    //             {calcStat(
    //               unit_2.hp,
    //               unit_2.passive[0],
    //               equipment.base[0],
    //               equipment.passive[0]
    //             )}
    //           </b>
    //         </ul>
    //         <ul>
    //           <b>
    //             MP:{" "}
    //             {calcStat(
    //               unit_2.mp,
    //               unit_2.passive[1],
    //               equipment.base[1],
    //               equipment.passive[1]
    //             )}
    //           </b>
    //         </ul>
    //         <ul>
    //           <b>
    //             ATK:{" "}
    //             {calcStat(
    //               unit_2.atk,
    //               unit_2.passive[2],
    //               equipment.base[2],
    //               equipment.passive[2]
    //             )}
    //           </b>
    //         </ul>
    //         <ul>
    //           <b>
    //             MAG:{" "}
    //             {calcStat(
    //               unit_2.mag,
    //               unit_2.passive[3],
    //               equipment.base[3],
    //               equipment.passive[3]
    //             )}
    //           </b>
    //         </ul>
    //         <ul>
    //           <b>
    //             DEF:{" "}
    //             {calcStat(
    //               unit_2.def,
    //               unit_2.passive[4],
    //               equipment.base[4],
    //               equipment.passive[4]
    //             )}
    //           </b>
    //         </ul>
    //         <ul>
    //           <b>
    //             SPR:{" "}
    //             {calcStat(
    //               unit_2.spr,
    //               unit_2.passive[5],
    //               equipment.base[5],
    //               equipment.passive[5]
    //             )}
    //           </b>
    //         </ul>
    //       </div>
    //       <div className="unit-img">
    //         <img
    //           alt="unit img"
    //           // src={imgLightning}
    //           src={[getUnitImg(unit_2.name)]}
    //         />
    //       </div>
    //       <div className="unit-weapon-type">
    //         <ul>
    //           <b>{`TDW: ${unit_2.tdw}%   ATK: +100`}</b>
    //         </ul>
    //         <ul>
    //           <b>{`TDH: ${unit_2.tdh}%   ATK: +Add later: Calc with Eq`}</b>
    //         </ul>
    //       </div>
    //       <div className="unit-killer">Killers</div>
    //       <div className="unit-ailment">
    //         <img className="icon-poison" alt="ailment" src={poison} />
    //         <img className="icon-blind" alt="ailment" src={blind} />
    //         <img className="icon-sleep" alt="ailment" src={sleep} />
    //         <img className="icon-silence" alt="ailment" src={silence} />
    //         <img className="icon-paralysis" alt="ailment" src={paralysis} />
    //         <img className="icon-confusion" alt="ailment" src={confusion} />
    //         <img className="icon-disease" alt="ailment" src={disease} />
    //         <img
    //           className="icon-petrification"
    //           alt="ailment"
    //           src={petrification}
    //         />
    //         <div>{unit_2.resist_ailment[0] + equipment.resist_ailment[0]}</div>
    //         <div>{unit_2.resist_ailment[1] + equipment.resist_ailment[1]}</div>
    //         <div>{unit_2.resist_ailment[2] + equipment.resist_ailment[2]}</div>
    //         <div>{unit_2.resist_ailment[3] + equipment.resist_ailment[3]}</div>
    //         <div>{unit_2.resist_ailment[4] + equipment.resist_ailment[4]}</div>
    //         <div>{unit_2.resist_ailment[5] + equipment.resist_ailment[5]}</div>
    //         <div>{unit_2.resist_ailment[6] + equipment.resist_ailment[6]}</div>
    //         <div>{unit_2.resist_ailment[7] + equipment.resist_ailment[7]}</div>
    //       </div>
    //       <div className="unit-element">
    //         <img className="icon-fire" alt="ailment" src={fire} />
    //         <img className="icon-ice" alt="ailment" src={ice} />
    //         <img className="icon-lightning" alt="ailment" src={lightning} />
    //         <img className="icon-water" alt="ailment" src={water} />
    //         <img className="icon-wind" alt="ailment" src={wind} />
    //         <img className="icon-earth" alt="ailment" src={earth} />
    //         <img className="icon-light" alt="ailment" src={light} />
    //         <img className="icon-dark" alt="ailment" src={dark} />
    //         <div>{unit_2.resist_element[0] + equipment.resist_element[0]}</div>
    //         <div>{unit_2.resist_element[1] + equipment.resist_element[1]}</div>
    //         <div>{unit_2.resist_element[2] + equipment.resist_element[2]}</div>
    //         <div>{unit_2.resist_element[3] + equipment.resist_element[3]}</div>
    //         <div>{unit_2.resist_element[4] + equipment.resist_element[4]}</div>
    //         <div>{unit_2.resist_element[5] + equipment.resist_element[5]}</div>
    //         <div>{unit_2.resist_element[6] + equipment.resist_element[6]}</div>
    //         <div>{unit_2.resist_element[7] + equipment.resist_element[7]}</div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="unit-info-container">
    //       <div className="unit-name">{`${unit.unitName}`}</div>
    //       <div className="unit-stat">
    //         {/* {
    //                             `HP: 5000
    //                             MP: 900
    //                             ATK: 3000
    //                             MAG: 3000
    //                             DEF: 1000
    //                             SPR: 1000`
    //                         } */}
    //         <ul>
    //           <b>HP: {unit.hp}</b>
    //         </ul>
    //         <ul>
    //           <b>MP: {unit.mp}</b>
    //         </ul>
    //         <ul>
    //           <b>ATK: {unit.atk}</b>
    //         </ul>
    //         <ul>
    //           <b>MAG: {unit.mag}</b>
    //         </ul>
    //         <ul>
    //           <b>DEF: {unit.def}</b>
    //         </ul>
    //         <ul>
    //           <b>SPR: {unit.spr}</b>
    //         </ul>
    //       </div>
    //       <div className="unit-img">
    //         <img alt="unit img" src={imgLightning} />
    //       </div>
    //       <div className="unit-weapon-type">
    //         <ul>
    //           <b>TDW: 100% ATK: +100</b>
    //         </ul>
    //         <ul>
    //           <b>TDH: 0% ATK: +0</b>
    //         </ul>
    //       </div>
    //       <div className="unit-killer">Killers</div>
    //       <div className="unit-ailment">
    //         <img className="icon-poison" alt="ailment" src={poison} />
    //         <img className="icon-blind" alt="ailment" src={blind} />
    //         <img className="icon-sleep" alt="ailment" src={sleep} />
    //         <img className="icon-silence" alt="ailment" src={silence} />
    //         <img className="icon-paralysis" alt="ailment" src={paralysis} />
    //         <img className="icon-confusion" alt="ailment" src={confusion} />
    //         <img className="icon-disease" alt="ailment" src={disease} />
    //         <img
    //           className="icon-petrification"
    //           alt="ailment"
    //           src={petrification}
    //         />
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //       </div>
    //       <div className="unit-element">
    //         <img className="icon-fire" alt="ailment" src={fire} />
    //         <img className="icon-ice" alt="ailment" src={ice} />
    //         <img className="icon-lightning" alt="ailment" src={lightning} />
    //         <img className="icon-water" alt="ailment" src={water} />
    //         <img className="icon-wind" alt="ailment" src={wind} />
    //         <img className="icon-earth" alt="ailment" src={earth} />
    //         <img className="icon-light" alt="ailment" src={light} />
    //         <img className="icon-dark" alt="ailment" src={dark} />
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //         <div>100</div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default UnitInfo;
