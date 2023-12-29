// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Form from './components/formComp';

class Dialog extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

function NewDialog(){
  return (
    <Dialog title="Welcome!"></Dialog>
  )
}

function App() {
  return (
    <div className="App">
      <Form p={<p>Текст для абзаца</p>}>
        Текст для дочернего компонента
      </Form>

      {/* <Dialog title='New Header' text={ <p>Текст для абзаца</p> }></Dialog>
      { NewDialog() } */}
    </div>
  );
}

export default App;
