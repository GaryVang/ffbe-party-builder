import React from "react";
import "./UnitSearch.css";

const SearchList = ({ items, onUnitSelection, resetSearchBar }) => {
  return (
    <div className="search-list-container">
      {items.map((item, i) => (
        <li
          key={item.sub_id}
          className="search-list-item"
          onClick={(e) => {
            onUnitSelection(item.sub_id, e);
            resetSearchBar(item.name, e);
          }}
        >
          {item.name}
        </li>
      ))}
    </div>
  );
};

const EsperList =({ espers, onEsperSelection, resetEsperSearchBar }) => {
  return (
    <div className="search-list-container">
      {espers.map((item, i) => (
        <li
          // key={item.sub_id}
          key={item}
          className="search-list-item"
          onClick={(e) => {
            // onUnitSelection(item.sub_id, e);
            // resetEsperSearchBar(item.name, e);
            // console.log("nooooo");
            resetEsperSearchBar(item, e);
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
      value: this.props.defaultValue,
      filteredList: [],
      esper: "",
      esperList: ["Ifrit", "Ramuh", "Shiva"],
      esperFocus: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEsperChange = this.handleEsperChange.bind(this);
    this.resetSearchBar = this.resetSearchBar.bind(this);
    this.handleEsperFocus = this.handleEsperFocus.bind(this);
    this.handleEsperBlur = this.handleEsperBlur.bind(this);
    this.resetEsperSearchBar = this.resetEsperSearchBar.bind(this);
  }

  filterUnitList = (value) => {
    const { unitList } = this.props;

    this.setState(
      {
        filteredList: [],
      },
      function () {
        let tmpArray = [];
        if (value !== "") {
          for (let key in unitList) {
            if (!unitList.hasOwnProperty(key)) continue;
            if (
              unitList[key].name.toLowerCase().includes(value.toLowerCase())
            ) {
              tmpArray.push(unitList[key]);
              this.setState({
                filteredList: tmpArray,
              });
            }
          }
        }
      }
    );
  };

  resetSearchBar(name, event) {
    this.setState({ value: name }, function () {
      this.filterUnitList("");
    });
  }

  resetEsperSearchBar(name, event) {
    // console.log(name);
    console.log(111111);
    this.setState({ esper: name });
  }

  handleChange(event) {
    event.persist();
    this.setState({ value: event.target.value }, function () {
      this.filterUnitList(event.target.value);
    });
  }

  handleEsperChange(event) {
    event.persist();
    this.setState({ esper: event.target.value }, function () {});
  }

  handleEsperFocus(event) {
    // event.persist();
    this.setState({ esperFocus: true });
    // console.log("esper focus");
  }

  handleEsperBlur(event) {
    // event.persist();
    this.setState({ esperFocus: false })
  }

  render() {
    return (
      <div className="unit-search-container">
        <div className="unit-search-wrapper">
          <input
            className="unit-search-box"
            type="text"
            placeholder="Search Unit"
            value={this.state.value} //Specifies initial value
            onChange={this.handleChange}
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
            value={this.state.esper} //Specifies initial value
            onChange={this.handleEsperChange}
            onFocus={this.handleEsperFocus}
            onBlur={this.handleEsperBlur} //Problem: cannot trigger onClick event on list
          />
          {this.state.esperFocus ? 
            // <div>Hello</div> 
            <EsperList
              espers={this.state.esperList}
              resetEsperSearchBar={this.resetEsperSearchBar}
            ></EsperList>
            : null
          }
        </div>
      </div>
    );
  }
}

export default UnitSearch;
