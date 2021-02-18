import React from 'react';
import { Container, StyledLine, StyledText } from './style';

const Separator = ({ className, width, text, color }) => {
    const textElement = text ? <StyledText>{text}</StyledText> : '';

    return (
        <Container className={className} width={width} color={color}>
            <StyledLine color={color} />
            {textElement}
            <StyledLine color={color} />
        </Container>
    );
};

export default Separator;
