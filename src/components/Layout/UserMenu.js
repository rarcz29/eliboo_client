import React, { useEffect } from "react";
import styled from "styled-components";

const Menu = styled.div`
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

    p {
        transition: color ease-in-out 0.5s;
    }

    p:hover {
        cursor: pointer;
        color: ${(props) => props.highlightColor};
    }
`;

const UserMenu = ({
    className,
    top,
    right,
    width,
    height,
    backgroundColor,
    color,
    highlightColor,
    children,
}) => {
    return (
        <Menu
            className={className + " click-outside-element"}
            top={top}
            right={right}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            color={color}
            highlightColor={highlightColor}
        >
            {children}
        </Menu>
    );
};

export default UserMenu;
