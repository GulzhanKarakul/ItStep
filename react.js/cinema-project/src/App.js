import React from 'react';
import "./App.css";
import { connect } from 'react-redux'; 
import { useSelector } from 'react-redux';
import { setUser } from './redux/actions';
import MovieComp from './components/MovieComp/MovieComp';

const App = ({ setUser }) => {

  let user = useSelector((state) => state.user);

  return (
    <div>
      <h1>{ user.data }</h1>
      <input type='text' id="name"></input>
      <button type="button" onClick={() => {
        let input = document.querySelector('input').value;
        setUser(input);
        console.log(user)
      }}>Отправить</button>

      <MovieComp></MovieComp>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = {
    setUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);