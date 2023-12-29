const books = [
    {
        id: 1,
        title: "Война и мир",
        author: "Лев Толстой",
        description: "Эпический роман о судьбах русского общества во времена войн с Наполеоном.",
        image: "https://cdn.culture.ru/c/365442.jpg",
        available: true,
        ownerId: null,
    },
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
    {
        id: 4,
        title: "1984",
        author: "Джордж Оруэлл",
        description: "Антиутопический роман о мире, где правительство контролирует все сферы жизни и уничтожает индивидуальность.",
        image: "https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/f/u/fullimage_18_123.jpg",
        available: true,
        ownerId: null,
    },
    {
        id: 5,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        description: "Фантастический роман о встрече дьявола и писателя в Москве.",
        image: "https://simg.marwin.kz/media/catalog/product/c/o/cover1_38_215.jpg",
        available: true,
        ownerId: null,
    },
    {
        id: 6,
        title: "Анна Каренина",
        author: "Лев Толстой",
        description: "Роман о несчастной любви Анны Карениной и ее трагической судьбе.",
        image: "https://cv0.litres.ru/pub/c/cover_max1500/172100.jpg",
        available: true,
        ownerId: null,
    },
    {
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
    {
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
];


const bookReducer = (state = { books: books, searchBook: [], addedBook: null}, action) => {
    let result, updatedBooks;
  
    switch (action.type) {
        // Поиск книги по названию
        case "ADD_SEARCH_BOOK":
            result = state.books.filter(book => {
                return book.title.toLowerCase() === action.title.toLowerCase();
            });
            return { ...state, searchBook: result};
        // Доступ - ИСТИНА
        case "BOOK_AVAILABLE":
            return {
                ...state,
                books: state.books.map(book => {
                    if (book.id === action.data.id) {
                        return { ...book, ...action.data.data};
                    }
                    return book;
                }),
            };

        case "ADMIN_DELETE_BOOK":
            updatedBooks = state.books.filter(book => {
                return book.id !== action.bookID
            });
            return {
                ...state,
                books:  updatedBooks,
            };

        case "ADMIN_ADD_BOOK":
            action.newBook.id = state.books[state.books.length -1].id + 1;
            updatedBooks = state.books;
            let addedBook = state.addedBook;
            addedBook = action.newBook;
            updatedBooks.push(action.newBook);
            return {
                ...state,
                books:  updatedBooks,
                addedBook: addedBook,
            };
            
        default: return state;
    }
}

export default bookReducer;