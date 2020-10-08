export const setCurrentUser = (userData) => {
    return {
        type: "SET_CURRENT_USER",
        payload: userData
    }
};

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}