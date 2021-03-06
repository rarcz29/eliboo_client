import { logOutAction } from 'actions/userActions';
import ROUTING from 'constants/routing';
import { UserContext } from 'context/userContext';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import COLORS from 'styles/colors';
import { Header, Logo, Navbar, UserMenu } from '../components';
import {
    Container,
    LeftSideContainer,
    RightSideContainer,
    StyledMain,
} from './style';

const MainLayout = ({ children }) => {
    const history = useHistory();
    const userContext = useContext(UserContext);
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
                    <p onClick={() => history.push(ROUTING.ACCOUNT)}>ACCOUNT</p>
                    <p onClick={() => logOutAction(userContext, history)}>
                        LOG OUT
                    </p>
                </UserMenu>
                <StyledMain>{children}</StyledMain>
            </RightSideContainer>
        </Container>
    );
};

export default MainLayout;
