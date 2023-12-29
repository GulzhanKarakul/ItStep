import React, { useState }  from "react";
import { connect} from "react-redux"; // Импортируем connect из react-redux
import { availableBook, removeBook, addBook, } from '../../redux/actions';
import './BookComp.css'

const BookComp = ({ book, curUser, availableBook, removeBook, addBook, }) => {
    const [content, setContent] = useState(null);
    const handleAvailableClick = () => {
        if(curUser.length>0){
            if(book.ownerId === null) {
                addBook(book);
                availableBook({id: book.id, data: {available: false, ownerId: curUser[0].id}});
            }
            else if(book.ownerId === curUser[0].id) {
                removeBook(book.id);
                availableBook({id: book.id, data: {available: true, ownerId: null}});
            }
            setContent(null);
        }
        else setContent('Войдите в учетную запись');
    };

    return (
        <div className="book-container">
            <img src={book.image} alt="Book Cover"></img>
            <div className="book-details">
                <h1>{book.title}</h1>
                <p>Автор: {book.author}</p>
                <p className={book.available ? 'green' : 'red'}>{book.available ? 'Доступна к прочтению' : 'Недоступна'}</p>
                <button className={book.available ? 'add-button' : 'remove-button'} id="btn" onClick={handleAvailableClick}>{book.available ? 'Взять' : 'Вернуть'}</button>
                <p>{content}</p>
            </div>
        </div>
    )
}
  
const mapStateToProps = state => {
    return {
        curUser: state.user.currentUser,
    }
}
  
const mapDispatchToProps = {
    availableBook, removeBook, addBook,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BookComp); // Подключаем компонент к Redux store
