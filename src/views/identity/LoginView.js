import React from "react";
import TextInput from "../../components/common/inputs/TextInput";
import COLORS from "../../styles/colors";
import styled from "styled-components";

const StyledTextInput = styled(TextInput)`
    margin-bottom: 1.8rem;
`;

const inputs = ["email", "password"];

const LoginView = () => {
    return (
        <>
            {inputs.map((input) => (
                <StyledTextInput
                    name={input}
                    type={input}
                    width="80%"
                    height="40px"
                    placeholder={input}
                    colorPrimary={COLORS.foreground.primary}
                    colorSecondary={COLORS.foreground.secondary}
                    borderWidth="2px"
                />
            ))}
        </>
    );
};

export default LoginView;
