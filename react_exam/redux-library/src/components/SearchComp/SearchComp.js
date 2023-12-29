import React from "react";
import { connect } from "react-redux";
import { getSearchBooks } from "../../redux/actions";
import BookComp from "../BookComp/BookComp";

const SearchComp = ({ searchBooks, getSearchBooks }) => {
    

    return (
        <div>
            <h2>Найти книгу</h2>
            <input id="search-book" type="text"></input>
            <button id="search"  onClick={() => {
                let searchBook = document.querySelector('#search-book').value;
                getSearchBooks(searchBook);
            }}><i className="fa-solid fa-magnifying-glass"></i></button>

            <div className="search-result">
                {
                    searchBooks.map( (book, key) => {
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
        searchBooks : state.book.searchBook,
    }
}
  
const mapDispatchToProps = {
    getSearchBooks
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchComp);