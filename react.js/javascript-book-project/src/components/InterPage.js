import React from 'react';
// import {
//     BrowserRouter as Router,
//     NavLink,
//     Route,
//     Link,
//     Routes,
// } from 'react-router-dom';

import './InterPage.css'


class InterPage extends React.Component {

    render(){

        return (

                <div class="login-container">
                    <h2>Вход на сайт</h2>
                    <form class="login-form" action="обработчик.php" method="post">
                        <div class="form-group">
                            <label for="username">Имя пользователя:</label>
                            <input type="text" id="username" name="username" required></input>
                        </div>
                        <div class="form-group">
                            <label for="password">Пароль:</label>
                            <input type="password" id="password" name="password" required></input>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Войти"></input>
                        </div>
                    </form>
                </div>
        )

    }
}

export default InterPage;