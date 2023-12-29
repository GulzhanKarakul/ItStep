import React from 'react';
import './ShopList.css';

class ShopList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list: props.parentState.shops,
        };
        this.renderShops = this.renderShops.bind(this);
    };
    
    renderShops() {
        let shopsToRender = this.props.parentState.findedShop.length !== 0
            ? this.props.parentState.findedShop
            : this.props.parentState.shops;
    
        return shopsToRender.map(shop => (
            <li className='shop' key={shop.id}>
                <h1>Название: {shop.name}</h1>
                <p>Время Открытия: {shop.openTime}</p>
                <p>Время Закрытия: {shop.closeTime}</p>
                <p>Расстояние: {shop.distance}</p>
                {this.special(shop)}
            </li>
        ));
    }
    
    render() {
        return (
            <div className='cont'>
                <ol className='list'>
                {this.renderShops()}
                </ol>
            </div>
        )

    }
    
    special = (shop)=> {
        if(shop.isSpecial === 1) {
            console.log(shop.isSpecial)
            return <p>Особенный!</p>
        }else {
            return <p>Обычный</p>
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         timer: setInterval(()=> {
    //             this.setState({date: new Date().toLocaleTimeString()})
    //             // if(this.state.i === (this.props.names.length)){
    //             //     this.setState({
    //             //         i: 0, 
    //             //     })
    //             // }else{
    //             //     this.setState({
    //             //         i: this.state.i++
    //             //     })
    //             // }
    //         }, 1000)  
    //     })
    // }
}

export default ShopList;