import React from "react";
import "./UnitSearch.css";

const SearchList = ({ items, onUnitSelection, resetSearchBar }) => {
  return (
    //changed ul > div
    <div className="search-list-container">
      {
        // items.map((item, i) => <li onClick={myFunction.bind(this, item)}>{item}</li>)
        items.map((item, i) => (
          <li
            key={i} // Each one should have a unique key prop
            className="search-list-item"
            // onClick={onUnitSelection.bind(this, item)}>{item}
            onClick={(e) => {
              // onUnitSelection(item, e);
              onUnitSelection(item.sub_id, e);
              // resetSearchBar(e);
              resetSearchBar(item.name, e);
            }}
          >
            {item.name}
          </li>
          // console.log(1, item)
        ))
      }
    </div>
  );
};

class UnitSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      filteredList: [],
      esper: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEsperChange = this.handleEsperChange.bind(this);
    this.resetSearchBar = this.resetSearchBar.bind(this);
  }

  // filterUnitList = () => {
  filterUnitList = (value) => {
    const { unitList } = this.props;
    const { filteredList } = this.state;
    // const { filteredList, value } = this.state;
    console.log("1 opening value: ", value);
    // filteredList.length = 0;
    this.setState(
      {
        filteredList: [],
      },
      function () {
        let tmpArray = [];
        // console.log(10, typeof unitList);
        if (value !== "") {
          // if searchbar isn't blank
          for (let key in unitList) {
            // console.log(33, key);
            // skip loop if the property is from prototype
            if (!unitList.hasOwnProperty(key)) continue;

            // var obj = unitList[key];
            // console.log(111, typeof unitList[key].sub_id);

            if (
              unitList[key].name.toLowerCase().includes(value.toLowerCase())
            ) {
              // console.log(unitList[key].sub_id);
              tmpArray.push(unitList[key]);
              this.setState({
                filteredList: tmpArray,
              });
              // console.log(true);
            }
          }
        }
        // console.log(11, tmpArray);
      }
    );
    console.log("filterUnitList: ", filteredList);
  };

  resetSearchBar(name, event) {
    console.log("reset searchbar");
    // this.setState({ value: "" }, function () {
    this.setState({ value: name }, function () {
      // this.filterUnitList();
      this.filterUnitList("");
    });
  }

  handleChange(event) {
    console.log("input changed");
    event.persist();
    this.setState({ value: event.target.value }, function () {
      // this.filterUnitList();
      this.filterUnitList(event.target.value);
    });
  }

  handleEsperChange(event) {
    //Do something
  }

  //SearchList is being rendered before state is set
  render() {
    return (
      <div className="unit-search-container">
        <div className="unit-search-wrapper">
          <input
            className="unit-search-box"
            type="text"
            // placeholder="Ex: Olive"
            placeholder="Select Unit"
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
        <div className="unit-search-esper-wrapper">
          <input
            className="unit-search-box-esper"
            type="text"
            placeholder="Select Esper"
            // onKeyUp={filterUnitList()}
            value={this.state.esper} //Specifies initial value
            onChange={this.handleEsperChange}
          />
        </div>

        {/* <button className="button-browse">Browse</button> */}
        {/* <button className="button-unequip-all">Unequip All</button> */}
        {/* <button className="button-optimize">Optimize</button> */}
      </div>
    );
  }
}

export default UnitSearch;
