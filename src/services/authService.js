import { LOGIN_URL, REGISTER_URL } from "../constants/apiEndpoints";

const LOCAL_STORAGE_DATA_NAME = "user_token";

// TODO: Save token in the local storage
const login = (email, password) => {
    let formattedData = JSON.stringify({
        email: email,
        password: password,
    });

    fetch(LOGIN_URL, { method: "POST", body: formattedData })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem(LOCAL_STORAGE_DATA_NAME, "change_me");
        });
};

// TODO: Return received data
const register = (username, email, password) => {
    let formattedData = JSON.stringify({
        username: username,
        email: email,
        password: password,
    });

    fetch(REGISTER_URL, { method: "POST", body: formattedData })
        .then((response) => response.json())
        .then((data) => {});
};

const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_DATA_NAME);
};

const getUserData = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_NAME));
};

export default { login, register, logout, getUserData };
