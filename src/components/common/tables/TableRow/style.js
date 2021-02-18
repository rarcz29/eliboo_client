import styled from 'styled-components';

export const StyledTr = styled.tr`
    line-height: 3.3rem;

    &:nth-child(even) {
        background-color: ${(props) => props.evenColor};
    }
`;
