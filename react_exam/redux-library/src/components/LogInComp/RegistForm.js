import React from "react";
import { connect } from "react-redux";
import { addUser, logIn, } from "../../redux/actions";

const RegistrForm = ({ addUser }) => {
        return (
        <div className="registr active">
            <form action="" className="sign-up-form">
                <label for="username">Логин</label>
                <input className="sign-up-input" id="newUserName" type="text" name="username"></input>
                <label for="password">Пароль</label>
                <input className="sign-up-input" id="newUserPassword" type="text" name="password"></input>
                <label for="name">Полное имя</label>
                <input className="sign-up-input" id="fullname" type="text" name="fullName"></input>
                <label for="addres">Возвраст</label>
                <input className="sign-up-input" id="age" type="number" name="addres"></input>
            </form>
            <button className="btn" id="registration"  onClick={(ev) => {
                                ev.preventDefault();
                                let username = document.querySelector('#newUserName').value;
                                let password = document.querySelector('#newUserPassword').value;
                                let fullName = document.querySelector('#fullname').value;
                                let age = document.querySelector('#age').value;
                                addUser({id: undefined, username: username, password: password, fullName: fullName, age: age, booksRead: []});

                                let logInDivs = document.querySelector('.registr');
                                logInDivs.classList.remove('active');
            }}>Зарегистрироваться</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}
  
const mapDispatchToProps = {
    addUser, logIn, 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RegistrForm);
