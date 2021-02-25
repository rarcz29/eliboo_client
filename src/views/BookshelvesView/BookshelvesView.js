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
    NewBookshelfForm,
    TableContainer,
} from './style';

const tableHeaders = ['Id', 'Description'];
const submitButtons = ['Remove'];

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
            });
    };

    useEffect(() => {
        loadBookshelves();
    }, []);

    const handleFormSubmit = (event) => {
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
                if (error.response?.status === 401) {
                    logOutAction(userContext, history);
                }
            });
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
                            <input type="checkbox"></input>
                        </TableHeader>
                        {tableHeaders.map((header) => (
                            <TableHeader>{header}</TableHeader>
                        ))}
                    </TableRow>
                    {loading ? (
                        <CircularProgress color="secondary" />
                    ) : (
                        bookshelves.map((book) => (
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
                {submitButtons.map((button) => (
                    <DefaultButton width="30%" height="45px">
                        {button}
                    </DefaultButton>
                ))}
            </ButtonsContainer>
        </Grid>
    );
};

export default BookshelvesView;
