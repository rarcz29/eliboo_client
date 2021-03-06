import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    height: calc(100vh - 110px);
    width: 100%;
    grid-template-rows: 210px minmax(200px, auto) 60px;

    @media (max-width: 1000px) {
        display: block;
        height: auto;
    }
`;

export const InputsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 130px;
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
