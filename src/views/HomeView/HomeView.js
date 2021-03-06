import CircularProgress from '@material-ui/core/CircularProgress';
import checkboxActions from 'actions/checkboxActions';
import { logOutAction } from 'actions/userActions';
import axios from 'axios';
import DefaultButton from 'components/common/buttons/DefaultButton';
import { SelectInput, TextInput } from 'components/common/inputs';
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
    InputsContainer,
    TableContainer,
} from './style';

const inputs = [
    { title: 'Title', type: 'TEXT' },
    { title: 'Genre', type: 'TEXT' },
    { title: 'Author', type: 'TEXT' },
    { title: 'Bookshelf', type: 'SELECT' },
];
const submitButtons1 = ['Add', 'Search'];
const submitButtons2 = ['Add to my list', 'Remove'];

const HomeView = () => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [loadingBookshelves, setLoadingBookshelves] = useState(true);
    const [books, setBooks] = useState([]);
    const [bookshelves, setBookshelves] = useState([]);

    const loadBooks = () => {
        axios
            .get(API_ENDPOINTS.GET_ALL_BOOKS, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                },
            })
            .then((response) => {
                setLoading(false);
                setBooks(response.data);
            })
            .catch((error) => {
                if (error.response?.status !== 200) {
                    logOutAction(userContext, history);
                }
            });
    };

    const loadBookshelves = () => {
        axios
            .get(API_ENDPOINTS.BOOKSHELVES, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                    Accept: 'aplication/json',
                },
            })
            .then((response) => {
                setLoadingBookshelves(false);
                setBookshelves(response.data);
            })
            .catch((error) => {
                setLoadingBookshelves(false);

                if (error.response?.status !== 200) {
                    logOutAction(userContext, history);
                }
            });
    };

    useEffect(() => {
        loadBooks();
        loadBookshelves();
    }, []);

    const handleUpperSubmitButtonClick = (button) => {
        const form = document.querySelector('#first-form');
        const data = new FormData(form);
        const plainFormData = Object.fromEntries(data.entries());
        setLoading(true);

        switch (button) {
            case submitButtons1[0]:
                axios
                    .post(API_ENDPOINTS.BOOKS, plainFormData, {
                        headers: {
                            Authorization: 'Bearer ' + authService.getToken(),
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                    })
                    .then((response) => {
                        loadBooks();
                    })
                    .catch((error) => {
                        if (error.response?.status !== 201) {
                            logOutAction(userContext, history);
                        }
                    });
                break;
            case submitButtons1[1]:
                axios
                    .get(
                        API_ENDPOINTS.FIND_BOOKS +
                            `?Title=${plainFormData.title}` +
                            `&Author=${plainFormData.author}` +
                            `&Genre=${plainFormData.genre}` +
                            `&Bookshelf=${plainFormData.bookshelf}`,
                        {
                            headers: {
                                Authorization:
                                    'Bearer ' + authService.getToken(),
                                'Content-Type': 'application/json',
                                Accept: 'application/json',
                            },
                        }
                    )
                    .then((response) => {
                        setBooks(response.data);
                    })
                    .catch((error) => {
                        if (error.response?.status !== 200) {
                            logOutAction(userContext, history);
                        }
                    });
                break;
        }

        setLoading(false);
        form.reset();
    };

    const handleLowerSubmitButtonClick = (button) => {
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        let ids = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked && checkbox.id) {
                ids.push({ Id: checkbox.id });
            }
        });

        switch (button) {
            case submitButtons2[0]:
                axios
                    .post(API_ENDPOINTS.MY_LIST, ids, {
                        headers: {
                            Authorization: 'Bearer ' + authService.getToken(),
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                    })
                    .catch((error) => {
                        if (error.response?.status !== 200) {
                            logOutAction(userContext, history);
                        }
                    });
                break;

            case submitButtons2[1]:
                axios({
                    method: 'delete',
                    url: API_ENDPOINTS.BOOKS,
                    data: ids,
                    headers: {
                        Authorization: 'Bearer ' + authService.getToken(),
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                })
                    .then((response) => {
                        loadBooks();
                    })
                    .catch((error) => {
                        if (error.response?.status !== 200) {
                            logOutAction(userContext, history);
                        }
                    });
                break;
        }

        checkboxActions.clearCheckboxes();
    };

    return (
        <Grid>
            <form id="first-form" onSubmit={(event) => event.preventDefault()}>
                <InputsContainer>
                    {inputs.map((input) =>
                        input?.type === 'TEXT' ? (
                            <TextInput
                                name={input?.title.toLowerCase()}
                                width="40%"
                                height="40px"
                                placeholder={input?.title}
                                colorPrimary={COLORS.foreground.primary}
                                colorSecondary={COLORS.foreground.secondary}
                                borderWidth="2px"
                            />
                        ) : (
                            <SelectInput
                                name={input?.title.toLowerCase()}
                                width="40%"
                                height="40px"
                                colorPrimary={COLORS.foreground.primary}
                                colorSecondary={COLORS.foreground.secondary}
                                borderWidth="2px"
                            >
                                {loadingBookshelves ? (
                                    <CircularProgress
                                        color="secondary"
                                        size="1rem"
                                    />
                                ) : (
                                    bookshelves.map((bookshelf) => (
                                        <option value={bookshelf.description}>
                                            {bookshelf.description}
                                        </option>
                                    ))
                                )}
                            </SelectInput>
                        )
                    )}
                </InputsContainer>
                <ButtonsContainer>
                    {submitButtons1.map((button) => (
                        <DefaultButton
                            onClick={() => handleUpperSubmitButtonClick(button)}
                            width="30%"
                        >
                            {button}
                        </DefaultButton>
                    ))}
                </ButtonsContainer>
            </form>
            <TableContainer>
                <Table width="100%">
                    <TableRow evenColor={COLORS.background.lighterSecondary}>
                        <TableHeader width="5rem" position="center">
                            <input
                                onChange={
                                    checkboxActions.handleTopCheckboxChange
                                }
                                type="checkbox"
                            ></input>
                        </TableHeader>
                        {inputs.map((input) => (
                            <TableHeader>{input?.title}</TableHeader>
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
                                    <input id={book.id} type="checkbox"></input>
                                </TableElement>
                                <TableElement>{book.title}</TableElement>
                                <TableElement>{book.author}</TableElement>
                                <TableElement>{book.genre}</TableElement>
                                <TableElement>{book.bookshelfId}</TableElement>
                            </TableRow>
                        ))
                    )}
                </Table>
            </TableContainer>
            <ButtonsContainer>
                {submitButtons2.map((button) => (
                    <DefaultButton
                        onClick={() => handleLowerSubmitButtonClick(button)}
                        width="30%"
                        height="45px"
                    >
                        {button}
                    </DefaultButton>
                ))}
            </ButtonsContainer>
        </Grid>
    );
};

export default HomeView;
