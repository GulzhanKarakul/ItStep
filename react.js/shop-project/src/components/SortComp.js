import React from 'react';
import './ShopList.css'

class Sort extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: props.parentState.shops,
            reverse: false,
        }
    };
    render() {
        return (
            <div className='Search'>
                <button onClick={() => {this.nameSort()}}>Сортировка по названию</button>
                <button onClick={() => {this.openingTimeSort()}}>Сортировка по времени открытия</button>
                <button>Сортировка по времени закрытия</button>
            </div>
        )
    };
    nameSort(){
        
        let ArrayOfNames=[];
        for(let shop of this.props.parentState.shops){
            ArrayOfNames.push(shop.name.toLowerCase());
        }
        ArrayOfNames.sort();
        if(this.state.reverse) ArrayOfNames.sort().reverse();

        let DataArray = [];
        for(let name of ArrayOfNames){
            for(let shop of this.props.parentState.shops){
                if(name === shop.name.toLowerCase()) DataArray.push(shop);
                else continue;
            }
        }
        this.setState({reverse: !this.state.reverse})

        this.props.updateListArray(DataArray);
    }
    openingTimeSort(){
        let ArrayOfTimes=[];
        for(let shop of this.props.parentState.shops){
            ArrayOfTimes.push(shop.openTime);
        }
        ArrayOfTimes.sort();

        let DataArray = [];
        for(let time of ArrayOfTimes){
            for(let shop of this.props.parentState.shops){
                if(time === shop.openTime) DataArray.push(shop);
                else continue;
            }
        }

        console.log(DataArray)

        this.props.updateListArray(DataArray);
    }
    closingTimeSort(){
        let ArrayOfTimes=[];
        for(let shop of this.props.parentState.shops){
            ArrayOfTimes.push(shop.closeTime);
        }
        ArrayOfTimes.sort();

        let DataArray = [];
        for(let time of ArrayOfTimes){
            for(let shop of this.props.parentState.shops){
                if(time === shop.closeTime) DataArray.push(shop);
                else continue;
            }
        }

        console.log(DataArray)

        this.props.updateListArray(DataArray);
    }
}

export default Sort;