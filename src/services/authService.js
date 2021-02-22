import API_ENDPOINTS from '../constants/apiEndpoints';

const LOCAL_STORAGE_DATA_NAME = 'user_token';

const postData = async (formDataJsonString, url) => {
    let response = null;

    await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        method: 'POST',
        body: formDataJsonString,
    })
        .then((res) => res.json())
        .then((data) => (response = data))
        .catch((error) => {
            return error;
        });

    return response;
};

const login = async (formDataJsonString) => {
    const response = await postData(
        formDataJsonString,
        API_ENDPOINTS.LOGIN_URL
    );

    if (response !== null) {
        localStorage.setItem(LOCAL_STORAGE_DATA_NAME, response.token);
    }

    return response;
};

const register = async (formDataJsonString) => {
    return await postData(formDataJsonString, API_ENDPOINTS.REGISTER_URL);
};

const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_DATA_NAME);
};

const isAuthenticated = () => {
    return getUserData() !== null;
};

const getToken = () => localStorage.getItem(LOCAL_STORAGE_DATA_NAME);

const getUserData = () => {
    const token = getToken();

    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export default {
    login,
    register,
    logout,
    isAuthenticated,
    getToken,
    getUserData,
};
