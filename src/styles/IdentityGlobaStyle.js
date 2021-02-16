import { createGlobalStyle } from "styled-components";
import COLORS from "./colors";

const IdentityGlobalStyle = createGlobalStyle`
    body {
        background-color: ${COLORS.background.darkerSecondary};
    }

    input {
        margin-bottom: 1.6rem;
    }
`;

export default IdentityGlobalStyle;
