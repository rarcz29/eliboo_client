import styled from 'styled-components';

export const StyledButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
    overflow: hidden;
    border-radius: ${(props) => props.borderRadius};
    color: ${(props) => props.color};
    border-width: 0px;
    font-size: ${(props) => props.fontSize || '1rem'};
    background: linear-gradient(
        180deg,
        ${(props) => props.backgroundColor} 0%,
        ${(props) => props.highlightColor} 100%
    );
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    transition: all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
        transform: scale(1.02);
    }
`;

export const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background-color: white;
    width: 10px;
    height: 10px;
    animation-name: ripple;
    animation-duration: 0.5s;
    animation-timing-function: ease-in;
    opacity: 0;

    @keyframes ripple {
        0% {
            opacity: 0;
        }
        1% {
            width: 1px;
            height: 1px;
            opacity: 0;
        }
        50% {
            transform: scale(20, 20);
            opacity: 0.5;
        }
        100% {
            transform: scale(40, 40);
            opacity: 0;
        }
    }
`;
