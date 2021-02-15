import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    color: ${(props) => props.color || "grey"};
`;

const StyledLine = styled.hr`
    margin: 0;
    width: 100%;
    border-color: ${(props) => props.color || "grey"};
`;

const StyledText = styled.p`
    margin: 0 1rem;
    padding: 0;
`;

const Separator = ({ className, width, text, color }) => {
    const textElement = text ? <StyledText>{text}</StyledText> : "";

    return (
        <Container className={className} width={width} color={color}>
            <StyledLine color={color} />
            {textElement}
            <StyledLine color={color} />
        </Container>
    );
};

export default Separator;
