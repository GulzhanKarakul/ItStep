import React from "react";
import { connect } from "react-redux";
import {  availableBook, removeBook, logOut , } from "../../redux/actions";
// import BookComp from "../BookComp/BookComp";

const CurrentUser = ({ user, availableBook, removeBook, logOut  }) => {
    
    return (
        <div className="user-profile">
                        <div className="user-name">Имя пользователя: {user.fullName}</div>
                        <div className="user-age">Возраст: {user.age}</div>
                        {
                            user.booksRead.length > 0 ? (
                                user.booksRead.map((book, key) => (
                                    <div className="book-container" key={key}>
                                        <img src={book.image} alt="Book Cover" />
                                        <div className="book-details">
                                            <h1>{book.title}</h1>
                                            <p>Автор: {book.author}</p>
                                            <p className="red">Недоступна</p>
                                            <button
                                                className="remove-button"
                                                id="btn"
                                                onClick={(ev) => {
                                                    ev.preventDefault();
                                                    removeBook(book.id);
                                                    availableBook({ id: book.id, data: { available: true, ownerId: null } });
                                                }}
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                
                                null 
                            )
                        }
                        <button
                            className="logout-button"
                            onClick={(ev) => {
                                ev.preventDefault();
                                logOut();
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
    availableBook, removeBook, logOut , 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
