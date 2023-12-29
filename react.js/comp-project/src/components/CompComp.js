import React from "react";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import './CompComp.css'

const ComputerComp = ({ }) => {
    let name = useSelector((state) => state.computer.name);
    let ip = useSelector((state) => state.computer.ip);
    let isOnline = useSelector((state) => state.computer.turn_on);

    return (
        <div className="computer-info">
        <h1>{name}</h1>
        <p>IP: {ip}</p>
        <p>{isOnline ? 'Включен' : 'Выключен'}</p>
      </div>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}
  
const mapDispatchToProps = {
    
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ComputerComp);