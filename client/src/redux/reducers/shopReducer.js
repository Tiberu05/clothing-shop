const INITIAL_STATE = {
    collections: {},
    isLoading: false,
    error: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_COLLECTIONS_START":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_COLLECTIONS_SUCCES":
            return {
                ...state,
                collections: action.payload,
                isLoading: false,
                error: undefined
            }
        case "GET_COLLECTIONS_FAIL":
            return {
                ...state,
                collections: {},
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    };
};

export default shopReducer;