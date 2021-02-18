import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../../../components/common/buttons/DefaultButton';
import TextInput from '../../../components/common/inputs/TextInput';
import {
    Table,
    TableElement,
    TableHeader,
    TableRow,
} from '../../../components/common/tables';
import COLORS from '../../../styles/colors';

const Grid = styled.div`
    display: grid;
    height: calc(100vh - 110px);
    width: 100%;
    grid-template-rows: 210px auto 60px;
`;

const InputsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 130px;
`;

const ButtonsContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
`;

const TableContainer = styled.div`
    overflow-x: auto;
    overflow-y: auto;
    margin: 1rem 2rem;
`;

const inputs = ['Title', 'Author', 'Genre', 'Bookshelf'];
const submitButtons1 = ['Add', 'Search'];
const submitButtons2 = ['Add to my list', 'Remove'];

const HomeView = () => {
    return (
        <Grid>
            <div>
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
                        <DefaultButton type="submit" width="30%">
                            {button}
                        </DefaultButton>
                    ))}
                </ButtonsContainer>
            </div>
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
                    <TableRow evenColor={COLORS.background.lighterSecondary}>
                        <TableElement position="center">
                            <input type="checkbox"></input>
                        </TableElement>
                        <TableElement>element2</TableElement>
                        <TableElement>element3</TableElement>
                        <TableElement>element4</TableElement>
                        <TableElement>element5</TableElement>
                    </TableRow>
                    <TableRow evenColor={COLORS.background.lighterSecondary}>
                        <TableElement position="center">
                            <input type="checkbox"></input>
                        </TableElement>
                        <TableElement>element2</TableElement>
                        <TableElement>element3</TableElement>
                        <TableElement>element4</TableElement>
                        <TableElement>element5</TableElement>
                    </TableRow>
                    <TableRow evenColor={COLORS.background.lighterSecondary}>
                        <TableElement position="center">
                            <input type="checkbox"></input>
                        </TableElement>
                        <TableElement>element2</TableElement>
                        <TableElement>element3</TableElement>
                        <TableElement>element4</TableElement>
                        <TableElement>element5</TableElement>
                    </TableRow>
                    <TableRow evenColor={COLORS.background.lighterSecondary}>
                        <TableElement position="center">
                            <input type="checkbox"></input>
                        </TableElement>
                        <TableElement>element2</TableElement>
                        <TableElement>element3</TableElement>
                        <TableElement>element4</TableElement>
                        <TableElement>element5</TableElement>
                    </TableRow>
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
