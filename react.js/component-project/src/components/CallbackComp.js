import React from 'react';

class CallbackComp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            num: 0, 
        };
    };
    render() {
        return (
            <div>
                <button onClick={()=> {
                    this.setState({num: ++this.state.num});
                    console.log('CallbackComp '+ this.state.num);
                    this.props.updateData(this.state.num)
                    }}>Increase</button>
            </div>
        )
    }
    componentDidMount(){
        this.setState({

        })
    }
}

CallbackComp.defaultProps= {name: 'UserName'}

export default CallbackComp;