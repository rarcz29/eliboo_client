import ROUTING from 'constants/routing';
import authService from 'services/authService';

export const logOutAction = (userContext, history) => {
    authService.logout();
    userContext.dispatch({ type: 'LOG_OUT' });
    history.push(ROUTING.DEFAULT);
};
