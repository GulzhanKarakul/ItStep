import React from "react";
import { connect } from "react-redux";
import { getMovie } from "../../redux/actions";

const MovieComp = ({ getMovie }) => {
    return (
        <div>
            <h1>Поиск фильма</h1>
            <input type="text" id="movie"></input>
            <button onClick={() => {
                let movie = document.querySelector('#movie').value;
                getMovie(movie);
            }}>Поиск</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      
    }
  }
  
  const mapDispatchToProps = {
      getMovie
    }
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieComp);