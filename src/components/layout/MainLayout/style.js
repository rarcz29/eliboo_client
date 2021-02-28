import styled from 'styled-components';
import COLORS from 'styles/colors';

const breakpoint1 = '1000px';
const breakpoint2 = '550px';

export const Container = styled.div`
    height: 100vh;
    display: flex;

    @media (max-width: ${breakpoint1}) {
        flex-direction: column;
        height: auto;
    }
`;

export const LeftSideContainer = styled(Container)`
    width: 370px;
    background-color: ${COLORS.background.darkerSecondary};
    flex-direction: column;
    align-items: center;

    @media (max-width: ${breakpoint1}) {
        flex-direction: row;
        width: 100%;
    }
`;

export const RightSideContainer = styled(Container)`
    width: calc(100% - 370px);
    flex-direction: column;

    @media (max-width: ${breakpoint1}) {
        width: 100%;
    }
`;

export const StyledMain = styled.main`
    padding: 20px;
    overflow-x: auto;

    @media (max-width: ${breakpoint1}) {
        padding: 5px;
    }

    @media (max-width: ${breakpoint2}) {
        padding: 5px 2px;
    }
`;
