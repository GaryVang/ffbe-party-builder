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

const UnitInfo = ({
  unit,
  lHand,
  rHand,
  head,
  body,
  acc1,
  acc2,
  materia1,
  materia2,
  materia3,
  materia4,
  comparisonSlot,
  comparisonEq,
}) => {
  const [unitBaseStat, setUnitBaseStat] = useState({
    hp: 0,
    mp: 0,
    atk: 0,
    def: 0,
    mag: 0,
    spr: 0,
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
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
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
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
      element_resist: [
        getResist("fire"),
        getResist("ice"),
        getResist("lightning"),
        getResist("water"),
        getResist("wind"),
        getResist("earth"),
        getResist("light"),
        getResist("dark"),
      ],
      //8:poison,blind,sleep,silence,paralyze,confusion,disease,petrify
      status_resist: [
        getResist("poison"),
        getResist("blind"),
        getResist("sleep"),
        getResist("silence"),
        getResist("paralyze"),
        getResist("confusion"),
        getResist("disease"),
        getResist("petrify"),
      ],
    });
  }, [lHand, rHand, head, body, acc1, acc2]);

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
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
  });
  useEffect(() => {
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
      tdw_hp: 0,
      tdw_mp: 0,
      tdw_atk: 0,
      tdw_def: 0,
      tdw_mag: 0,
      tdw_spr: 0,
      element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
      status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    });

    calcSkills(
      setSkillStat,
      unit,
      [lHand, rHand, head, body, acc1, acc2],
      [materia1, materia2, materia3, materia4]
    );
  }, [
    unit,
    lHand,
    rHand,
    head,
    body,
    acc1,
    acc2,
    materia1,
    materia2,
    materia3,
    materia4,
  ]);

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
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
  });
  useEffect(() => {
    if (
      (lHand.type === 0 && rHand.type !== 30 && rHand.type !== 31) ||
      (rHand.type === 0 && lHand.type !== 30 && lHand.type !== 31)
    ) {
      setTotalStat({
        hp: Math.ceil(
          unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp) / 100) +
            eqBaseStat.hp * (1 + checkTDHLimit(skillStat.tdh_hp) / 100)
        ),
        mp: Math.ceil(
          unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp) / 100) +
            eqBaseStat.mp * (1 + checkTDHLimit(skillStat.tdh_mp) / 100)
        ),
        atk: Math.ceil(
          unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk) / 100) +
            eqBaseStat.atk * (1 + checkTDHLimit(skillStat.tdh_atk) / 100)
        ),
        def: Math.ceil(
          unitBaseStat.def * (1 + checkStatLimit(skillStat.def) / 100) +
            eqBaseStat.def * (1 + checkTDHLimit(skillStat.tdh_def) / 100)
        ),
        mag: Math.ceil(
          unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag) / 100) +
            eqBaseStat.mag * (1 + checkTDHLimit(skillStat.tdh_mag) / 100)
        ),
        spr: Math.ceil(
          unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr) / 100) +
            eqBaseStat.spr * (1 + checkTDHLimit(skillStat.tdh_spr) / 100)
        ),
        element_resist: [
          getTotalResist("element", 0),
          getTotalResist("element", 1),
          getTotalResist("element", 2),
          getTotalResist("element", 3),
          getTotalResist("element", 4),
          getTotalResist("element", 5),
          getTotalResist("element", 6),
          getTotalResist("element", 7),
        ],
        status_resist: [
          getTotalResist("status", 0),
          getTotalResist("status", 1),
          getTotalResist("status", 2),
          getTotalResist("status", 3),
          getTotalResist("status", 4),
          getTotalResist("status", 5),
          getTotalResist("status", 6),
          getTotalResist("status", 7),
        ],
      });
    } else if (
      lHand.type !== 0 &&
      rHand.type !== 0 &&
      rHand.type !== 30 &&
      rHand.type !== 31 &&
      lHand.type !== 30 &&
      lHand.type !== 31
    ) {
      setTotalStat({
        hp: Math.ceil(
          unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp) / 100) +
            eqBaseStat.hp * (1 + checkTDWLimit(skillStat.tdw_hp) / 100)
        ),
        mp: Math.ceil(
          unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp) / 100) +
            eqBaseStat.mp * (1 + checkTDWLimit(skillStat.tdw_mp) / 100)
        ),
        atk: Math.ceil(
          unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk) / 100) +
            eqBaseStat.atk * (1 + checkTDWLimit(skillStat.tdw_atk) / 100)
        ),
        def: Math.ceil(
          unitBaseStat.def * (1 + checkStatLimit(skillStat.def) / 100) +
            eqBaseStat.def * (1 + checkTDWLimit(skillStat.tdw_def) / 100)
        ),
        mag: Math.ceil(
          unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag) / 100) +
            eqBaseStat.mag * (1 + checkTDWLimit(skillStat.tdw_mag) / 100)
        ),
        spr: Math.ceil(
          unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr) / 100) +
            eqBaseStat.spr * (1 + checkTDWLimit(skillStat.tdw_spr) / 100)
        ),
        element_resist: [
          getTotalResist("element", 0),
          getTotalResist("element", 1),
          getTotalResist("element", 2),
          getTotalResist("element", 3),
          getTotalResist("element", 4),
          getTotalResist("element", 5),
          getTotalResist("element", 6),
          getTotalResist("element", 7),
        ],
        status_resist: [
          getTotalResist("status", 0),
          getTotalResist("status", 1),
          getTotalResist("status", 2),
          getTotalResist("status", 3),
          getTotalResist("status", 4),
          getTotalResist("status", 5),
          getTotalResist("status", 6),
          getTotalResist("status", 7),
        ],
      });
    } else {
      setTotalStat({
        hp: Math.ceil(
          unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp) / 100) +
            eqBaseStat.hp * 1
        ),
        mp: Math.ceil(
          unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp) / 100) +
            eqBaseStat.mp * 1
        ),
        atk: Math.ceil(
          unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk) / 100) +
            eqBaseStat.atk * 1
        ),
        def: Math.ceil(
          unitBaseStat.def * (1 + checkStatLimit(skillStat.def) / 100) +
            eqBaseStat.def * 1
        ),
        mag: Math.ceil(
          unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag) / 100) +
            eqBaseStat.mag * 1
        ),
        spr: Math.ceil(
          unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr) / 100) +
            eqBaseStat.spr * 1
        ),
        element_resist: [
          getTotalResist("element", 0),
          getTotalResist("element", 1),
          getTotalResist("element", 2),
          getTotalResist("element", 3),
          getTotalResist("element", 4),
          getTotalResist("element", 5),
          getTotalResist("element", 6),
          getTotalResist("element", 7),
        ],
        status_resist: [
          getTotalResist("status", 0),
          getTotalResist("status", 1),
          getTotalResist("status", 2),
          getTotalResist("status", 3),
          getTotalResist("status", 4),
          getTotalResist("status", 5),
          getTotalResist("status", 6),
          getTotalResist("status", 7),
        ],
      });
    }
  }, [unitBaseStat, eqBaseStat, skillStat]);

  const checkLimit = (limit) => {
    return (td) => {
      return td > limit ? limit : td;
    };
  };

  const checkTDWLimit = checkLimit(200);
  const checkTDHLimit = checkLimit(300);
  const checkStatLimit = checkLimit(400);
  // const checkStatusResistLimit = checkLimit(100); // Maybe not required yet

  const getTotalResist = (type, element) => {
    return (
      unitBaseStat[`${type}_resist`][element] +
      eqBaseStat[`${type}_resist`][element] +
      skillStat[`${type}_resist`][element]
    );
  };

  const getResist = (element) => {
    return (
      lHand[`${element}_resist`] +
      rHand[`${element}_resist`] +
      head[`${element}_resist`] +
      body[`${element}_resist`] +
      acc1[`${element}_resist`] +
      acc2[`${element}_resist`]
    );
  };

  const calcSkills = (setStat, unit, eqArr, matArr) => {
    // console.log('calcSkills.unit', unit);
    if (unit.skills != null) {
      unit.skills.forEach((skill) => {
        if (skill.requirements == null) {
          skill.effects.forEach((effect) => {
            calcSkillStat(
              setStat,
              effect.effect_code_3,
              JSON.parse(effect.effect_code_4),
              eqArr
            );
          });
        } else if (
          eqArr.find((eq) =>
            skill.requirements.find((req) => req.EQUIP === eq.eq_id)
          )
        ) {
          //tmr/stmr check
          skill.effects.forEach((effect) => {
            calcSkillStat(
              setStat,
              effect.effect_code_3,
              JSON.parse(effect.effect_code_4),
              eqArr
            );
          });
        }
      });
    }

    eqArr.forEach((eq) => {
      checkSkillUnitRestriction(setStat, eq.skills, unit.sub_id, eqArr);
    });

    matArr.forEach((mat) => {
      if (mat != null) {
        checkSkillUnitRestriction(setStat, mat.skills, unit.sub_id, eqArr);
      }
    });
  };

  const checkSkillUnitRestriction = (setStat, skills, unit_id, eqArr) => {
    if (skills != null) {
      skills.forEach((skill) => {
        if (
          skill.unit_restriction == null ||
          skill.unit_restriction.find((req) => req === unit_id)
        ) {
          calcSkillStat(
            setStat,
            skill.effect_code_3,
            JSON.parse(skill.effect_code_4),
            eqArr
          ); // code 4 stored as a string instead of array
        }
      });
    }
  };

  const calcSkillStat = (setStat, id, codeArr, eqArr) => {
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

        setStat((prevState) => ({
          ...prevState,
          hp: prevState.hp + codeArr[4],
          mp: prevState.mp + codeArr[5],
          atk: prevState.atk + codeArr[0],
          def: prevState.def + codeArr[1],
          mag: prevState.mag + codeArr[2],
          spr: prevState.spr + codeArr[3],
        }));
        break;
      case 2: // status resist
        setStat((prevState) => ({
          ...prevState,
          status_resist: prevState.status_resist.map(
            (element, index) => element + codeArr[index]
          ),
        }));
        break;
      case 3: // element resist
        setStat((prevState) => ({
          ...prevState,
          element_resist: prevState.element_resist.map(
            (element, index) => element + codeArr[index]
          ),
        }));
        break;
      case 6: // weapon mastery
        if (eqArr.find((eq) => eq.type === codeArr[0])) {
          setStat((prevState) => ({
            ...prevState,
            // hp: prevState.hp + (codeArr[5] === undefined ? 0 : codeArr[5]),
            hp: prevState.hp + (codeArr.length <= 6 ? 0 : codeArr[5]),
            mp: prevState.mp + (codeArr.length <= 7 ? 0 : codeArr[6]),
            atk: prevState.atk + codeArr[1],
            def: prevState.def + codeArr[2],
            mag: prevState.mag + codeArr[3],
            spr: prevState.spr + codeArr[4],
          }));
        }
        break;
      case 11: // killer
        break;
      case 13: // tdh atk
        if (codeArr[2] === 2) {
          setStat((prevState) => ({
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
        if (codeArr[0] === 1) {
          setStat((prevState) => ({
            ...prevState,
            tdw_atk: prevState.tdw_atk + codeArr[1],
          }));
        } else if (codeArr[0] === 2) {
          setStat((prevState) => ({
            ...prevState,
            tdw_def: prevState.tdw_def + codeArr[1],
          }));
        } else if (codeArr[0] === 3) {
          setStat((prevState) => ({
            ...prevState,
            tdw_mag: prevState.tdw_mag + codeArr[1],
          }));
        } else if (codeArr[0] === 4) {
          setStat((prevState) => ({
            ...prevState,
            tdw_spr: prevState.tdw_spr + codeArr[1],
          }));
        }
        break;
      case 70: // tdh - mag
        setStat((prevState) => ({
          ...prevState,
          tdh_mag: prevState.tdh_mag + codeArr[0],
        }));
        break;
      case 76: // weapon mastery - element resist
        break;
      case 10003: // tdh - all stats GL exclusive code
        setStat((prevState) => ({
          ...prevState,
          tdh_hp: prevState.tdh_hp + codeArr[0],
          tdh_mp: prevState.tdh_mp + codeArr[1],
          tdh_atk: prevState.tdh_atk + codeArr[2],
          tdh_def: prevState.tdh_def + codeArr[4],
          tdh_mag: prevState.tdh_mag + codeArr[3],
          tdh_spr: prevState.tdh_spr + codeArr[5],
        }));
        break;
      default:
    }
  };

  //------------------------------Comparison Code

  const [compSkillStat, setCompSkillStat] = useState({
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
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
  });
  useEffect(() => {}, [comparisonEq]);
  useEffect(() => {
    if (comparisonEq != null) {
      let eqArr = [];
      let matArr = [];

      if (comparisonSlot === "lHand") {
        eqArr = [comparisonEq, rHand, head, body, acc1, acc2];
        matArr = [materia1, materia2, materia3, materia4];
      } else if (comparisonSlot === "rHand") {
        eqArr = [lHand, comparisonEq, head, body, acc1, acc2];
        matArr = [materia1, materia2, materia3, materia4];
      } else if (comparisonSlot === "head") {
        eqArr = [lHand, rHand, comparisonEq, body, acc1, acc2];
        matArr = [materia1, materia2, materia3, materia4];
      } else if (comparisonSlot === "body") {
        eqArr = [lHand, rHand, head, comparisonEq, acc1, acc2];
        matArr = [materia1, materia2, materia3, materia4];
      } else if (comparisonSlot === "acc1") {
        eqArr = [lHand, rHand, head, body, comparisonEq, acc2];
        matArr = [materia1, materia2, materia3, materia4];
      } else if (comparisonSlot === "acc2") {
        eqArr = [lHand, rHand, head, body, acc1, comparisonEq];
        matArr = [materia1, materia2, materia3, materia4];
      } else {
        eqArr = [lHand, rHand, head, body, acc1, acc2];
        if (comparisonSlot === "materia1") {
          matArr = [comparisonEq, materia2, materia3, materia4];
        } else if (comparisonSlot === "materia2") {
          matArr = [materia1, comparisonEq, materia3, materia4];
        } else if (comparisonSlot === "materia3") {
          matArr = [materia1, materia2, comparisonEq, materia4];
        } else if (comparisonSlot === "materia4") {
          matArr = [materia1, materia2, materia3, comparisonEq];
        }
      }

      resetSkillStat(setCompSkillStat);

      calcSkills(setCompSkillStat, unit, eqArr, matArr);
    }
  }, [comparisonEq]);

  const [compEqBaseStat, setCompEqBaseStat] = useState({
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
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
  });
  useEffect(() => {
    if (comparisonSlot != null) {
      let eqArr = [];
      if (comparisonSlot === "lHand") {
        eqArr = [comparisonEq, rHand, head, body, acc1, acc2];
      } else if (comparisonSlot === "rHand") {
        eqArr = [lHand, comparisonEq, head, body, acc1, acc2];
      } else if (comparisonSlot === "head") {
        eqArr = [lHand, rHand, comparisonEq, body, acc1, acc2];
      } else if (comparisonSlot === "body") {
        eqArr = [lHand, rHand, head, comparisonEq, acc1, acc2];
      } else if (comparisonSlot === "acc1") {
        eqArr = [lHand, rHand, head, body, comparisonEq, acc2];
      } else if (comparisonSlot === "acc2") {
        eqArr = [lHand, rHand, head, body, acc1, comparisonEq];
      } else {
        eqArr = [lHand, rHand, head, body, acc1, acc2];
      }

      setCompEqBaseStat(calcEqBaseStat(eqArr));
    }
  }, [compSkillStat]);

  const [compTotalStat, setCompTotalStat] = useState({
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
    element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
  });
  useEffect(() => {
    const totalStatFunction = () => {
      if (comparisonSlot != null) {
        let eqArr = [];
        if (comparisonSlot === "lHand") {
          eqArr = [comparisonEq, rHand, head, body, acc1, acc2];
        } else if (comparisonSlot === "rHand") {
          eqArr = [lHand, comparisonEq, head, body, acc1, acc2];
        } else if (comparisonSlot === "head") {
          eqArr = [lHand, rHand, comparisonEq, body, acc1, acc2];
        } else if (comparisonSlot === "body") {
          eqArr = [lHand, rHand, head, comparisonEq, acc1, acc2];
        } else if (comparisonSlot === "acc1") {
          eqArr = [lHand, rHand, head, body, comparisonEq, acc2];
        } else if (comparisonSlot === "acc2") {
          eqArr = [lHand, rHand, head, body, acc1, comparisonEq];
        } else {
          eqArr = [lHand, rHand, head, body, acc1, acc2];
        }

        calcTotalStat(
          eqArr[0],
          eqArr[1],
          compSkillStat,
          compEqBaseStat,
          setCompTotalStat
        );
      } else {
        setCompTotalStat({
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
          element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
          status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
        });
      }
    };
    totalStatFunction();
  }, [compEqBaseStat]);

  const calcTotalStat = (lHand, rHand, skillStat, eqBaseStat, setter) => {
    if (
      (lHand.type === 0 && rHand.type !== 30 && rHand.type !== 31) ||
      (rHand.type === 0 && lHand.type !== 30 && lHand.type !== 31)
    ) {
      setter({
        hp: Math.ceil(
          unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp) / 100) +
            eqBaseStat.hp * (1 + checkTDHLimit(skillStat.tdh_hp) / 100)
        ),
        mp: Math.ceil(
          unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp) / 100) +
            eqBaseStat.mp * (1 + checkTDHLimit(skillStat.tdh_mp) / 100)
        ),
        atk: Math.ceil(
          unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk) / 100) +
            eqBaseStat.atk * (1 + checkTDHLimit(skillStat.tdh_atk) / 100)
        ),
        def: Math.ceil(
          unitBaseStat.def * (1 + checkStatLimit(skillStat.def) / 100) +
            eqBaseStat.def * (1 + checkTDHLimit(skillStat.tdh_def) / 100)
        ),
        mag: Math.ceil(
          unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag) / 100) +
            eqBaseStat.mag * (1 + checkTDHLimit(skillStat.tdh_mag) / 100)
        ),
        spr: Math.ceil(
          unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr) / 100) +
            eqBaseStat.spr * (1 + checkTDHLimit(skillStat.tdh_spr) / 100)
        ),
        element_resist: calcTotalResist(
          unitBaseStat.element_resist,
          skillStat.element_resist,
          eqBaseStat.element_resist
        ),
        status_resist: calcTotalResist(
          unitBaseStat.status_resist,
          skillStat.status_resist,
          eqBaseStat.status_resist
        ),
      });
    } else if (
      lHand.type !== 0 &&
      rHand.type !== 0 &&
      rHand.type !== 30 &&
      rHand.type !== 31 &&
      lHand.type !== 30 &&
      lHand.type !== 31
    ) {
      setter({
        hp: Math.ceil(
          unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp) / 100) +
            eqBaseStat.hp * (1 + checkTDWLimit(skillStat.tdw_hp) / 100)
        ),
        mp: Math.ceil(
          unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp) / 100) +
            eqBaseStat.mp * (1 + checkTDWLimit(skillStat.tdw_mp) / 100)
        ),
        atk: Math.ceil(
          unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk) / 100) +
            eqBaseStat.atk * (1 + checkTDWLimit(skillStat.tdw_atk) / 100)
        ),
        def: Math.ceil(
          unitBaseStat.def * (1 + checkStatLimit(skillStat.def) / 100) +
            eqBaseStat.def * (1 + checkTDWLimit(skillStat.tdw_def) / 100)
        ),
        mag: Math.ceil(
          unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag) / 100) +
            eqBaseStat.mag * (1 + checkTDWLimit(skillStat.tdw_mag) / 100)
        ),
        spr: Math.ceil(
          unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr) / 100) +
            eqBaseStat.spr * (1 + checkTDWLimit(skillStat.tdw_spr) / 100)
        ),
        element_resist: calcTotalResist(
          unitBaseStat.element_resist,
          skillStat.element_resist,
          eqBaseStat.element_resist
        ),
        status_resist: calcTotalResist(
          unitBaseStat.status_resist,
          skillStat.status_resist,
          eqBaseStat.status_resist
        ),
      });
    } else {
      setter({
        hp: Math.ceil(
          unitBaseStat.hp * (1 + checkStatLimit(skillStat.hp) / 100) +
            eqBaseStat.hp * 1
        ),
        mp: Math.ceil(
          unitBaseStat.mp * (1 + checkStatLimit(skillStat.mp) / 100) +
            eqBaseStat.mp * 1
        ),
        atk: Math.ceil(
          unitBaseStat.atk * (1 + checkStatLimit(skillStat.atk) / 100) +
            eqBaseStat.atk * 1
        ),
        def: Math.ceil(
          unitBaseStat.def * (1 + checkStatLimit(skillStat.def) / 100) +
            eqBaseStat.def * 1
        ),
        mag: Math.ceil(
          unitBaseStat.mag * (1 + checkStatLimit(skillStat.mag) / 100) +
            eqBaseStat.mag * 1
        ),
        spr: Math.ceil(
          unitBaseStat.spr * (1 + checkStatLimit(skillStat.spr) / 100) +
            eqBaseStat.spr * 1
        ),
        element_resist: calcTotalResist(
          unitBaseStat.element_resist,
          skillStat.element_resist,
          eqBaseStat.element_resist
        ),
        status_resist: calcTotalResist(
          unitBaseStat.status_resist,
          skillStat.status_resist,
          eqBaseStat.status_resist
        ),
      });
    }
  };

  const calcEqBaseStat = (eqArr) => {
    let tmp = {
      hp: 0,
      mp: 0,
      atk: 0,
      def: 0,
      mag: 0,
      spr: 0,
      element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
      status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    };

    eqArr.forEach((eq) => {
      let elementResistArr = getEqElementResist(eq);
      let statusResistArr = getEqStatusResist(eq);

      tmp.hp += eq.hp;
      tmp.mp += eq.mp;
      tmp.atk += eq.atk;
      tmp.def += eq.def;
      tmp.mag += eq.mag;
      tmp.spr += eq.spr;
      tmp.element_resist = tmp.element_resist.map((element, index) => {
        return element + elementResistArr[index];
      });
      tmp.status_resist = tmp.status_resist.map((status, index) => {
        return status + statusResistArr[index];
      });
    });

    return tmp;
  };

  const getEqElementResist = (eq) => {
    return [
      eq.fire_resist,
      eq.ice_resist,
      eq.lightning_resist,
      eq.water_resist,
      eq.wind_resist,
      eq.earth_resist,
      eq.light_resist,
      eq.dark_resist,
    ];
  };

  const getEqStatusResist = (eq) => {
    return [
      eq.poison_resist,
      eq.blind_resist,
      eq.sleep_resist,
      eq.silence_resist,
      eq.paralyze_resist,
      eq.confusion_resist,
      eq.disease_resist,
      eq.petrify_resist,
    ];
  };

  const calcTotalResist = (unit, totalSkillStat, totalEqBaseStat) => {
    let tmpArr = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 8; i++) {
      tmpArr[i] = unit[i] + totalSkillStat[i] + totalEqBaseStat[i];
    }

    return tmpArr;
  };

  // Resets state
  const resetSkillStat = (setter) => {
    setter({
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
      element_resist: [0, 0, 0, 0, 0, 0, 0, 0],
      status_resist: [0, 0, 0, 0, 0, 0, 0, 0],
    });
  };

  const compareStat = (oldStat, newStat) => {
    const diff = newStat - oldStat;
    if (diff === 0) {
      return <span></span>;
    } else if (diff > 0) {
      return <span className="positive-num-color">+{diff}</span>;
    } else {
      return <span className="negative-num-color">{diff}</span>;
    }
  };

  //---End of Comparison Code

  return comparisonEq == null ? (
    <div className="new-unit-info-container">
      <div className="new-unit-stat-general-container">
        <div className="new-unit-stat-general-hp-wrapper">
          <div className="new-unit-stat-hp">HP:</div>
          <div className="new-unit-stat-hp-total">{totalStat.hp}</div>
          <div className="new-unit-stat-hp-change"></div>
          <div>{skillStat.hp}%</div>
          <div></div>
        </div>

        <div className="new-unit-stat-general-mp-wrapper">
          <div className="new-unit-stat-mp">MP:</div>
          <div className="new-unit-stat-mp-total">{totalStat.mp}</div>
          <div className="new-unit-stat-mp-change"></div>

          <div>{skillStat.mp}%</div>
          <div></div>
        </div>

        <div className="new-unit-stat-general-atk-wrapper">
          <div className="new-unit-stat-atk">ATK:</div>
          <div className="new-unit-stat-atk-total">{totalStat.atk}</div>
          <div className="new-unit-stat-atk-change"></div>

          <div>{skillStat.atk}%</div>
          <div></div>
        </div>

        <div className="new-unit-stat-general-def-wrapper">
          <div className="new-unit-stat-def">DEF:</div>
          <div className="new-unit-stat-def-total">{totalStat.def}</div>
          <div className="new-unit-stat-def-change"></div>

          <div>{skillStat.def}%</div>
          <div></div>
        </div>

        <div className="new-unit-stat-general-mag-wrapper">
          <div className="new-unit-stat-mag">MAG:</div>
          <div className="new-unit-stat-mag-total">{totalStat.mag}</div>
          <div className="new-unit-stat-mag-change"></div>

          <div>{skillStat.mag}%</div>
          <div></div>
        </div>

        <div className="new-unit-stat-general-spr-wrapper">
          <div className="new-unit-stat-spr">SPR:</div>
          <div className="new-unit-stat-spr-total">{totalStat.spr}</div>
          <div className="new-unit-stat-spr-change"></div>

          <div>{skillStat.spr}%</div>
          <div></div>
        </div>
      </div>

      <div className="new-unit-stat-resist">
        <div className="new-unit-stat-resist-ailment-wrapper">
          <img src={poison} alt="" />
          <img src={blind} alt="" />
          <img src={sleep} alt="" />
          <img src={silence} alt="" />
          <img src={paralysis} alt="" />
          <img src={confusion} alt="" />
          <img src={disease} alt="" />
          <img src={petrification} alt="" />

          <div>{totalStat.status_resist[0]}</div>
          <div>{totalStat.status_resist[1]}</div>
          <div>{totalStat.status_resist[2]}</div>
          <div>{totalStat.status_resist[3]}</div>
          <div>{totalStat.status_resist[4]}</div>
          <div>{totalStat.status_resist[5]}</div>
          <div>{totalStat.status_resist[6]}</div>
          <div>{totalStat.status_resist[7]}</div>
        </div>

        <div className="new-unit-stat-resist-element-wrapper">
          <img src={fire} alt="" />
          <img src={ice} alt="" />
          <img src={lightning} alt="" />
          <img src={water} alt="" />
          <img src={wind} alt="" />
          <img src={earth} alt="" />
          <img src={light} alt="" />
          <img src={dark} alt="" />

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
            <div>TDW</div>
          </div>
          <div className="new-unit-stat-br-td-stat">
            <div className="new-unit-stat-br-td-stat-type">ATK:</div>
            <div className="new-unit-stat-br-td-stat-total">
              {skillStat.tdh_atk}
            </div>
            <div className="new-unit-stat-br-td-stat-change"></div>

            <div className="new-unit-stat-br-td-stat-total-tdw">
              {skillStat.tdw_atk}
            </div>
            <div className="new-unit-stat-br-td-stat-change-tdw"></div>
          </div>
        </div>
        <div className="new-unit-stat-br-killer-container">
          <div className="new-unit-stat-br-killer-header">
            <div>KILLER</div>
            <div>PHYS</div>
            <div>MAG</div>
          </div>
          <div className="new-unit-stat-br-killer">
            <div className="new-unit-stat-br-killer-type">Beast:</div>
            <div className="new-unit-stat-br-killer-physical">125</div>
            <div className="new-unit-stat-br-killer-physical-change">+0</div>
            <div className="new-unit-stat-br-killer-magic">125</div>
            <div className="new-unit-stat-br-killer-magic-change">+125</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="new-unit-info-container">
      <div className="new-unit-stat-general-container">
        <div className="new-unit-stat-general-hp-wrapper">
          <div className="new-unit-stat-hp">HP:</div>
          <div className="new-unit-stat-hp-total">{totalStat.hp}</div>
          <div className="new-unit-stat-hp-change">
            {compareStat(totalStat.hp, compTotalStat.hp)}
          </div>
          {/* <div className="new-unit-stat-hp-change">{compareStat(totalStat.hp, compTotalStat.hp)}</div> */}
          <div>{skillStat.hp}%</div>
          {/* <div>{compSkillStat.hp}%</div> */}
          {/* {compareStat(skillStat.hp, compSkillStat.hp)} */}
          <div>{compareStat(skillStat.hp, compSkillStat.hp)}</div>
        </div>

        <div className="new-unit-stat-general-mp-wrapper">
          <div className="new-unit-stat-mp">MP:</div>
          <div className="new-unit-stat-mp-total">{totalStat.mp}</div>
          <div className="new-unit-stat-mp-change">
            {compareStat(totalStat.mp, compTotalStat.mp)}
          </div>

          <div>{skillStat.mp}%</div>
          <div>{compareStat(skillStat.mp, compSkillStat.mp)}</div>
        </div>

        <div className="new-unit-stat-general-atk-wrapper">
          <div className="new-unit-stat-atk">ATK:</div>
          <div className="new-unit-stat-atk-total">{totalStat.atk}</div>
          <div className="new-unit-stat-atk-change">
            {compareStat(totalStat.atk, compTotalStat.atk)}
          </div>

          <div>{skillStat.atk}%</div>
          <div>{compareStat(skillStat.atk, compSkillStat.atk)}</div>
        </div>

        <div className="new-unit-stat-general-def-wrapper">
          <div className="new-unit-stat-def">DEF:</div>
          <div className="new-unit-stat-def-total">{totalStat.def}</div>
          <div className="new-unit-stat-def-change">
            {compareStat(totalStat.def, compTotalStat.def)}
          </div>

          <div>{skillStat.def}%</div>
          <div>{compareStat(skillStat.def, compSkillStat.def)}</div>
        </div>

        <div className="new-unit-stat-general-mag-wrapper">
          <div className="new-unit-stat-mag">MAG:</div>
          <div className="new-unit-stat-mag-total">{totalStat.mag}</div>
          <div className="new-unit-stat-mag-change">
            {compareStat(totalStat.mag, compTotalStat.mag)}
          </div>

          <div>{skillStat.mag}%</div>
          <div>{compareStat(skillStat.mag, compSkillStat.mag)}</div>
        </div>

        <div className="new-unit-stat-general-spr-wrapper">
          <div className="new-unit-stat-spr">SPR:</div>
          <div className="new-unit-stat-spr-total">{totalStat.spr}</div>
          <div className="new-unit-stat-spr-change">
            {compareStat(totalStat.spr, compTotalStat.spr)}
          </div>

          <div>{skillStat.spr}%</div>
          <div>{compareStat(skillStat.spr, compSkillStat.spr)}</div>
        </div>
      </div>

      <div className="new-unit-stat-resist">
        <div className="new-unit-stat-resist-ailment-wrapper">
          <img src={poison} alt="" />
          <img src={blind} alt="" />
          <img src={sleep} alt="" />
          <img src={silence} alt="" />
          <img src={paralysis} alt="" />
          <img src={confusion} alt="" />
          <img src={disease} alt="" />
          <img src={petrification} alt="" />

          <div>{totalStat.status_resist[0]}</div>
          <div>{totalStat.status_resist[1]}</div>
          <div>{totalStat.status_resist[2]}</div>
          <div>{totalStat.status_resist[3]}</div>
          <div>{totalStat.status_resist[4]}</div>
          <div>{totalStat.status_resist[5]}</div>
          <div>{totalStat.status_resist[6]}</div>
          <div>{totalStat.status_resist[7]}</div>
        </div>

        <div className="new-unit-stat-resist-element-wrapper">
          <img src={fire} alt="" />
          <img src={ice} alt="" />
          <img src={lightning} alt="" />
          <img src={water} alt="" />
          <img src={wind} alt="" />
          <img src={earth} alt="" />
          <img src={light} alt="" />
          <img src={dark} alt="" />

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
            <div>TDW</div>
          </div>
          <div className="new-unit-stat-br-td-stat">
            <div className="new-unit-stat-br-td-stat-type">ATK:</div>
            <div className="new-unit-stat-br-td-stat-total">
              {skillStat.tdh_atk}
            </div>
            <div className="new-unit-stat-br-td-stat-change">
              {compareStat(skillStat.tdh_atk, compSkillStat.tdh_atk)}
            </div>

            <div className="new-unit-stat-br-td-stat-total-tdw">
              {skillStat.tdw_atk}
            </div>
            <div className="new-unit-stat-br-td-stat-change-tdw">
              {compareStat(skillStat.tdw_atk, compSkillStat.tdw_atk)}
            </div>
          </div>
        </div>
        <div className="new-unit-stat-br-killer-container">
          <div className="new-unit-stat-br-killer-header">
            <div>KILLER</div>
            <div>PHYS</div>
            <div>MAG</div>
          </div>
          <div className="new-unit-stat-br-killer">
            <div className="new-unit-stat-br-killer-type">Beast:</div>
            <div className="new-unit-stat-br-killer-physical">125</div>
            <div className="new-unit-stat-br-killer-physical-change">+0</div>
            <div className="new-unit-stat-br-killer-magic">125</div>
            <div className="new-unit-stat-br-killer-magic-change">+125</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitInfo;
