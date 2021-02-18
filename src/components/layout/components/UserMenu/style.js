import styled from 'styled-components';

export const Menu = styled.div`
    position: fixed;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
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
    transition: right ease-in-out 0.3s;
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
