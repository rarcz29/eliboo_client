import React, { useState } from 'react';
import COLORS from 'styles/colors';
import { Header, Logo, Navbar, UserMenu } from '../components';
import {
    Container,
    LeftSideContainer,
    RightSideContainer,
    StyledMain,
} from './style';

const MainLayout = ({ logout, children }) => {
    const [page, setPage] = useState('Home');
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleClickAway = () => {
        setShowUserMenu(false);
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
                <UserMenu
                    onMouseLeave={handleClickAway}
                    top="70px"
                    right={showUserMenu ? '0' : '-210px'}
                    backgroundColor={COLORS.background.lighterSecondary}
                    color={COLORS.foreground.secondary}
                    highlightColor={COLORS.foreground.primary}
                    width="200px"
                    height="200px"
                >
                    <p>ACCOUNT</p>
                    <p onClick={logout}>LOG OUT</p>
                </UserMenu>
                <StyledMain>{children}</StyledMain>
            </RightSideContainer>
        </Container>
    );
};

export default MainLayout;
