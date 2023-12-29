import React from 'react';
import './BusketComp.css'

class BusketComp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            total: this.totalSum(),
        }
        
    }
    render(){
        
        return (
            <div className='busket'>
                <ul>
                    {this.props.busketProp.map((item, index) => {
                        return (
                            <li key={item.id} className='busket-item'>
                                <img src={item.img} alt={item.title} />
                                <h1>{item.title}</h1>
                                <p className='cost'>{item.cost}</p>

                                <p><b>{item.taken} шт</b></p>
                                <button onClick={(event)=> {
                                    event.preventDefault();
                                    this.props.increase(index);

                                    let totalSum = this.state.total;
                                    totalSum += parseInt(item.cost);

                                    this.setState({
                                        total: totalSum,
                                    });
                                }}>+</button>
                                <button onClick={(event)=> {
                                    event.preventDefault();
                                    this.props.decrease(index);

                                    let totalSum = this.state.total;
                                    totalSum -= parseInt(item.cost);

                                    this.setState({
                                        total: totalSum,
                                    });
                                }}>-</button>
                            </li>
                        )
                    })}
                </ul>

                <h2>Итого: {this.state.total} тг</h2>

                <button onClick={(ev)=>{
                                ev.preventDefault();
                                this.props.toPayComp();
                }}>Перейти к оплате</button>
            </div>
        )
    }

    totalSum = () => {
        let totalSum = 0;
        this.props.busketProp.forEach((item, index) => {
            let totalOneItem = item.taken * parseInt(item.cost);

            totalSum += totalOneItem;
        })
    
        return totalSum;
    }
}

export default BusketComp;