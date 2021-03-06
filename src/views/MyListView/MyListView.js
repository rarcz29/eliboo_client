import CircularProgress from '@material-ui/core/CircularProgress';
import checkboxActions from 'actions/checkboxActions';
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
import { ButtonsContainer, Grid, TableContainer } from './style';

const tableHeaders = ['Title', 'Author', 'Genre', 'Bookshelf'];

const MyListView = () => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

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
    }, []);

    const handleSubmitButtonClick = () => {
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        let ids = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked && checkbox.id) {
                ids.push({ Id: checkbox.id });
            }
        });

        axios({
            method: 'delete',
            url: API_ENDPOINTS.MY_LIST,
            data: ids,
            headers: {
                Authorization: 'Bearer ' + authService.getToken(),
                'Content-Type': 'application/json',
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

        checkboxActions.clearCheckboxes();
    };

    return (
        <Grid>
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
                <DefaultButton
                    onClick={() => handleSubmitButtonClick()}
                    width="30%"
                    height="45px"
                >
                    Remove
                </DefaultButton>
            </ButtonsContainer>
        </Grid>
    );
};

export default MyListView;
