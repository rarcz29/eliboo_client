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
const submitButtons = ['Add to "Reading Now"', 'Remove from my list'];

const ReadingNowView = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    const loadBooks = () => {
        axios
            .get(API_ENDPOINTS.My_LIST, {
                headers: {
                    Authorization: 'Bearer ' + authService.getToken(),
                },
            })
            .then((response) => {
                setLoading(false);
                setBooks(response.data);
            });
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const handleSubmitButtonClick = (button) => {
        // const checkboxes = document.querySelectorAll('input[type=checkbox]');
        // let ids = [];
        // checkboxes.forEach((checkbox) => {
        //     if (checkbox.checked && checkbox.id) {
        //         ids.push({ Id: checkbox.id });
        //     }
        // });
        // switch (button) {
        //     case submitButtons2[0]:
        //         axios.post(API_ENDPOINTS.MY_LIST, ids, {
        //             headers: {
        //                 Authorization: 'Bearer ' + authService.getToken(),
        //                 'Content-Type': 'application/json',
        //                 Accept: 'application/json',
        //             },
        //         });
        //         break;
        //     case submitButtons2[1]:
        //         axios({
        //             method: 'delete',
        //             url: API_ENDPOINTS.BOOKS,
        //             data: ids,
        //             headers: {
        //                 Authorization: 'Bearer ' + authService.getToken(),
        //                 'Content-Type': 'application/json',
        //                 Accept: 'application/json',
        //             },
        //         });
        //         break;
        // }
        // clearCheckboxes();
    };

    return (
        <Grid>
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
                        onClick={() => handleSubmitButtonClick(button)}
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

export default ReadingNowView;
