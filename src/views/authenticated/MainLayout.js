import React, { useState } from "react";
import { Logo, Navbar, Header } from "../../components/Layout";
import COLORS from "../../styles/colors";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
`;

const LeftSideContainer = styled(Container)`
    width: 370px;
    background-color: ${COLORS.background.darkerSecondary};
    flex-direction: column;
    align-items: center;
`;

const RightSideContainer = styled(Container)`
    width: calc(100% - 370px);
    flex-direction: column;
`;

const MainLayout = ({ children }) => {
    const [page, setPage] = useState("Home");

    return (
        <Container>
            <LeftSideContainer>
                <Logo />
                <Navbar width="100%" height="100%" setPage={setPage} />
            </LeftSideContainer>
            <RightSideContainer>
                <Header currentPage={page} />
                <main>{children}</main>
            </RightSideContainer>
        </Container>
    );
};

export default MainLayout;
