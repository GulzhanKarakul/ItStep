export const increment = () => ({
    type: "INCREMENT"
});
export const decrement = () => ({
    type: "DECREMENT"
});
// SET_USER
export const SET_USER = "SET_USER";
export function setUser(data) {
    return {
        type: SET_USER,
        data: data
    }
};
// Функция, отправляющая данные в редуктор
export function addMovieToStore(movieData) {
    return {
        type: "ADD_MOVIE",
        movieData
    }
}
// Функция, получающая данные с базы в интернете
export function getMovie(title) {
    return dispatch => {
        fetch('https://www.omdbapi.com/?apikey=a06e8fb3&t=' + title)
        .then(response => response.json())
        .then(json => dispatch( addMovieToStore(json) ));
    }
}