import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import COLORS from 'styles/colors';
import Separator from '../../components/common/separators/Separator';

const flexCenterStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    ${flexCenterStyle}
    max-width: 550px;
    min-height: 100vh;
    margin: 0 auto;
`;

export const StyledForm = styled.form`
    ${flexCenterStyle}
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ErrorMessageContainer = styled.div`
    ${flexCenterStyle}
    width: 100%;
    height: 2.5rem;
    color: red;
`;

export const StyledSeparator = styled(Separator)`
    margin: 1rem 0;
`;

export const StandardLink = styled(Link)`
    color: ${COLORS.foreground.primary};
    transition: color ease-in-out 0.3s;
    text-underline-offset: 0.2rem;

    &:hover {
        color: ${COLORS.foreground.secondary};
    }
`;
