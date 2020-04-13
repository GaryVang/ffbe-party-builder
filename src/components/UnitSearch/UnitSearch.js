import React from "react";
import "./UnitSearch.css";

const SearchList = ({ items, onUnitSelection, resetSearchBar }) => {
  return (
    //changed ul > div
    <div className="search-list-container">
      {// items.map((item, i) => <li onClick={myFunction.bind(this, item)}>{item}</li>)
      items.map((item, i) => (
        <li
          className="search-list-item"
          // onClick={onUnitSelection.bind(this, item)}>{item}
          onClick={e => {
            onUnitSelection(item, e);
            resetSearchBar(e);
          }}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

class UnitSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      filteredList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetSearchBar = this.resetSearchBar.bind(this);
  }

  // onUnitSelect = (unitName) => { // Triggers when an item on searchlist is clicked

  // };

  filterUnitList = () => {
    const { unitList } = this.props;
    const { filteredList, value } = this.state;
    console.log("1 opening value: ", value);
    // filteredList.length = 0;
    this.setState(
      {
        filteredList: []
      },
      function() {
        let tmpArray = [];

        if (value !== "") {
          for (var key in unitList) {
            // skip loop if the property is from prototype
            if (!unitList.hasOwnProperty(key)) continue;

            var obj = unitList[key];
            for (var prop in obj) {
              // skip loop if the property is from prototype
              if (!obj.hasOwnProperty(prop)) continue;

              if (prop === "name") {
                //------Change to check for textfield input
                // console.log('Name: ', obj[prop]);

                if (obj[prop].toLowerCase().includes(value.toLowerCase())) {
                  console.log("1 obj", obj[prop]);
                  // filteredList.push(obj[prop]);
                  // console.log('type: ', obj[prop]);

                  //Doesn't rely on using prop to directly modify state
                  //Works
                  tmpArray.push(obj[prop]);
                  this.setState({
                    filteredList: tmpArray
                  });
                }
              }
            }
          }
        }
      }
    );
    console.log("filterUnitList: ", filteredList);
  };

  resetSearchBar(event) {
    console.log("reset searchbar");
    this.setState({ value: "" }, function() {
      this.filterUnitList();
    });
  }

  handleChange(event) {
    console.log("input changed");
    this.setState({ value: event.target.value }, function() {
      this.filterUnitList();
    });
  }

  //SearchList is being rendered before state is set
  render() {
    return (
      <div className="unit-search-container">
        <div className="unit-search-wrapper">
          <input
            className="unit-search-box"
            type="text"
            placeholder="Ex: Olive"
            // onKeyUp={filterUnitList()}
            value={this.state.value} //Specifies initial value
            onChange={this.handleChange}
            // ref='someName' //was using to reset text field, prob unnecessary
          />
          <SearchList 
            items={this.state.filteredList}
            onUnitSelection={this.props.onUnitSelection}
            resetSearchBar={this.resetSearchBar}
          ></SearchList>
        </div>
        <button className="button-browse">Browse</button>
        <button className="button-unequip-all">Unequip All</button>
        {/* <button className="button-optimize">Optimize</button> */}
      </div>
    );
  }
}

export default UnitSearch;
