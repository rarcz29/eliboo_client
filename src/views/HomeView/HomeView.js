import CircularProgress from '@material-ui/core/CircularProgress';
import { logOutAction } from 'actions/userActions';
import axios from 'axios';
import DefaultButton from 'components/common/buttons/DefaultButton';
import TextInput from 'components/common/inputs/TextInput';
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

const inputs = ['Title', 'Author', 'Genre', 'Bookshelf'];
const submitButtons1 = ['Add', 'Search'];
const submitButtons2 = ['Add to my list', 'Remove'];

const clearCheckboxes = () => {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
};

const handleTopCheckboxChange = (event) => {
    const topCheckbox = event.target;
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => (checkbox.checked = topCheckbox.checked));
};

const HomeView = () => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

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
                if (error.response.status === 401) {
                    logOutAction(userContext, history);
                }
            });
    };

    useEffect(() => {
        loadBooks();
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
                        if (error.response.status === 401) {
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
                        if (error.response.status === 401) {
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
                        if (error.response.status === 401) {
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
                        if (error.response.status === 401) {
                            logOutAction(userContext, history);
                        }
                    });
                break;
        }

        clearCheckboxes();
    };

    return (
        <Grid>
            <form id="first-form" onSubmit={(event) => event.preventDefault()}>
                <InputsContainer>
                    {inputs.map((input) => (
                        <TextInput
                            name={input.toLowerCase()}
                            width="40%"
                            height="40px"
                            placeholder={input}
                            colorPrimary={COLORS.foreground.primary}
                            colorSecondary={COLORS.foreground.secondary}
                            borderWidth="2px"
                        />
                    ))}
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
                                onChange={handleTopCheckboxChange}
                                type="checkbox"
                            ></input>
                        </TableHeader>
                        {inputs.map((input) => (
                            <TableHeader>{input}</TableHeader>
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
                                <TableElement>{book.bookshelf}</TableElement>
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
