import CircularProgress from '@material-ui/core/CircularProgress';
import checkboxActions from 'actions/checkboxActions';
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
    NewBookshelfForm,
    TableContainer,
} from './style';

const tableHeaders = ['Id', 'Description'];

const BookshelvesView = () => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [bookshelves, setBookshelves] = useState([]);

    const loadBookshelves = () => {
        axios
            .get(API_ENDPOINTS.BOOKSHELVES, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                },
            })
            .then((response) => {
                setLoading(false);
                setBookshelves(response.data);
            })
            .catch((error) => {
                if (error.response?.status !== 200) {
                    logOutAction(userContext, history);
                }
            });
    };

    useEffect(() => {
        loadBookshelves();
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const plainFormData = Object.fromEntries(data.entries());
        setLoading(true);

        axios
            .post(API_ENDPOINTS.BOOKSHELVES, plainFormData, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            .then((response) => {
                loadBookshelves();
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                if (error.response?.status !== 201) {
                    logOutAction(userContext, history);
                }
            });
    };

    const handleButtonClick = () => {
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        let ids = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked && checkbox.id) {
                ids.push({ id: checkbox.id });
            }
        });

        axios({
            method: 'delete',
            url: API_ENDPOINTS.BOOKSHELVES,
            data: ids,
            headers: {
                Authorization: 'Bearer ' + authService.getToken(),
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                loadBookshelves();

                if (response?.status !== 200) {
                    logOutAction(userContext, history);
                }
            })
            .catch((error) => {
                if (error.response?.status !== 200) {
                    logOutAction(userContext, history);
                }
            });

        checkboxActions.clearCheckboxes();
    };

    return (
        <Grid>
            <NewBookshelfForm onSubmit={handleFormSubmit}>
                <TextInput
                    name="description"
                    width="60%"
                    height="40px"
                    placeholder="description"
                    colorPrimary={COLORS.foreground.primary}
                    colorSecondary={COLORS.foreground.secondary}
                    borderWidth="2px"
                />
                <DefaultButton type="submit" width="30%">
                    Create
                </DefaultButton>
            </NewBookshelfForm>
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
                        {tableHeaders.map((header) => (
                            <TableHeader>{header}</TableHeader>
                        ))}
                    </TableRow>
                    {loading ? (
                        <CircularProgress color="secondary" />
                    ) : (
                        bookshelves.map((bookshelf) => (
                            <TableRow
                                evenColor={COLORS.background.lighterSecondary}
                            >
                                <TableElement position="center">
                                    <input
                                        id={bookshelf.id}
                                        type="checkbox"
                                    ></input>
                                </TableElement>
                                <TableElement>{bookshelf.id}</TableElement>
                                <TableElement>
                                    {bookshelf.description}
                                </TableElement>
                            </TableRow>
                        ))
                    )}
                </Table>
            </TableContainer>
            <ButtonsContainer>
                <DefaultButton
                    onClick={handleButtonClick}
                    width="30%"
                    height="45px"
                >
                    Remove
                </DefaultButton>
            </ButtonsContainer>
        </Grid>
    );
};

export default BookshelvesView;
