import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";
import LogInForm from './LogInForm';
import RegistrForm from './RegistForm';
import AdminForm from './AdminForm';

const LogInComp = () => {
    let curUser = useSelector(state => state.user.currentUser);
    const [content, setContent] = useState(null);

    return (
        <div id="readers" className="reader-view result">
            <div className="for-buttons">
                <button className="btn" id="enter" onClick={(ev) => {
                    ev.preventDefault();
                    if(curUser.length === 0) setContent(<LogInForm />);
                }}>Войти</button>

                <button className="btn" id="registr" onClick={(ev) => {
                    ev.preventDefault();
                    if(curUser.length === 0) setContent(<RegistrForm />);
                }}>Зарегистрироваться</button>

                <button className="btn" id="admin" onClick={(ev) => {
                    ev.preventDefault();
                    if(curUser.length === 0) setContent(<AdminForm />);
                }}>Админ</button>
            </div>

            <div className="read-result">
                {content}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {

    }
}
  
const mapDispatchToProps = {
    
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LogInComp);