import styled from 'styled-components';

export const StyledTableHeader = styled.th`
    line-height: 3.3rem;
    text-align: left;
    text-align: ${(props) => props.position};
    width: ${(props) => props.width};
`;
