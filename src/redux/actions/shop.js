export const fetchCollectionsStart = () => {
    return { type: "GET_COLLECTIONS_START" }
};

export const fetchCollectionsSucces = (collections) => {
    return { type: "GET_COLLECTIONS_SUCCES", payload: collections }
};

export const fetchCollectionsFail = (error) => {
    return { type: "GET_COLLECTIONS_FAIL", payload: error}
};


// WITH REDUX THUNK
// export const getCollectionsAction = () => dispatch => {

//     dispatch({ type: "GET_COLLECTIONS_START" });

//     const collectionRef = firestore.collection('collections');

//     collectionRef.get()
//         .then(snapshot => {
//         const collections = convertCollectionsSnapshot(snapshot)
//         dispatch({ type: "GET_COLLECTIONS_SUCCES", payload: collections})
//     }).catch(error => dispatch({ type: "GET_COLLECTIONS_FAIL", payload: error.message}))

    
// }