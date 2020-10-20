import { firestore, convertCollectionsSnapshot } from '../../firebase/firebase.utils';


export const getCollectionsAction = () => dispatch => {

    dispatch({ type: "GET_COLLECTIONS_START" });

    const collectionRef = firestore.collection('collections');

    collectionRef.get()
        .then(snapshot => {
        const collections = convertCollectionsSnapshot(snapshot)
        dispatch({ type: "GET_COLLECTIONS_SUCCES", payload: collections})
    }).catch(error => dispatch({ type: "GET_COLLECTIONS_FAIL", payload: error.message}))

    
}