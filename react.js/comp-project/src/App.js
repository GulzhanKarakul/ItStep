import React from 'react';
import "./App.css";
import { connect } from 'react-redux'; 
import { setName, setIp, toggleSwitch } from './redux/actions';
import ComputerComp from './components/CompComp';

const App = ({ name, ip, isOnline, setName, setIp, toggleSwitch }) => {

  return (
    <div>
      <div>
        <form >
          <div>
            <label htmlFor="newName">Новое имя компьютера:</label>
            <input type="text" id="newName" name="newName" onChange={() => {
                let input = document.querySelector('#newName').value;
                setName(input);
                console.log(name)
              }} />
          </div>
          <div>
            <label htmlFor="newIp">Новый IP адрес:</label>
            <input type="text" id="newIp" name="newIp" onChange={() => {
                let input = document.querySelector('#newIp').value;
                setIp(input);
                console.log(ip)
              }} />
          </div>
          <button type="submit">Обновить</button>
        </form>
        <div>
          <p>Состояние: {isOnline ? 'Включен' : 'Выключен'}</p>
          <button type="button" onClick={toggleSwitch}>
            {isOnline ? 'Выключить' : 'Включить'}
          </button>
        </div>
      </div>

      <ComputerComp></ComputerComp>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        name: state.computer.name,
        ip: state.computer.ip,
        isOnline: state.computer.turn_on,
    }
}

const mapDispatchToProps = {
  setName, setIp, toggleSwitch
}

export default connect(mapStateToProps, mapDispatchToProps)(App);