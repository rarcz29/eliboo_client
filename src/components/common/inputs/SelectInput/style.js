import styled from 'styled-components';
import { StyledBaseInput } from '../sharedStyle';

// TODO: disable highlighting input when disabled
export const StyledSelect = styled.select`
    ${StyledBaseInput}

    option {
        color: black;
    }
`;
