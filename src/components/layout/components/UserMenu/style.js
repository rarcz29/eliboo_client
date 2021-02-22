import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    letter-spacing: 0.05rem;
    font-weight: bold;
    border-radius: 0 0 0 0.2rem;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

    p {
        transition: color ease-in-out 0.5s;
    }

    p:hover {
        cursor: pointer;
        color: ${(props) => props.highlightColor};
    }
`;

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: ${(props) => props.right};
    width: ${(props) => props.width};
    height: ${(props) => parseInt(props.height) + parseInt(props.top) + 'px'};
    padding-top: ${(props) => props.top};
    transition: right ease-in-out 0.3s;
    z-index: 999;
`;
