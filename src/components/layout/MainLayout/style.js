import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const LeftSideContainer = styled(Container)`
    width: 370px;
    background-color: ${COLORS.background.darkerSecondary};
    flex-direction: column;
    align-items: center;
`;

export const RightSideContainer = styled(Container)`
    width: calc(100% - 370px);
    flex-direction: column;
`;

export const StyledMain = styled.main`
    padding: 20px;
    overflow-x: auto;
`;
