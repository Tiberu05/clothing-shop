export const getCollectionsAction = (obj) => async dispatch => {

    dispatch({ type: "GET_COLLECTIONS", payload: obj})
}