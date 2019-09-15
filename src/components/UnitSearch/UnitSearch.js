import React from "react";
import './UnitSearch.css';

const UnitSearch = searchChange => {
  return (
    <div>
      <div className="search-container">
        <input
          className='search-box'
          type="search"
          placeholder="search units"
          onChange={searchChange}
        />
        <button className='button-browse'>Browse</button>
      </div>
    </div>
  );
};

export default UnitSearch;
