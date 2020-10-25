import { all, takeLatest, call, put } from 'redux-saga/effects';
import { firestore , convertCollectionsSnapshot } from '../../firebase/firebase.utils';
import { 
    fetchCollectionsSucces,
    fetchCollectionsFail
} from '../actions/shop';



export function* fetchCollectionsAsync() {

    try {
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshot, snapshot);
        yield put(fetchCollectionsSucces(collectionsMap));
    } catch(err) {
        yield put(fetchCollectionsFail(err));
    }
    
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        "GET_COLLECTIONS_START", 
        fetchCollectionsAsync
    );
};

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
};