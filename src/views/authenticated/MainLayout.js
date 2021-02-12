import React from "react";
import { Logo, Navbar } from "../../components/Layout";
import ItemContainer from "../../containers/ItemContainer";
import SidePanelContainer from "../../containers/SidePanelContainer";
import COLORS from "../../styles/colors";

const MainLayout = ({ children }) => {
    return (
        <>
            <SidePanelContainer
                width="400px"
                height="100vh"
                backgroundColor={COLORS.background.darkerSecondary}
            >
                <ItemContainer width="100%" height="16%">
                    <Logo />
                </ItemContainer>
                <Navbar width="100%" height="84%" />
            </SidePanelContainer>
        </>
    );
};

export default MainLayout;
