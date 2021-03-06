import { css } from 'styled-components';

export const StyledBaseInput = css`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding-left: 15px;
    outline: none;
    resize: none;
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    color: ${(props) => props.colorPrimary || 'black'};
    border: none;
    border-bottom: ${(props) => props.borderWidth || '1px'} solid
        ${(props) => props.colorSecondary || 'black'};
    font-size: ${(props) => props.fontSize || '1rem'};
    display: ${(props) => props.display};
    transition: border-color ease-in-out 0.3s;

    &:hover,
    &:focus {
        border-color: ${(props) => props.colorPrimary};
    }

    &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.colorSecondary};
        opacity: 1;
    }

    &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${(props) => props.colorSecondary};
    }

    &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: ${(props) => props.colorSecondary};
    }
`;
