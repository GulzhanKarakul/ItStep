import React from 'react';
import './FormComp.css';

class FormComp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            header: '',
            writingTime: '',
            text: '',
            show: true,
            };
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.showReview= this.showReview.bind(this);
    };
    render() {
        return (
            <div className='cont2'>
                <h2>Добавьте Запись: </h2>
                <form  class='newPost'>

                    <label for="header">Заголовок: </label>
                    <p>{this.state.header}</p>
                    <input 
                        type="text" 
                        name="header" 
                        onChange={this.handleInputChange} 
                        value={this.state.header}
                    ></input>

                    <label for="writingTime">Дата публикации: </label>
                    <p>{this.state.writingTime}</p>
                    <input 
                        type="datetime-local" 
                        name="writingTime" 
                        onChange={this.handleInputChange} 
                        value={this.state.writingTime}
                    ></input>

                    <label for="text">Текст публикации: </label>
                    <p>{this.state.text}</p>
                    <textarea  
                        name="text" 
                        onChange={this.handleInputChange} 
                        value={this.state.text}
                    ></textarea >


                    <input type="submit" onClick={this.addNew} value="Добавить запись"></input>
                    <input type="submit" onClick={this.showReview} value="Предварительный просмотр"></input>

                </form>
            </div>
        )

    }
    handleInputChange= (event)=>  {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
      }
    addNew=(event)=>{
        event.preventDefault()

        this.props.updateData(this.state);

        this.setState({
            header: '',
            writingTime: '',
            text: 0,
            show: true,
        });
    }
    showReview=(event)=> {
        event.preventDefault();
        this.setState({
            show: !this.state.show,
        })
        if(this.state.show) this.props.updateReviewData(this.state);
        else this.props.deleteData();
    }
}

export default FormComp;