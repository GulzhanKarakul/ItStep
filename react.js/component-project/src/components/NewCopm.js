import React from 'react';

class NewComp extends React.Component {
    constructor(){
        super();
        this.state={ i: 0};
    };
    render() {
        return (
            <div>
                {/* <p>{ this.props.names[this.state.i] }</p> */}
                <p>{this.state.date}</p>
            </div>
        )

    }
    componentDidMount(){
        this.setState({
            timer: setInterval(()=> {
                this.setState({date: new Date().toLocaleTimeString()})
                // if(this.state.i === (this.props.names.length)){
                //     this.setState({
                //         i: 0, 
                //     })
                // }else{
                //     this.setState({
                //         i: this.state.i++
                //     })
                // }
            }, 1000)  
        })
    }
    // componentWillUnmount(){
    //     this.cleanState(this.state.timer)
    // }

}

NewComp.defaultProps= {name: 'UserName'}

export default NewComp;