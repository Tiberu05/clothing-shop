// export const setCurrentUser = (userData) => {
//     return {
//         type: "SET_CURRENT_USER",
//         payload: userData
//     }
// };

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const googleSignInStart = () => {
    return { type: "GOOGLE_SIGN_IN_START" }
};

export const signInSucces = user => {
    return {
        type: "SIGN_IN_SUCCES",
        payload: user
    }
};

export const signInFail = error => {
    return {
        type: "SIGN_IN_FAIL",
        payload: error
    }
}

export const emailSignInStart = (emailAndPassword) => {
    return { 
        type: "EMAIL_SIGN_IN_START",
        payload: emailAndPassword 
    }
};

export const checkUserSession = () => {
    return {
        type: "CHECK_USER_SESSION"
    }
};

export const signOutStart = () => {
    return {
        type: "SIGN_OUT_START"
    }
};

export const signOutSucces = () => {
    return {
        type: "SIGN_OUT_SUCCES"
    }
};

export const signOutFail = error => {
    return {
        type: "SING_OUT_FAIL",
        payload: error
    }
}

export const signUpStart = (userObj) => {
    return {
        type: "SIGN_UP_START",
        payload: userObj
    }
};

export const signUpSucces = () => {
    return {
        type: "SIGN_UP_SUCCES",
    }
}

export const signUpFail = (error) => {
    return {
        type: "SIGN_UP_FAIL",
        payload: error
    }
}