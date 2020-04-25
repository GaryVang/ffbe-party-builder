import React, { useEffect, useState } from "react";
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

// Static methods
// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

//Confirm whether to round up or down
// function calcStat(unitBase, unitPassive, eqBase, eqPassive) {
//   return Math.ceil(
//     ((unitBase[0] + unitBase[1]) * (eqPassive + 100)) / 100 +
//       eqBase +
//       ((unitBase[0] + unitBase[1]) * unitPassive) / 100
//   );
// }

// function getUnitImg(str) {
//   if (str === "lightning") {
//     return imgLightning;
//   } else if (str === "esther") {
//     return imgEsther;
//   } else if (str === "olvie") {
//     return imgOlive;
//   }
//   //default
//   return imgLightning;
// }

const UnitInfo = ({ unit, lHand, rHand, head, body, acc1, acc2, materia1, materia2, materia3, materia4, comparisonSlot }) => {
  console.log("Render: UnitInfo");
  // console.log('unit info ', equipment);

  const [unitBaseStat, setUnitBaseStat] = useState({
    hp: 0,
    mp: 0,
    atk: 0,
    def: 0,
    mag: 0,
    spr: 0,
    element_resist: [0,0,0,0,0,0,0,0],
    status_resist: [0,0,0,0,0,0,0,0]
  });
    useEffect(() => {
      setUnitBaseStat({
        hp: unit.hp[0] + unit.hp[1] + unit.hp[2],
        mp: unit.mp[0] + unit.mp[1] + unit.mp[2],
        atk: unit.atk[0] + unit.atk[1] + unit.atk[2],
        def: unit.def[0] + unit.def[1] + unit.def[2],
        mag: unit.mag[0] + unit.mag[1] + unit.mag[2],
        spr: unit.spr[0] + unit.spr[1] + unit.spr[2],
        element_resist: unit.element_resist,
        status_resist: unit.status_resist,
      });
    }, [unit]);

    const getTotalResist = (type, element) => {
      // unitBaseStat, eqBaseStat, skillStat
      return unitBaseStat[`${type}_resist`][element] + eqBaseStat[`${type}_resist`][element] + skillStat[`${type}_resist`][element];
    }

    const getResist = (element) => {
      return lHand[`${element}_resist`] + rHand[`${element}_resist`] + head[`${element}_resist`] + body[`${element}_resist`] + acc1[`${element}_resist`] + acc2[`${element}_resist`];
    };

    const [eqBaseStat, setEqBaseStat] = useState({
      hp: 0,
      mp: 0,
      atk: 0,
      def: 0,
      mag: 0,
      spr: 0,
      tdh_hp: 0,
      tdh_mp: 0,
      tdh_atk: 0,
      tdh_def: 0,
      tdh_mag: 0,
      tdh_spr: 0,
      tdw_hp: 0,
      tdw_mp: 0,
      tdw_atk: 0,
      tdw_def: 0,
      tdw_mag: 0,
      tdw_spr: 0,
      element_resist: [0,0,0,0,0,0,0,0],
      status_resist: [0,0,0,0,0,0,0,0]
      });
      useEffect(() => {
        setEqBaseStat({
          hp: lHand.hp + rHand.hp + head.hp + body.hp + acc1.hp + acc2.hp,
          mp: lHand.mp + rHand.mp + head.mp + body.mp + acc1.mp + acc2.mp,
          atk: lHand.atk + rHand.atk + head.atk + body.atk + acc1.atk + acc2.atk,
          def: lHand.def + rHand.def + head.def + body.def + acc1.def + acc2.def,
          mag: lHand.mag + rHand.mag + head.mag + body.mag + acc1.mag + acc2.mag,
          spr: lHand.spr + rHand.spr + head.spr + body.spr + acc1.spr + acc2.spr,
          //8:fire,ice,lightning,water,wind,earth,light,dark
          element_resist: [getResist("fire"), getResist("ice"), getResist("lightning"), getResist("water"), getResist("wind"), getResist("earth"), getResist("light"), getResist("dark")],
          //8:poison,blind,sleep,silence,paralyze,confusion,disease,petrify
          status_resist: [getResist("poison"), getResist("blind"),getResist("sleep"), getResist("silence"), getResist("paralyze"), getResist("confusion"), getResist("disease"), getResist("petrify")],
        });
      }, [lHand, rHand, head, body, acc1, acc2]);

    const [elementResist, setElementResist] = useState(0);
      useEffect(() => {

      }, [unit, lHand, rHand, head, body, acc1, acc2]);

    const [skillStat, setSkillStat] = useState({
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        tdh_hp: 0,
        tdh_mp: 0,
        tdh_atk: 0,
        tdh_def: 0,
        tdh_mag: 0,
        tdh_spr: 0,
        tdw_hp: 0,
        tdw_mp: 0,
        tdw_atk: 0,
        tdw_def: 0,
        tdw_mag: 0,
        tdw_spr: 0,
        element_resist: [0,0,0,0,0,0,0,0],
        status_resist: [0,0,0,0,0,0,0,0],
    });
    useEffect(() => {
      // getSkillStat(...[unit.skills, lHand.skills, rHand.skills, head.skills, body.skills, acc1.skills, acc2.skills]);
      // [unit.skills, lHand.skills, rHand.skills, head.skills, body.skills, acc1.skills, acc2.skills].forEach(getSkillStat);

      setSkillStat({
        hp: 0,
        mp: 0,
        atk: 0,
        def: 0,
        mag: 0,
        spr: 0,
        tdh_hp: 0,
        tdh_mp: 0,
        tdh_atk: 0,
        tdh_def: 0,
        tdh_mag: 0,
        tdh_spr: 0,
        // tdh: [0,0,0,0,0,0],
        // tdw: [0,0,0,0,0,0],
        tdw_hp: 0,
        tdw_mp: 0,
        tdw_atk: 0,
        tdw_def: 0,
        tdw_mag: 0,
        tdw_spr: 0,
        element_resist: [0,0,0,0,0,0,0,0],
        status_resist: [0,0,0,0,0,0,0,0]
      });

      getSkillStatv2(setSkillStat, unit, [lHand, rHand, head, body, acc1, acc2], [materia1, materia2, materia3, materia4]);

    }, [unit, lHand, rHand, head, body, acc1, acc2, materia1, materia2, materia3, materia4]);


    const checkLimit = (limit) => {
      return (td) => {
        return (td > limit ? limit : td);
      }
    }

    const checkTDWLimit = checkLimit(200);
    const checkTDHLimit = checkLimit(300);
    const checkStatLimit = checkLimit(400);
    // const checkStatusResistLimit = checkLimit(100); // Maybe not required yet

    const [totalStat, setTotalStat] = useState({
      hp: 0,
      mp: 0,
      atk: 0,
      def: 0,
      mag: 0,
      spr: 0,
      tdh_hp: 0,
      tdh_mp: 0,
      tdh_atk: 0,
      tdh_def: 0,
      tdh_mag: 0,
      tdh_spr: 0,
      tdw_hp: 0,
      tdw_mp: 0,
      tdw_atk: 0,
      tdw_def: 0,
      tdw_mag: 0,
      tdw_spr: 0,
      element_resist: [0,0,0,0,0,0,0,0],
      status_resist: [0,0,0,0,0,0,0,0],
      });
      useEffect(() => {
        if((lHand.type === 0 && rHand.type !== 30 && rHand.type !== 31) || (rHand.type === 0 && lHand.type !== 30 && lHand.type !== 31)){
          setTotalStat({
            hp: Math.ceil(unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp)/100) + eqBaseStat.hp * (1 + checkTDHLimit(skillStat.tdh_hp)/100)),
            mp: Math.ceil(unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp)/100) + eqBaseStat.mp * (1 + checkTDHLimit(skillStat.tdh_mp)/100)),
            atk: Math.ceil(unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk)/100) + eqBaseStat.atk * (1 + checkTDHLimit(skillStat.tdh_atk)/100)),
            def: Math.ceil(unitBaseStat.def * (1 + checkStatLimit(skillStat.def)/100) + eqBaseStat.def * (1 + checkTDHLimit(skillStat.tdh_def)/100)),
            mag: Math.ceil(unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag)/100) + eqBaseStat.mag * (1 + checkTDHLimit(skillStat.tdh_mag)/100)),
            spr: Math.ceil(unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr)/100) + eqBaseStat.spr * (1 + checkTDHLimit(skillStat.tdh_spr)/100)),
            element_resist: [getTotalResist("element", 0), getTotalResist("element", 1), getTotalResist("element", 2), getTotalResist("element", 3), getTotalResist("element", 4), getTotalResist("element", 5) ,getTotalResist("element", 6) ,getTotalResist("element", 7)],
            status_resist: [getTotalResist("status", 0), getTotalResist("status", 1), getTotalResist("status", 2), getTotalResist("status", 3), getTotalResist("status", 4), getTotalResist("status", 5) ,getTotalResist("status", 6) ,getTotalResist("status", 7)],
          });
        } else if(lHand.type !== 0 && rHand.type !== 0 && rHand.type !== 30 && rHand.type !== 31 && lHand.type !== 30 && lHand.type !== 31){
          setTotalStat({
            hp: Math.ceil(unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp)/100) + eqBaseStat.hp * (1 + checkTDWLimit(skillStat.tdw_hp)/100)),
            mp: Math.ceil(unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp)/100) + eqBaseStat.mp * (1 + checkTDWLimit(skillStat.tdw_mp)/100)),
            atk: Math.ceil(unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk)/100) + eqBaseStat.atk * (1 + checkTDWLimit(skillStat.tdw_atk)/100)),
            def: Math.ceil(unitBaseStat.def * (1 + checkStatLimit(skillStat.def)/100) + eqBaseStat.def * (1 + checkTDWLimit(skillStat.tdw_def)/100)),
            mag: Math.ceil(unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag)/100) + eqBaseStat.mag * (1 + checkTDWLimit(skillStat.tdw_mag)/100)),
            spr: Math.ceil(unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr)/100) + eqBaseStat.spr * (1 + checkTDWLimit(skillStat.tdw_spr)/100)),
            element_resist: [getTotalResist("element", 0), getTotalResist("element", 1), getTotalResist("element", 2), getTotalResist("element", 3), getTotalResist("element", 4), getTotalResist("element", 5) ,getTotalResist("element", 6) ,getTotalResist("element", 7)],
            status_resist: [getTotalResist("status", 0), getTotalResist("status", 1), getTotalResist("status", 2), getTotalResist("status", 3), getTotalResist("status", 4), getTotalResist("status", 5) ,getTotalResist("status", 6) ,getTotalResist("status", 7)],
          });
        } else {
          setTotalStat({
            hp: Math.ceil(unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp)/100) + eqBaseStat.hp * (1)),
            mp: Math.ceil(unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp)/100) + eqBaseStat.mp * (1)),
            atk: Math.ceil(unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk)/100) + eqBaseStat.atk * (1)),
            def: Math.ceil(unitBaseStat.def * (1 + checkStatLimit(skillStat.def)/100) + eqBaseStat.def * (1)),
            mag: Math.ceil(unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag)/100) + eqBaseStat.mag * (1)),
            spr: Math.ceil(unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr)/100) + eqBaseStat.spr * (1)),
            element_resist: [getTotalResist("element", 0), getTotalResist("element", 1), getTotalResist("element", 2), getTotalResist("element", 3), getTotalResist("element", 4), getTotalResist("element", 5) ,getTotalResist("element", 6) ,getTotalResist("element", 7)],
            status_resist: [getTotalResist("status", 0), getTotalResist("status", 1), getTotalResist("status", 2), getTotalResist("status", 3), getTotalResist("status", 4), getTotalResist("status", 5) ,getTotalResist("status", 6) ,getTotalResist("status", 7)],
          });
        }
      }, [unitBaseStat, eqBaseStat, skillStat]);

  const getSkillStatv2 = (setStat, unit, eqArr, matArr) => {
    if(unit.skills != null){
      unit.skills.forEach(skill => {
        if(skill.requirements == null){
          skill.effects.forEach(effect => {
            calcSkillStat(setStat, effect.effect_code_3, JSON.parse(effect.effect_code_4), eqArr);
          });
        } else if(eqArr.find(eq => skill.requirements.find(req => req.EQUIP === eq.eq_id))){ //tmr/stmr check
          skill.effects.forEach(effect => {
            calcSkillStat(setStat, effect.effect_code_3, JSON.parse(effect.effect_code_4), eqArr);
          });
        }
      })
    }

    eqArr.forEach(eq => {
      getSkillStat(setStat, eq.skills, unit.sub_id, eqArr);
    });

    matArr.forEach(mat => {
      if(mat != null){
        getSkillStat(setStat, mat.skills, unit.sub_id, eqArr);
      }
    });
  };

  const getSkillStat = (setStat, skills, unit_id, eqArr) => {
    if(skills != null){
      skills.forEach(skill => {
        if(skill.unit_restriction == null){ // combine if/else || after testing
          calcSkillStat(setStat, skill.effect_code_3, JSON.parse(skill.effect_code_4), eqArr); // code 4 stored as a string instead of array
        } else if(skill.unit_restriction.find(req => req === unit_id)){
          calcSkillStat(setStat, skill.effect_code_3, JSON.parse(skill.effect_code_4), eqArr);
        }
      })
    }
  }

  const calcSkillStat = (setStat, id, codeArr, eqArr) => { // eqArr for weapon masteries

    switch (id) {
      case 1: // general stat %
        // setStat(prevState => ({
        //   ...prevState,
        //   hp: skillStat.hp + codeArr[4],
        //   mp: skillStat.mp + codeArr[5],
        //   atk: skillStat.atk + codeArr[0],
        //   def: skillStat.def + codeArr[1],
        //   mag: skillStat.mag + codeArr[2],
        //   spr: skillStat.spr + codeArr[3]
        // }));

        setStat(prevState => ({
          ...prevState,
          hp: prevState.hp + codeArr[4],
          mp: prevState.mp + codeArr[5],
          atk: prevState.atk + codeArr[0],
          def: prevState.def + codeArr[1],
          mag: prevState.mag + codeArr[2],
          spr: prevState.spr + codeArr[3]
        }));
        break;
      case 2: // status resist
        setStat(prevState => ({
          ...prevState,
          status_resist: prevState.status_resist.map((element, index) => element + codeArr[index])
        }));
        break;
      case 3: // element resist
        setStat(prevState => ({
          ...prevState,
          element_resist: prevState.element_resist.map((element, index) => element + codeArr[index])
        }));
        break;
      case 6: // weapon mastery
        if(eqArr.find(eq => eq.type === codeArr[0])){

          setStat(prevState => ({
            ...prevState,
            // hp: prevState.hp + (codeArr[5] === undefined ? 0 : codeArr[5]),
            hp: prevState.hp + (codeArr.length <=6 ? 0 : codeArr[5]),
            mp: prevState.mp + (codeArr.length <=7 ? 0 : codeArr[6]),
            atk: prevState.atk + codeArr[1],
            def: prevState.def + codeArr[2],
            mag: prevState.mag + codeArr[3],
            spr: prevState.spr + codeArr[4]
          }));
        }
        break;
      case 11: // killer
        break;
      case 13: // tdh atk
        if(codeArr[2] === 2){
          setStat(prevState => ({
            ...prevState,
            tdh_atk: prevState.tdh_atk + codeArr[0],
          }));
        }
        break;
      case 14: // enable dw
        break;
      case 17: // jump dmg
        break;
      case 21: // evo mag
        break;
      case 22: // evasion - physical
        break;
      case 24: // provoke - passive
        break;
      case 31: // LB - fillrate
        break;
      case 32: // auto-refresh
        break;
      case 33: // LB - stone/turn
        break;
      case 54: // evasion - magic
        break;
      case 55: // enfeeblement resist
        break;
      case 63: // esper stat increase
        break;
      case 68: // LB - dmg
        break;
      case 69: // tdw
        if(codeArr[0] === 1){
          setStat(prevState => ({
            ...prevState,
            tdw_atk: prevState.tdw_atk + codeArr[1],
          }));
        } else if(codeArr[0] === 2){
          setStat(prevState => ({
            ...prevState,
            tdw_def: prevState.tdw_def + codeArr[1],
          }));
        } else if(codeArr[0] === 3){
          setStat(prevState => ({
            ...prevState,
            tdw_mag: prevState.tdw_mag + codeArr[1],
          }));
        } else if(codeArr[0] === 4){
          setStat(prevState => ({
            ...prevState,
            tdw_spr: prevState.tdw_spr + codeArr[1],
          }));
        }
        break;
      case 70: // tdh - mag
        setStat(prevState => ({
          ...prevState,
          tdh_mag: prevState.tdh_mag + codeArr[0],
        }));
        break;
      case 76: // weapon mastery - element resist
        break;
      case 10003: // tdh - all stats GL exclusive code
        setStat(prevState => ({
          ...prevState,
          tdh_hp: prevState.tdh_hp + codeArr[0],
          tdh_mp: prevState.tdh_mp + codeArr[1],
          tdh_atk: prevState.tdh_atk + codeArr[2],
          tdh_def: prevState.tdh_def + codeArr[4],
          tdh_mag: prevState.tdh_mag + codeArr[3],
          tdh_spr: prevState.tdh_spr + codeArr[5]
        }));
        break;
      default:
        console.log("calcSkillStat default case triggered");
    }
  }

  const [hp, setHP] = useState(0);
    useEffect(() => {
      setHP(calcBaseStat(unit.hp[0], unit.hp[1], unit.hp[2]) + calcEqStat(lHand.hp, rHand.hp, head.hp, body.hp, acc1.hp, acc2.hp));
    }, [unit, lHand, rHand, head, body, acc1, acc2]);
  const [mp, setMP] = useState(0);
    useEffect(() => {
      setMP(calcBaseStat(unit.mp[0], unit.mp[1], unit.mp[2]) + calcEqStat(lHand.mp, rHand.mp, head.mp, body.mp, acc1.mp, acc2.mp));
    }, [unit, lHand, rHand, head, body, acc1, acc2]);
  const [atk, setATK] = useState(0);
    useEffect(() => {
      setATK(calcBaseStat(unit.atk[0], unit.atk[1], unit.atk[2]) + calcEqStat(lHand.atk, rHand.atk, head.atk, body.atk, acc1.atk, acc2.atk));
    }, [unit, lHand, rHand, head, body, acc1, acc2]);
  const [def, setDEF] = useState(0);
    useEffect(() => {
      setDEF(calcBaseStat(unit.def[0], unit.def[1], unit.def[2]) + calcEqStat(lHand.def, rHand.def, head.def, body.def, acc1.def, acc2.def));
    }, [unit, lHand, rHand, head, body, acc1, acc2]);
  const [mag, setMAG] = useState(0);
    useEffect(() => {
      setMAG(calcBaseStat(unit.mag[0], unit.mag[1], unit.mag[2]) + calcEqStat(lHand.mag, rHand.mag, head.mag, body.mag, acc1.mag, acc2.mag));
    }, [unit, lHand, rHand, head, body, acc1, acc2]);
  const [spr, setSPR] = useState(0);
    useEffect(() => {
      setSPR(calcBaseStat(unit.spr[0], unit.spr[1], unit.spr[2]) + calcEqStat(lHand.spr, rHand.spr, head.spr, body.spr, acc1.spr, acc2.spr));
    }, [unit, lHand, rHand, head, body, acc1, acc2]);

  const calcBaseStat = (base, pot, door) => {
    return Math.ceil(base + pot + door);
  };

  const calcEqStat = (lHand, rHand, head, body, acc1, acc2) => {
    return Math.ceil(lHand + rHand + head + body + acc1 + acc2);
  };

  // console.log('33333: ', rHand);

  return (
    <div className="new-unit-info-container">
      <div className="new-unit-name">{unit.name}</div>
      <button className="new-unit-more-info">+</button>
      <div className="new-unit-stat-general-container">

        <div className="new-unit-stat-general-hp-wrapper">
          <div className="new-unit-stat-hp">HP:</div>
          {/* <div className="new-unit-stat-hp-total">25235</div> */}
          {/* <div className="new-unit-stat-hp-total">{hp}</div> */}
          <div className="new-unit-stat-hp-total">{totalStat.hp}</div>
          <div className="new-unit-stat-hp-change">+1553</div>

          {/* <div>400</div> */}
          <div>{skillStat.hp}</div>
          <div>+100</div>
        </div>

        <div className="new-unit-stat-general-mp-wrapper">
          <div className="new-unit-stat-mp">MP:</div>
          <div className="new-unit-stat-mp-total">{totalStat.mp}</div>
          <div className="new-unit-stat-mp-change">+53</div>

          <div>{skillStat.mp}</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-atk-wrapper">
          <div className="new-unit-stat-atk">ATK:</div>
          <div className="new-unit-stat-atk-total">{totalStat.atk}</div>
          <div className="new-unit-stat-atk-change">+53</div>

          <div>{skillStat.atk}</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-def-wrapper">
          <div className="new-unit-stat-def">DEF:</div>
          <div className="new-unit-stat-def-total">{totalStat.def}</div>
          <div className="new-unit-stat-def-change">+53</div>

          <div>{skillStat.def}</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-mag-wrapper">
          <div className="new-unit-stat-mag">MAG:</div>
          <div className="new-unit-stat-mag-total">{totalStat.mag}</div>
          <div className="new-unit-stat-mag-change">+53</div>

          <div>{skillStat.mag}</div>
          <div>+75</div>
        </div>

        <div className="new-unit-stat-general-spr-wrapper">
          <div className="new-unit-stat-spr">SPR:</div>
          <div className="new-unit-stat-spr-total">{totalStat.spr}</div>
          <div className="new-unit-stat-spr-change">+53</div>

          <div>{skillStat.spr}</div>
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

            <div>{totalStat.status_resist[0]}</div>
            <div>{totalStat.status_resist[1]}</div>
            <div>{totalStat.status_resist[2]}</div>
            <div>{totalStat.status_resist[3]}</div>
            <div>{totalStat.status_resist[4]}</div>
            <div>{totalStat.status_resist[5]}</div>
            <div>{totalStat.status_resist[6]}</div>
            <div>{totalStat.status_resist[7]}</div>
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

            <div>{totalStat.element_resist[0]}</div>
            <div>{totalStat.element_resist[1]}</div>
            <div>{totalStat.element_resist[2]}</div>
            <div>{totalStat.element_resist[3]}</div>
            <div>{totalStat.element_resist[4]}</div>
            <div>{totalStat.element_resist[5]}</div>
            <div>{totalStat.element_resist[6]}</div>
            <div>{totalStat.element_resist[7]}</div>
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
