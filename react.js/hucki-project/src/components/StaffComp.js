import React from 'react';
import './StaffComp.css'

class StaffComp extends React.Component{
    render(){
        return (
            <div className='staff'>
                <ul>
                    {this.props.staffProp.map(item => {
                        return (
                            <li key={item.id} className='staff-item'>
                                <img src={item.img} alt={item.title} />
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p className='cost'>{item.cost}</p>
                                <button onClick={(event) => this.addToBusket(event, item.id)}>Добавить в корзину</button>
                            </li>
                        )
                    })}
                </ul>
            </div>

        )
    };

    addToBusket = (ev, id) => {
        ev.preventDefault();
        this.props.updateData(id);
    }
}

export default StaffComp;