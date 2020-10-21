const INITIAL_STATE = {
    isSignedIn: false,
    currentUser: null,
    error: null
}


const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN_SUCCES":
        case "SIGN_IN_SUCCES":
            return {
                ...state,
                isSignedIn: true,
                currentUser: action.payload,
                error: null
            }
        case "SIGN_IN_FAIL":
        case "SIGN_IN_FAIL":
            return {
                ...state,
                isSignedIn: false,
                currentUser: null,
                error: action.payload
            }
        case "SIGN_OUT_SUCCES":
            return {
                ...state,
                isSignedIn: false,
                currentUser: null,
                error: null
            }
        case "SIGN_OUT_FAIL":
            return {
                ...state,
                error: action.payload
            }
        case "SIGN_UP_SUCCES":
            return {
                ...state,
            }
        case "SIGN_UP_FAIL":
            return {
                ...state,
                isSignedIn: false,
                currentUser: null,
                error: action.payload
            }
        default:
            return state;
        // case "SET_CURRENT_USER":
        //     return {
        //         isSignedIn: true,
        //         currentUser: action.payload
        //     };
        // case "LOG_OUT":
        //     return {
        //         isSignedIn: false,
        //         currentUser: null
        //     };
        
    }
}

export default authReducer;