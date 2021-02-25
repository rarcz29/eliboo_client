import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    height: calc(100vh - 110px);
    width: 100%;
    grid-template-rows: 60px auto 60px;
`;

export const ButtonsContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
`;

export const TableContainer = styled.div`
    overflow-x: auto;
    overflow-y: auto;
    margin: 1rem 2rem;
`;

export const NewBookshelfForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
