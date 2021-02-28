import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    height: calc(100vh - 110px);
    width: 100%;
    grid-template-rows: 60px minmax(200px, auto) 60px;

    @media (max-width: 1000px) {
        display: block;
        height: auto;
    }
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

export const ReadingNowForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const StyledBookTitle = styled.p`
    font-size: ${(props) => props.fontSize};
    width: ${(props) => props.width};
`;
