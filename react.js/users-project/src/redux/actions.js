// Функция, отправляющая данные в редуктор
export function addUsersToStore(usersData) {
    return {
        type: "ADD_USERS",
        usersData,
    }
}
// Функция, получающая данные с базы в интернете
export function getUsers() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(json => dispatch( addUsersToStore(json) ));
    }
}