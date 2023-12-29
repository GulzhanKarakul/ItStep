import React from "react";
import { connect } from "react-redux";
import {   } from "../../redux/actions";
// import BookComp from "../BookComp/BookComp";

const CurrentUser = ({ admin }) => {
    return (
        <div className="user-profile">
                        <div className="user-name">Имя пользователя: {admin.fullName}</div>
                        <div className="user-age">РОЛЬ: {admin.role}</div>
                        <button
                            className="logout-button"
                            onClick={(ev) => {
                                ev.preventDefault();
                                console.log('admin out')
                            }}
                        >
                            Выйти из учетной записи
                        </button>
                    </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}
  
const mapDispatchToProps = {
    
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
