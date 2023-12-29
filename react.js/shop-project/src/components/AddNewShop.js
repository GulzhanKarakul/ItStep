import React from 'react';
import './AddNewShop.css';

class AddNewShop extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            openTime: '',
            closeTime: '',
            distance: 0,
            isSpecial: false,
            };
        this.handleInputChange = this.handleInputChange.bind(this);
    };
    render() {
        return (
            <div className='cont2'>
                <h2>Добавьте магазин: </h2>
                <form  class='newShop'>
                    <div>
                    <label for="name">Название: </label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={this.handleInputChange} 
                        value={this.state.name}
                    ></input>
                    </div>
                    <div>
                    <label for="openTime">Время открытия: </label>
                    <input 
                        type="time" 
                        name="openTime" 
                        onChange={this.handleInputChange} 
                        value={this.state.openTime}
                    ></input>
                    </div>

                    <div>
                    <label for="closeTime">Время Закрытия: </label>
                    <input 
                        type="time" 
                        name="closeTime" 
                        onChange={this.handleInputChange} 
                        value={this.state.closeTime}
                    ></input>
                    </div>

                    <div>
                    <label for="distance">Расстояние: </label>
                    <input 
                        type="number" 
                        name="distance" 
                        onChange={this.handleInputChange} 
                        value={this.state.distance}
                    ></input>
                    </div>

                    <div>
                    <label for="isSpecial">Особенный: </label>
                    <input 
                        type="checkbox" 
                        name="isSpecial" 
                        onChange={this.handleInputChange} 
                        value={this.state.isSpecial}
                    ></input>
                        
                    </div>

                    <div>
                        <label ></label>
                        <input type="submit" onClick={this.addNew} value="Заполнить"></input>
                    </div>

                </form>
            </div>
        )

    }
    handleInputChange= (event)=>  {
        // event.preventDefault()
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
      }
    addNew=(event)=>{
        event.preventDefault()

        this.props.updateData(this.state);

        this.setState({
            name: '',
            openTime: '',
            closeTime: '',
            distance: 0,
            isSpecial: false,
        });
    }
}

export default AddNewShop;