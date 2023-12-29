const movieReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            console.log(action.movieData);
            return 0;
        default: return state;
    }
}

export default movieReducer;