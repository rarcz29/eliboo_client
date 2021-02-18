import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Header, Logo, Navbar, UserMenu } from '../../components/layout';
import COLORS from '../../styles/colors';

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
    overflow-x: auto;
`;

const MainLayout = ({ logout, children }) => {
    const [page, setPage] = useState('Home');
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleClickAway = () => {
        //setShowUserMenu(false);
    };

    return (
        <Container>
            <LeftSideContainer>
                <Logo width="80%" />
                <Navbar width="100%" height="100%" setPage={setPage} />
            </LeftSideContainer>
            <RightSideContainer>
                <Header
                    currentPage={page}
                    showUserMenu={showUserMenu}
                    setShowUserMenu={setShowUserMenu}
                    height="70px"
                />
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div>
                        <UserMenu
                            top="70px"
                            right={showUserMenu ? '0' : '-200px'}
                            backgroundColor={COLORS.background.lighterSecondary}
                            color={COLORS.foreground.secondary}
                            highlightColor={COLORS.foreground.primary}
                            width="200px"
                            height="200px"
                        >
                            <p>ACCOUNT</p>
                            <p onClick={logout}>LOG OUT</p>
                        </UserMenu>
                    </div>
                </ClickAwayListener>
                <StyledMain>{children}</StyledMain>
            </RightSideContainer>
        </Container>
    );
};

export default MainLayout;
