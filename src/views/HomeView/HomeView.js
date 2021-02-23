import CircularProgress from '@material-ui/core/CircularProgress';
import DefaultButton from 'components/common/buttons/DefaultButton';
import TextInput from 'components/common/inputs/TextInput';
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
import {
    ButtonsContainer,
    Grid,
    InputsContainer,
    TableContainer,
} from './style';

const inputs = ['Title', 'Author', 'Genre', 'Bookshelf'];
const submitButtons1 = ['Add', 'Search'];
const submitButtons2 = ['Add to my list', 'Remove'];

const HomeView = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(API_ENDPOINTS.GET_ALL_BOOKS, {
            headers: {
                Authorization: 'Bearer ' + authService.getToken(),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleUpperSubmitButtonClick = (button) => {
        const form = document.querySelector('#first-form');
        const data = new FormData(form);
        const plainFormData = Object.fromEntries(data.entries());

        console.log(JSON.stringify(plainFormData));

        switch (button) {
            case submitButtons1[0]:
                fetch(API_ENDPOINTS.BOOKS, {
                    headers: {
                        Authorization: 'Bearer ' + authService.getToken(),
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify(plainFormData),
                })
                    .then((response) => response.text())
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                break;
            case submitButtons1[1]:
                console.log('search');
                break;
        }
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
                            <input type="checkbox"></input>
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
                                    <input type="checkbox"></input>
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
                    <DefaultButton width="30%" height="45px">
                        {button}
                    </DefaultButton>
                ))}
            </ButtonsContainer>
        </Grid>
    );
};

export default HomeView;
