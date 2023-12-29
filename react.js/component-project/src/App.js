import React from 'react';
import './App.css';
// import NewComp from './components/NewCopm';
import CallbackComp from './components/CallbackComp';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      num: 0,
    }
  }

  updateData = (value) => {
    this.setState({
      num: value
    })
  }

  render(){
    return (
      <div>
        <button onClick={() => {console.log('AppComponent ' + this.state.num)}}>Click</button>
        <CallbackComp updateData={this.updateData} ></CallbackComp>
      </div>
    );
  }
}

export default App;
