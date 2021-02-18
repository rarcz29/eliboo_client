import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import COLORS from '../../../styles/colors';

export const StyledHeader = styled.header`
    width: 100%;
    height: ${(props) => props.height};
    background-color: ${COLORS.background.lighterSecondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    font-size: 20px;
`;

export const StyledAvatar = styled(Avatar)`
    && {
        background-color: ${COLORS.buttons.blue};
        color: ${COLORS.foreground.primary};
        transition: background-color ease-in-out 0.3s;

        &:hover {
            cursor: pointer;
            background-color: ${COLORS.buttons.blueHighlighted} !important;
        }
    }
`;
