import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: ${(props) => props.width || '100%'};
    color: ${(props) => props.color || 'grey'};
`;

export const StyledLine = styled.hr`
    margin: 0;
    width: 100%;
    border-color: ${(props) => props.color || 'grey'};
`;

export const StyledText = styled.p`
    margin: 0 1rem;
    padding: 0;
`;
