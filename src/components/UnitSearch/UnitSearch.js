import React from "react";
import './UnitSearch.css';

const UnitSearch = ({ onSearchChange, unitList }) => {

  let newUnitList = [];
  const SearchList = ({ items }) => (
    <ul>
      {
        items.map((item, i) => <li>{item}</li>) 
      }
    </ul>
  );

  const filterUnitList = () => {
    for (var key in unitList) {
      // skip loop if the property is from prototype
      if (!unitList.hasOwnProperty(key)) continue;
  
      var obj = unitList[key];
      for (var prop in obj) {
          // skip loop if the property is from prototype
          if (!obj.hasOwnProperty(prop)) continue;
  
            if(prop === 'name') //--------------------------Change to check for textfield input
            {
              // console.log('Name: ', obj[prop]);
              newUnitList.push(obj[prop]);
            }
              // alert(obj[prop]);
      }
    }
    console.log('Array: ', newUnitList);
  };

  return (
    <div>
      <div className="search-container">
        <input
          className='search-box'
          type="text"
          placeholder="Ex: Olive"
          // onChange={onSearchChange()}
          onkeyup={filterUnitList()}
          
        />
        <button className='button-browse'>Browse</button>
        <SearchList items={newUnitList}> </SearchList>
      </div>
    </div>
  );
};

export default UnitSearch;

// for (var key in unitList) {
//   // skip loop if the property is from prototype
//   if (!unitList.hasOwnProperty(key)) continue;

//   var obj = unitList[key];
//   for (var prop in obj) {
//       // skip loop if the property is from prototype
//       if (!obj.hasOwnProperty(prop)) continue;

//       // your code
//       alert(prop + " = " + obj[prop]);
//   }
// }