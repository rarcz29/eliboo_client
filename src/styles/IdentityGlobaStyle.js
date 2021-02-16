import { createGlobalStyle } from "styled-components";

const IdentityGlobalStyle = createGlobalStyle`
    body {
        background-color: ${COLORS.background.darkerSecondary};
    }

    input {
        margin-bottom: 1.6rem;
    }
`;

export default IdentityGlobalStyle;
