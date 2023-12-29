import React from 'react';
import './App.css';
import AddNewShop from './components/AddNewShop';
import ShopList from './components/ShopsList';
import Sort from './components/SortComp'
import Find from './components/FindComp';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      shops: [
        {
          name: 'Magnum',
          openTime: '08:00',
          closeTime: '00:00',
          distance: 20,
          isSpecial: 1,
        },
        {
          name: 'GalMart',
          openTime: '10:00',
          closeTime: '23:00',
          distance: 10,
          isSpecial: 0,
        },
      ],
      findedShop: [],
    }
    this.updateData = this.updateData.bind(this);
    this.updateListArray = this.updateListArray.bind(this);
    this.updateFindedShop = this.updateFindedShop.bind(this);
  }

  updateListArray=(list)=>{
    console.log(this.state.shops)
    console.log(list)
    this.setState({
      shops: list,
    })
  }

  updateData = (shop) => {
    console.log(this.state.shops)
    const newShopsArr = [...this.state.shops, shop];
    this.setState({
      shops: newShopsArr,
    })
  };

  updateFindedShop = (shopArray) => {
    // console.log(this.state.shops)
    const newShopsArr = [];
    for(let s of shopArray){
      newShopsArr.push(s)
    }
    this.setState({
      findedShop: newShopsArr,
    })
  }

  render(){
    return (
      <div>
        <AddNewShop updateData={this.updateData}></AddNewShop>
        <Sort parentState={this.state} updateListArray={this.updateListArray}></Sort>
        <Find parentState={this.state} updateFindedShop={this.updateFindedShop}></Find>
        <ShopList parentState={this.state}></ShopList>
      </div>
    );
  }
}

export default App;