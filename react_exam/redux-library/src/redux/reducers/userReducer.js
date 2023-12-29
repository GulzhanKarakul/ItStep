const users = [
    {
        id: 1,
        username: "user1",
        password: "password1",
        fullName: "Иванов Иван",
        age: 30,
        booksRead: [{
            id: 9,
            title: "Маленький принц",
            author: "Антуан де Сент-Экзюпери",
            description: "Философская сказка о путешествии маленького принца по разным планетам.",
            image: "https://nukadeti.ru/content/images/essence/tale/5506/84.jpg",
            available: false,
            ownerId: 1,
        },
        {
            id: 10,
            title: "О дивный новый мир",
            author: "Олдос Хаксли",
            description: "Антиутопический роман о будущем обществе, где счастье достигается за счет потери свободы.",
            image: "https://simg.marwin.kz/media/catalog/product/c/o/haksli_o_o_divnyy_novyy_mir_4.jpg",
            available: false,
            ownerId: 1,
        }
        ]
    },
    {
        id: 2,
        username: "user2",
        password: "password2",
        fullName: "Петров Петр",
        age: 25,
        booksRead: [{
            id: 7,
            title: "Властелин колец: Братство кольца",
            author: "Дж. Р. Р. Толкин",
            description: "Первая книга из трилогии о приключениях Фродо Бэггинса и его друзей в Средиземье.",
            image: "https://img1.labirint.ru/rcimg/6dfe22ba33b2f5beb3ca5f69c0e4769e/960x540/books43/422375/ph_4.jpg?1563740796",
            available: false,
            ownerId: 2,
        },
        {
            id: 8,
            title: "Три товарища",
            author: "Эрих Мария Ремарк",
            description: "Роман о дружбе трех друзей после Первой мировой войны и их поисках смысла жизни.",
            image: "https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/c/o/cover1_15_4.jpg",
            available: false,
            ownerId: 2,
        },
        ]
    },
    {
        id: 3,
        username: "user3",
        password: "password3",
        fullName: "Сидорова Мария",
        age: 28,
        booksRead: [
            {
                id: 2,
                title: "Преступление и наказание",
                author: "Фёдор Достоевский",
                description: "Рассказ о молодом студенте, который совершил преступление и пытается оправдаться перед собой и обществом.",
                image: "https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/c/o/dostoevskiy_f_m_prestuplenie_i_nakazanie_4.jpg",
                available: false,
                ownerId: 3,
            },
            {
                id: 3,
                title: "Гарри Поттер и философский камень",
                author: "Джоан Роулинг",
                description: "Первая книга о приключениях молодого волшебника Гарри Поттера.",
                image: "https://vitamir.kz/upload/iblock/47e/cvyg2f852opnzd5v8fgtfuhh5ndrehq5.jpeg",
                available: false,
                ownerId: 3,
            },
        ]
    }
];

const admin = [{
    id: 1,
    username: "admin",
    password: "adminpassword",
    fullName: "Администратор Библиотеки",
    role: "admin"
}];


const userReducer = (state = { users: users, admins: admin, currentUser: [], currentAdmin: [] }, action) => {
    let result, updatedCurrentUser;
  
    switch (action.type) {
        case "ADD_USER":
            action.newUserData.id = state.users[state.users.length -1].id + 1;
            console.log(action.newUserData);
            state.users.push(action.newUserData)
            result = state.users.filter(user => {
                return user.username === action.newUserData.username &&  user.password === action.newUserData.password;
            });
            return { ...state, users: state.users, currentUser: result};

        case "LOG_IN":
            result = state.users.filter(user => {
                return user.username === action.userData.username &&  user.password === action.userData.password;
            });
        return { ...state, currentUser: result};

        case "LOG_OUT":
            state.users.forEach(user => {
                if(user.username === state.currentUser[0].username 
                    &&  user.password === state.currentUser[0].password){
                        user = state.currentUser[0];
                }
            }); 
        return { ...state, currentUser: []};

        case "LOG_IN_ADMIN":
            result = state.admins.filter(admin => {
                return admin.username === action.adminData.username &&  admin.password === action.adminData.password;
            });
            return { ...state, currentAdmin: result};

        case "LOG_OUT_ADMIN":
            return { ...state, currentAdmin: []};

        case "ADD_BOOK_TO_USER":
            action.book.ownerId = state.currentUser[0].id;
            updatedCurrentUser = state.currentUser[0];
            updatedCurrentUser.booksRead.push(action.book) 
            return {
                ...state,
                currentUser: [updatedCurrentUser]
            };
        
        case "REMOVE_BOOK_FROM_USER":              
            updatedCurrentUser = state.currentUser[0]; 
            updatedCurrentUser.booksRead = updatedCurrentUser.booksRead.filter(book => {
                return book.id !== action.bookId
            });
            return {
                ...state,
                currentUser: [updatedCurrentUser]
            };

        case "ADMIN_REMOVE_BOOK":
            let updatedUsers = state.users.map(user => {
                if (user.id === action.data.userID) {
                    const updatedBooksRead = user.booksRead.filter(book => book.id !== action.data.bookID);
                    return {
                        ...user,
                        booksRead: updatedBooksRead,
                    };
                }else return user;
            });
            return {
                ...state,
                users: updatedUsers,
            };

        case "ADMIN_DELETE_USER":
            let updatedUsersArr = state.users.filter(user => {
                return user.id !== action.userID
            });
            return {
                ...state,
                users: updatedUsersArr,
            };

        default: return state;
    }
}

export default userReducer;