import CircularProgress from '@material-ui/core/CircularProgress';
import { logOutAction } from 'actions/userActions';
import axios from 'axios';
import DefaultButton from 'components/common/buttons/DefaultButton';
import {
    Table,
    TableElement,
    TableHeader,
    TableRow,
} from 'components/common/tables';
import API_ENDPOINTS from 'constants/apiEndpoints';
import { UserContext } from 'context/userContext';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from 'services/authService';
import COLORS from 'styles/colors';
import {
    ButtonsContainer,
    Grid,
    ReadingNowForm,
    StyledBookTitle,
    TableContainer,
} from './style';

const tableHeaders = ['Title', 'Author', 'Genre', 'Bookshelf'];

const ReadingNowView = () => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [loadingCurrent, setLoadingCurrent] = useState(true);
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState([]);

    const loadCurrentBook = () => {
        axios
            .get(API_ENDPOINTS.CURRENT_BOOK, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                    Accept: 'application/json',
                },
            })
            .then((response) => {
                setLoadingCurrent(false);
                setCurrentBook(response.data);
            })
            .catch((error) => {
                setLoadingCurrent(false);
                console.log(error.response);

                if (error.response?.status === 409) {
                    alert('Someone else is currently reading that book');
                } else if (error.response?.status !== 200) {
                    logOutAction(userContext, history);
                }
            });
    };

    const loadBooks = () => {
        axios
            .get(API_ENDPOINTS.MY_LIST, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                    Accept: 'application/json',
                },
            })
            .then((response) => {
                setLoading(false);
                setBooks(response.data);
            })
            .catch((error) => {
                setLoading(false);

                if (error.response?.status !== 200) {
                    logOutAction(userContext, history);
                }
            });
    };

    useEffect(() => {
        loadBooks();
        loadCurrentBook();
    }, []);

    const handleRemove = (event) => {
        event.preventDefault();

        axios
            .delete(API_ENDPOINTS.CURRENT_BOOK, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                    Accept: 'application/json',
                },
            })
            .then((response) => {
                setLoadingCurrent(false);
                loadCurrentBook();
            })
            .catch((error) => {
                setLoadingCurrent(false);
            });
    };

    const handleSubmitButtonClick = () => {
        const input = document.querySelector('input[type="radio"]:checked');

        if (input?.value) {
            axios
                .patch(API_ENDPOINTS.CURRENT_BOOK + `/${input.value}`, null, {
                    headers: {
                        Authorization: 'Bearer ' + authService.getToken(),
                        Accept: 'application/json',
                    },
                })
                .then((response) => {
                    loadCurrentBook();
                    input.checked = false;
                })
                .catch((error) => {
                    if (error.response?.status !== 200) {
                        logOutAction(userContext, history);
                    }
                    input.checked = false;
                });
        }
    };

    return (
        <Grid>
            <ReadingNowForm onSubmit={handleRemove}>
                <StyledBookTitle fontSize="1.5rem" width="60%">
                    {loadingCurrent ? (
                        <CircularProgress color="secondary" />
                    ) : currentBook ? (
                        `"${currentBook.title}" by ${currentBook.author}`
                    ) : (
                        'empty'
                    )}
                </StyledBookTitle>
                <DefaultButton type="submit" width="30%">
                    Return book
                </DefaultButton>
            </ReadingNowForm>
            <TableContainer>
                <Table width="100%">
                    <TableRow evenColor={COLORS.background.lighterSecondary}>
                        <TableHeader width="5rem" position="center" />
                        {tableHeaders.map((header) => (
                            <TableHeader>{header}</TableHeader>
                        ))}
                    </TableRow>
                    {loading ? (
                        <CircularProgress color="secondary" />
                    ) : (
                        books.map((book) => (
                            <TableRow
                                evenColor={COLORS.background.lighterSecondary}
                            >
                                <TableElement position="center">
                                    <input
                                        name="id"
                                        value={book.id}
                                        type="radio"
                                    ></input>
                                </TableElement>
                                <TableElement>{book.title}</TableElement>
                                <TableElement>{book.author}</TableElement>
                                <TableElement>{book.genre}</TableElement>
                                <TableElement>{book.bookshelf}</TableElement>
                            </TableRow>
                        ))
                    )}
                </Table>
            </TableContainer>
            <ButtonsContainer>
                <DefaultButton
                    onClick={handleSubmitButtonClick}
                    width="30%"
                    height="45px"
                >
                    Read
                </DefaultButton>
            </ButtonsContainer>
        </Grid>
    );
};

export default ReadingNowView;
