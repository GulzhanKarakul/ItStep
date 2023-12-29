// // Функция, отправляющая данные трендовые книги в редуктор
// export function addSearchBookToStore(searchBookData) {
//     return {
//         type: "ADD_SEARCH_BOOK",
//         searchBookData
//     }
// }

// Функция - поиск
const ADD_SEARCH_BOOK = 'ADD_SEARCH_BOOK';
export function getSearchBooks(title) {
    return {
        type: ADD_SEARCH_BOOK,
        title
    }
}

// Функция, добавления к чтению книги
const BOOK_AVAILABLE = 'BOOK_AVAILABLE';
export function availableBook(data) {
    return {
        type: BOOK_AVAILABLE,
        data
    }
}

// ADD_USER
export const ADD_USER = "ADD_USER";
export function addUser(data) {
    return {
        type: ADD_USER,
        newUserData: data
    }
};

// LOG_IN
export const LOG_IN = "LOG_IN";
export function logIn(data) {
    return {
        type: LOG_IN,
        userData: data
    }
};

// LOG_IN_ADMIN
export const LOG_IN_ADMIN = "LOG_IN_ADMIN";
export function logInAdmin(data) {
    return {
        type: LOG_IN_ADMIN,
        adminData: data
    }
};

// LOG_OUT_ADMIN
export const LOG_OUT_ADMIN = "LOG_OUT_ADMIN";
export function logOutAdmin() {
    return {
        type: LOG_OUT_ADMIN,
    }
};

// ADD_BOOK_TO_USER
export const ADD_BOOK_TO_USER = "ADD_BOOK_TO_USER";
export function addBook(data) {
    return {
        type: ADD_BOOK_TO_USER,
        book: data
    }
};

// REMOVE_BOOK_FROM_USER
export const REMOVE_BOOK_FROM_USER = "REMOVE_BOOK_FROM_USER";
export function removeBook(data) {
    return {
        type: REMOVE_BOOK_FROM_USER,
        bookId: data
    }
};

// LOG_OUT
export const LOG_OUT = "LOG_OUT";
export function logOut() {
    return {
        type: LOG_OUT,
    }
};

// ADMIN_REMOVE_BOOK
export const ADMIN_REMOVE_BOOK = "ADMIN_REMOVE_BOOK";
export function adminRemoveBook(data) {
    return {
        type: ADMIN_REMOVE_BOOK,
        data: data
    }
};

// ADMIN_DELETE_BOOK
export const ADMIN_DELETE_BOOK = "ADMIN_DELETE_BOOK";
export function adminDeleteBook(data) {
    return {
        type: ADMIN_DELETE_BOOK,
        bookID: data
    }
};

// ADMIN_ADD_BOOK
export const ADMIN_ADD_BOOK = "ADMIN_ADD_BOOK";
export function adminAddBook(data) {
    return {
        type: ADMIN_ADD_BOOK,
        newBook: data
    }
};

// ADMIN_DELETE_USER
export const ADMIN_DELETE_USER = "ADMIN_DELETE_USER";
export function adminDeleteUser(data) {
    return {
        type: ADMIN_DELETE_USER,
        userID: data
    }
};