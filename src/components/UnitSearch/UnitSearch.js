import React from "react";
import './UnitSearch.css';

// const UnitSearch = ({ onSearchChange, unitList }) => {
  

  const SearchList = ({ items }) => {
    console.log('SearchList: ', items);
    return (
      <ul>
        {
          items.map((item, i) => <li>{item}</li>) 
        }
      </ul>
    )
  } 



class UnitSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          filteredList: [],
      };
      this.handleChange = this.handleChange.bind(this);
    }

  // const SearchList = ({ items }) => {
  //   return (
  //     <ul>
  //       {
  //         items.map((item, i) => <li>{item}</li>) 
  //       }
  //     </ul>
  //   )
  // }

  filterUnitList = () => {
    const { unitList } = this.props;
    const { filteredList, value } = this.state;
    console.log('opening value: ', value);
    filteredList.length = 0; //Resets list
    // console.log('inside filter');

    if(value !== '')
    {
      for (var key in unitList) {
        // skip loop if the property is from prototype
        if (!unitList.hasOwnProperty(key)) continue;
    
        var obj = unitList[key];
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;
    
              if(prop === 'name') //------Change to check for textfield input
              {
                // console.log('Name: ', obj[prop]);
                if(obj[prop].toLowerCase().includes(value.toLowerCase()))
                {
                  filteredList.push(obj[prop]);
                }
                  // console.log('inside if: ', filteredList);
                  // console.log('obj[prop]: ', obj[prop]);
                  // console.log('value: ', value);
                  // console.log('typeof obj[prop]: ', typeof obj[prop]);
                  // console.log('typeof value: ', value);
              }
                // alert(obj[prop]);
        }
      }
    }
    console.log('filterUnitList: ', filteredList);
  };

  handleChange(event) {
    console.log('backspace');
    // console.log('handleChange 1 value: ', this.state.value);
    // this.setState({value: event.target.value});
    // this.setState({value: event.target.value}, this.filterUnitList());
    this.setState({value: event.target.value}, function(){
      // console.log('inside: ', this.state.value);
      this.filterUnitList();
      // SearchList(this.state.filteredList);
    });
    console.log('handleChange 2 value: ', this.state.value);
    // console.log('handleChange eventvalue: ', event.target.value);

    // this.filterUnitList();
  }


  //SearchList is being rendered before state is set
  render(){
    return (
      <div>
        <div className="search-container">
          <input
            className='search-box'
            type="text"
            placeholder="Ex: Olive"
            // onKeyUp={filterUnitList()}
            value = {this.state.value}
            onChange={this.handleChange}
            
            
          />
          <button className='button-browse'>Browse</button>
          <SearchList items={this.state.filteredList}> </SearchList>
        </div>
      </div>
    );
  }
}

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