import React from 'react';
import './ShopList.css'

class Find extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: props.parentState.shops,
        }
    };
    render() {
        return (
            <div className='Search'>
                <input type="text" onInput={(event)=> {this.findShop(event)}}></input>
            </div>
        )
    };
    findShop=(event)=> {
        let name = event.target.value;
        let resultArray=[];
        for(let shop of this.props.parentState.shops){
            let shopName = shop.name.toLowerCase();
            if(shopName.includes(name.toLowerCase())){
                resultArray.push(shop);
            }
        }

        if(resultArray.length !== 0) this.props.updateFindedShop(resultArray);
    }
}
export default Find;