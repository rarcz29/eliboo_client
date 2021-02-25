import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import DefaultButton from 'components/common/buttons/DefaultButton';
import {
    Table,
    TableElement,
    TableHeader,
    TableRow,
} from 'components/common/tables';
import API_ENDPOINTS from 'constants/apiEndpoints';
import React, { useEffect, useState } from 'react';
import authService from 'services/authService';
import COLORS from 'styles/colors';
import { ButtonsContainer, Grid, TableContainer } from './style';

const tableHeaders = ['Title', 'Author', 'Genre', 'Bookshelf'];
const submitButtons = ['Remove'];

const clearCheckboxes = () => {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
};

const handleTopCheckboxChange = (event) => {
    const topCheckbox = event.target;
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => (checkbox.checked = topCheckbox.checked));
};

const MyListView = () => {
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
                alert('error');
                setLoading(false);
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
        });

        clearCheckboxes();
    };

    return (
        <Grid>
            <TableContainer>
                <Table width="100%">
                    <TableRow evenColor={COLORS.background.lighterSecondary}>
                        <TableHeader width="5rem" position="center">
                            <input
                                onChange={handleTopCheckboxChange}
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
                                <TableElement>{book.bookshelf}</TableElement>
                            </TableRow>
                        ))
                    )}
                </Table>
            </TableContainer>
            <ButtonsContainer>
                {submitButtons.map((button) => (
                    <DefaultButton
                        onClick={() => handleSubmitButtonClick()}
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

export default MyListView;
