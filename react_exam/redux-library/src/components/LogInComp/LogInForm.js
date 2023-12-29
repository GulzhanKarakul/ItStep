import React from "react";
import { connect } from "react-redux";
import {  logIn, } from "../../redux/actions";

const RegistrForm = ({ logIn }) => {
    return (
        <div className="registr logIn active">
            <form action="" className="sign-up-form">
                <label for="username">Логин</label>
                <input className="sign-up-input" id="username" type="text" name="username"></input>
                <label for="password">Пароль</label>
                <input className="sign-up-input" id="passwordUser" type="text" name="password"></input>
            </form>

            <button className="btn" id="login" onClick={(ev) => {

                ev.preventDefault();

                let username = document.querySelector('#username').value;
                let password = document.querySelector('#passwordUser').value;
                logIn({ username: username, password: password});

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
    logIn, 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RegistrForm);
