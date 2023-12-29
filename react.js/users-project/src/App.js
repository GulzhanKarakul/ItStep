import React from 'react';
import "./App.css";
// connect-подключает к приложению APP данные из стора и методы из акшена
import { connect, useSelector } from 'react-redux'; 
// getUsers переносим чтобы явно подключить его к приложению
import { getUsers } from './redux/actions';
import UserComp from './components/UserComp';

const App = ({ getUsers }) => {
    getUsers();

    let users = useSelector((state) => state.users);

    return (
        <div className='App'>
            {
                users.map( (user, key) => {
                    return <UserComp user={user} key={key}></UserComp>
                })
            }
        </div>
    )
}
// mapStateToProps просматривает map - ом массив из данных в стэйте и 
// возвращает нужный, внесенный в оюъект
const mapStateToProps = state => {
    return {
      
    }
}
// mapDispatchToProps просматривает map - ом массив из экшенов и 
// возвращает нужный, внесенный в оюъект
const mapDispatchToProps = {
    getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);