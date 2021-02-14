import React from "react";
import TextInput from "../../components/common/inputs/TextInput";
import COLORS from "../../styles/colors";

const inputs = [
    ["username", "text"],
    ["email", "email"],
    ["password", "password"],
    ["confirm password", "password"],
];

const RegisterView = () => {
    return (
        <>
            {inputs.map((input) => (
                <TextInput
                    name={input[0]}
                    type={input[1]}
                    width="80%"
                    height="40px"
                    placeholder={input[0].split(" ")[0]}
                    colorPrimary={COLORS.foreground.primary}
                    colorSecondary={COLORS.foreground.secondary}
                    borderWidth="2px"
                />
            ))}
        </>
    );
};

export default RegisterView;
