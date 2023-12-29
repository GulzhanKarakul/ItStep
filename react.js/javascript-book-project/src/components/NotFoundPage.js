import React from 'react';
import {
    Link,
} from 'react-router-dom';
import './NotFound.css'

class NotFoundPage extends React.Component {

    render(){

        return (
            <div class="error-container">
                <h1>404</h1>
                <p>Страница не найдена</p>
                <p>Извините, запрашиваемая вами страница не существует.</p>
                <p><Link to="/">Вернуться на главную страницу</Link></p>
            </div>
        )

    }
}

export default NotFoundPage;