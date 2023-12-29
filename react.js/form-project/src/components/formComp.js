import React from 'react';
import './formComp.css';

class Form extends React.Component {
    constructor(){
        super()
        this.state= {
            input: '',
        }
    };
    MyStyles = {
        color: 'red',
    }
    render() {
        return (
            // <div className='Title' style={this.MyStyles}>
            //     <h1>{this.props.children}</h1>
            //     {this.props.p}
            // </div>
            <div>
                <label>Введите текст</label>
                <input 
                    type='text' 
                    onChange={(event)=>{this.handler(event)}}
                ></input>

                <h2> { this.state.input }</h2>
            </div>
        )
    }
    handler(event){
        const text =event.target.value
        console.log(event.target.value);
        this.setState({input: text})
    }
}

export default Form