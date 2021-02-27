const BASE_URL = 'https://localhost:5001/api';
const LOGIN_URL = BASE_URL + '/auth/authenticate';
const REGISTER_URL = BASE_URL + '/auth/register';

const GET_ALL_BOOKS = BASE_URL + '/books';
const BOOKS = GET_ALL_BOOKS;
const FIND_BOOKS = BOOKS + '/find';
const CURRENT_BOOK = BOOKS + '/current';

const MY_LIST = BASE_URL + '/list';

const BOOKSHELVES = BASE_URL + '/bookshelves';

export default {
    LOGIN_URL,
    REGISTER_URL,
    GET_ALL_BOOKS,
    BOOKS,
    FIND_BOOKS,
    MY_LIST,
    BOOKSHELVES,
    CURRENT_BOOK,
};
