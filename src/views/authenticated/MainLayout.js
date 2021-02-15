import React, { useState } from "react";
import { Logo, Navbar, Header } from "../../components/layout";
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

const StyledMain = styled.main`
    padding: 20px;
`;

const MainLayout = ({ logout, children }) => {
    const [page, setPage] = useState("Home");

    return (
        <Container>
            <LeftSideContainer>
                <button onClick={logout}>logout</button>
                <Logo width="80%" />
                <Navbar width="100%" height="100%" setPage={setPage} />
            </LeftSideContainer>
            <RightSideContainer>
                <Header currentPage={page} />
                <StyledMain>{children}</StyledMain>
            </RightSideContainer>
        </Container>
    );
};

export default MainLayout;
