import React from "react";
import { connect } from "react-redux";
import {  getSearchBooks } from "../../redux/actions";
import SearchComp from "../SearchComp/SearchComp";
import BookComp from "../BookComp/BookComp";


const MainPage = ({ allBooks, getSearchBooks }) => {

    return (
        <div id="books" className="vivod-container result active">
            <SearchComp></SearchComp>

            <h2>Книги в тренде!</h2>
            <div className="trend-books">
                {
                    allBooks.map( (book, key) => {
                        return (
                            <BookComp book={book} key={key}></BookComp>
                        )
                    })
                }
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        allBooks: state.book.books,
    }
}
  
const mapDispatchToProps = {
    getSearchBooks,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
