import React from "react";
import './UnitSearch.css';

  const SearchList = ({ items, onUnitSelection, resetSearchBar }) => {
    // console.log('10: ', items);
    // console.log('11: ', onUnitSelection);
    return ( //changed ul > div
        <div className='search-list-container'>
          {
            // items.map((item, i) => <li onClick={myFunction.bind(this, item)}>{item}</li>) 
            items.map((item, i) => 
              <li 
                className='search-list-item'
                // onClick={onUnitSelection.bind(this, item)}>{item}
                onClick={(e) => {
                  onUnitSelection(item, e);
                  resetSearchBar(e);
                }}>{item}

              </li>) 
          }
        </div>
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
      this.resetSearchBar = this.resetSearchBar.bind(this);
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

  // createList = ({ items }) => {
  //   console.log('SearchList: ', items);
  //   return (
  //     <ul>
  //       {
  //         items.map((item, i) => <li>{item}</li>) 
  //       }
  //     </ul>
  //   )
  // } 

  onUnitSelect = (unitName) => { // Triggers when an item on searchlist is clicked

  };

  filterUnitList = () => {
    const { unitList } = this.props;
    const { filteredList, value } = this.state;
    console.log('1 opening value: ', value);
    // filteredList.length = 0; 
    this.setState({
      filteredList: []
    }, function() {
      
      let tmpArray = [];

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
                    console.log('1 obj', obj[prop]);
                    // filteredList.push(obj[prop]);
                    // console.log('type: ', obj[prop]);

                    //Doesn't rely on using prop to directly modify state
                    //Works
                    tmpArray.push(obj[prop]); 
                    this.setState({
                      filteredList: tmpArray
                    })
  
                    //closest to working
                    // this.setState({
                    //   filteredList: [...this.state.filteredList, obj[prop]]
                    // }, function(){
                    //   console.log('2 obj:', obj[prop]);
                    //   console.log('3 obj:', obj[prop]);
                    //   console.log('push: ', this.state.filteredList);
                    // })

                    // this.setState( prevState=> ({
                    //   filteredList: [...this.state.filteredList, obj[prop]]
                    // }, function(){
                    //   console.log('push: ', this.state.filteredList);
                    // }));

                    // this.setState(state => {
                    //   const filteredList = state.filteredList.concat(state.obj[prop]);

                    //   return {
                    //     filteredList,
                        
                    //   };
                    // });

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

    });
    // console.log('inside filter');
    // console.log('unitList prop: ', unitList);


    console.log('filterUnitList: ', filteredList);
    // createList(filteredList);
  };

  resetSearchBar(event) {
    console.log('reset searchbar');
    this.setState({value: ''}, function(){
      this.filterUnitList();
    });
    // this.refs.someName.value = '';
  }

  handleChange(event) {
    console.log('input changed');
    // console.log('handleChange 1 value: ', this.state.value);
    // this.setState({value: event.target.value});
    // this.setState({value: event.target.value}, this.filterUnitList());
    this.setState({value: event.target.value}, function(){
      // console.log('inside: ', this.state.value);
      this.filterUnitList();
      // SearchList(this.state.filteredList);
    });
    // console.log('input changed end: ', this.state.value);
    // console.log('handleChange eventvalue: ', event.target.value);

    // this.filterUnitList();
  }


  //SearchList is being rendered before state is set
  render(){
    // console.log('props', this.props.onUnitSelection);
    // console.log('filtered: ', this.state.filteredList);
    return (
      <div>
        <div className="unit-search-container">
          <input
            className='unit-search-box'
            type="text"
            placeholder="Ex: Olive"
            // onKeyUp={filterUnitList()}
            value = {this.state.value} //Specifies initial value
            onChange={this.handleChange}
            // ref='someName' //was using to reset text field, prob unnecessary
          />
          <SearchList 
            items={this.state.filteredList}
            onUnitSelection={this.props.onUnitSelection} 
            resetSearchBar={this.resetSearchBar}
            >
          </SearchList>
        </div>
        <button className='button-browse'>Browse</button>
      </div>
    );
  }
}

export default UnitSearch;