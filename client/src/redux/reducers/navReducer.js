const INITIAL_STATE ={
    navMenuOn: false
}

const navReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_NAV_MENU":
            return {...state, navMenuOn: !state.navMenuOn }
        default:
            return state;
    }
};

export default navReducer;