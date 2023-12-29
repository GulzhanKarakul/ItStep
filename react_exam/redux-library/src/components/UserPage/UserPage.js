import React, {useState} from "react";
import { connect } from "react-redux";
import {  availableBook, 
    removeBook, 
    logOut, 
    logOutAdmin, 
    adminRemoveBook, 
    adminDeleteBook,
    addBook,
    adminAddBook,
    adminDeleteUser,
} from "../../redux/actions";
import './UserPage.css'
import LogInComp from "../LogInComp/LogInComp";
import BookComp from "../BookComp/BookComp";
// import CurrentUser from "./CurrentUser";
// import CurrentAdmin from "./CurrentAdmin";

const UserPage = ({ allBooks,
                    addedBook,
                    allUsers, 
                    curUser, 
                    curAdmin,
                    availableBook, 
                    removeBook, 
                    logOut, 
                    logOutAdmin, 
                    adminRemoveBook, 
                    adminDeleteBook,
                    addBook,
                    adminAddBook,
                    adminDeleteUser,
                    }) => {
    const [showBooks, setShowBooks] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showAddBook, setShowAddBook] = useState(false);
    const [showHOne, setShowHOne] = useState(false);
    const toggleBookList = () => {
        setShowBooks(!showBooks);
        setShowUsers(false);
        setShowAddBook(false);
        setShowHOne(false);
    };
    const toggleUserList = () => {
        setShowBooks(false);
        setShowUsers(!showUsers);
        setShowAddBook(false);
        setShowHOne(false);
    };
    const toggleBookAddForm = () => {
        setShowBooks(false);
        setShowUsers(false);
        setShowHOne(false);
        setShowAddBook(!showAddBook);
    };
    const toggleHOne= () => {
        setShowBooks(false);
        setShowUsers(false);
        setShowHOne(!showHOne);
        setShowAddBook(false);
    };

    return (
        <div id="books" className="vivod-container result active">
            <LogInComp></LogInComp>

            {
                curUser.length > 0 ? (
                    curUser.map((user, key) => (
                        <div className="user-profile" key={key}>
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
                                            <p className="red">Доступна</p>
                                            <button
                                                className="remove-button"
                                                id="btn"
                                                onClick={(ev) => {
                                                    ev.preventDefault();
                                                    removeBook(book.id);
                                                    availableBook({ id: book.id, data: { available: true, ownerId: null } });
                                                }}
                                            >
                                                Вернуть
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
                    ))
                ) : (
                    curAdmin.length > 0 ? (
                        curAdmin.map((admin, key) => (
                            
                            <div className="user-profile" key={key}>
                                <div className="user-name">Имя пользователя: {admin.fullName}</div>
                                <div className="user-age">РОЛЬ: {admin.role}</div>
                                <button
                                    className="logout-button"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        console.log('admin out')
                                        logOutAdmin()
                                    }}
                                >
                                    Выйти из учетной записи
                                </button >
                                <div className="for-buttons">
                                <button className={showBooks ? 'remove-button' : "add-button"} id="btn" onClick={toggleBookList}>
                                    {showBooks ? "Скрыть книги" : "Все книги"}
                                </button>
                                <button className={showUsers ? 'remove-button' : "add-button"} id="btn" onClick={toggleUserList}>
                                    {showUsers ? "Скрыть пользователей" : "Все пользователи"}
                                </button>
                                <button className={showAddBook ? 'remove-button' : "add-button"} id="btn" onClick={toggleBookAddForm}>
                                    {showAddBook ? "Скрыть Форму" : "Добавить книгу"}
                                </button>
                                </div>

                                {showBooks && (
                                    <div className="books-con">
                                        <h1>Все книги:</h1>
                                        <ol className="books-list">
                                        {allBooks.map((book, key) => (
                                            <li key={key}>
                                            <h1>{book.title}</h1>
                                            <p>Автор: {book.author}</p>
                                            <p className={book.available ? "green" : "red"}>
                                                {book.available ? "Доступна к прочтению" : "Недоступна"}
                                            </p>
                                            <button
                                                className={book.available ? "add-button" : "remove-button"}
                                                id="btn" onClick={ (ev) => {
                                                    if(book.available){
                                                        adminDeleteBook(book.id)
                                                    }else{
                                                        adminRemoveBook({bookID: book.id, userID: book.ownerId});
                                                        availableBook({ id: book.id, data: { available: true, ownerId: null } });
                                                    }
                                                } }
                                            >
                                                {book.available ? "Удалить" : "Вернуть"}
                                            </button>
                                            </li>
                                        ))}
                                        </ol>
                                    </div>
                                )}

                                {showUsers && (
                                    <div className="books-con">
                                        <h1>Все пользователи::</h1>
                                        <ol className="books-list">
                                        {allUsers.map((user, key) => (
                                            <li key={key}>
                                            <h1>{user.fullName}</h1>

                                            <button
                                                className= "remove-button"
                                                id="btn" onClick={ (ev)=> {
                                                    user.booksRead.map((book, key) => (
                                                        availableBook({ id: book.id, data: { available: true, ownerId: null } })
                                                    ));
                                                    adminDeleteUser(user.id);
                                                }}
                                            >
                                                Удалить пользователя
                                            </button>

                                            <ol className="books-list">
                                                {user.booksRead.map((book, key) => (
                                                    <li key={key}>
                                                        <h1>{book.title}</h1>
                                                        <p className="red">Доступна</p>
                                                        <button
                                                            className="remove-button"
                                                            id="btn"
                                                            onClick={(ev) => {
                                                                ev.preventDefault();
                                                                adminRemoveBook({bookID: book.id, userID: user.id});
                                                                availableBook({ id: book.id, data: { available: true, ownerId: null } });
                                                            }}
                                                        >
                                                            Вернуть
                                                        </button>
                                                    </li>
                                                ))}
                                            </ol>
                                            </li>
                                        ))}
                                        </ol>
                                    </div>
                                )}

                                {showAddBook && (
                                    <div className="books-con">
                                        <h1>Добавить книгу</h1>
                                        <form class="book-form">
                                            <label class="form-label" for="title">Название книги:</label>
                                            <input class="form-input" type="text" id="title" name="title" required />
                                            
                                            <label class="form-label" for="author">Автор:</label>
                                            <input class="form-input" type="text" id="author" name="author" required />
                                            
                                            <label class="form-label" for="description">Описание:</label>
                                            <textarea class="form-input" id="description" name="description" rows="4" required></textarea>
                                            
                                            <label class="form-label" for="image">URL изображения:</label>
                                            <input class="form-input" type="url" id="image" name="image" required />
                                            
                                            <button class="form-button" type="submit" onClick={(ev) => {
                                                ev.preventDefault();

                                                let title = document.querySelector('#title').value;
                                                let author = document.querySelector('#author').value;
                                                let description = document.querySelector('#description').value;
                                                let image = document.querySelector('#image').value;
                                                console.log({id: undefined, title: title, author: author, description: description, image: image, available: true, ownerId: null,})
                                                adminAddBook({id: undefined, title: title, author: author, description: description, image: image, available: true, ownerId: null,});

                                                toggleHOne();
                                            }}>Добавить книгу</button>
                                        </form>
                                    </div>
                                )}

                                {showHOne && (
                                    <div className="books-con">
                                        <h1>Вы добавили книгу!</h1>
                                        <BookComp book={addedBook}></BookComp>
                                    </div>
                                )}
                                
                                
                            </div>
                        ))
                    ) : (
                        
                        null 
                    )
                )
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        allBooks: state.book.books,
        addedBook: state.book.addedBook,
        allUsers: state.user.users,
        curUser: state.user.currentUser,
        curAdmin: state.user.currentAdmin,
    }
}
  
const mapDispatchToProps = {
    availableBook,
    removeBook, 
    logOut, 
    logOutAdmin, 
    adminRemoveBook, 
    adminDeleteBook,
    addBook,
    adminAddBook,
    adminDeleteUser,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);