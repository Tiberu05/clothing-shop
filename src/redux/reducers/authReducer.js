const INITIAL_STATE = {
    isSignedIn: false,
    currentUser: null
}


const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                isSignedIn: true,
                currentUser: action.payload
            };
        case "LOG_OUT":
            return {
                isSignedIn: false,
                currentUser: null
            };
        default:
            return state;
    }
}

export default authReducer;