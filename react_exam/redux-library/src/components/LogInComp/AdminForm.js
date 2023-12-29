import React from "react";
import { connect } from "react-redux";
import {  logInAdmin, } from "../../redux/actions";

const AdminForm = ({ logInAdmin }) => {
    
    return (
        <div className="registr active">
            <h2>Войти в учетную запись администратора: </h2>
            <form action="" className="sign-up-form">
                <label for="username">Логин</label>
                <input className="sign-up-input" id="adminname" type="text" name="username"></input>
                <label for="password">Пароль</label>
                <input className="sign-up-input" id="passwordAdmin" type="text" name="password"></input>
            </form>
            <button className="btn" id="logInAdmin" onClick={(ev) => {
                ev.preventDefault();

                                    let username = document.querySelector('#adminname').value;
                    let password = document.querySelector('#passwordAdmin').value;
                    logInAdmin({ username: username, password: password});

                    let logInDivs = document.querySelector('.registr');
                    logInDivs.classList.remove('active');
                            }}>Войти</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}
  
const mapDispatchToProps = {
    logInAdmin, 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);
