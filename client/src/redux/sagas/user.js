import { takeLatest, put, all, call } from 'redux-saga/effects';

import { auth, getCurrentUser, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { signInSucces, signInFail, signOutSucces, signOutFail, signUpSucces, signUpFail } from '../actions/auth';


export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        const userData = {
            id: userSnapshot.id,
            ...userSnapshot.data()
        };
        yield put(signInSucces(userData));
    } catch(error) {
        yield put(signInFail(error.message));
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest("GOOGLE_SIGN_IN_START", signInWithGoogle)
}


export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        const userData = {
            id: userSnapshot.id,
            ...userSnapshot.data()
        };
        yield put(signInSucces(userData));
    } catch(error) {
        yield put(signInFail(error.message))
    }
}


export function* onEmailSignInStart() {
    yield takeLatest("EMAIL_SIGN_IN_START", signInWithEmail)
}




export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        const userData = {
            id: userSnapshot.id,
            ...userSnapshot.data()
        };
        yield put(signInSucces(userData));
    } catch(error) {
        yield signInFail(error.message)
    }
}

export function* onCheckUserSession() {
    yield takeLatest("CHECK_USER_SESSION", isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSucces())
    }catch (error) {
        yield put(signOutFail(error.message))
    }
}

export function* signOutStart() {
    yield takeLatest("SIGN_OUT_START", signOut)
}


export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);

        yield call(createUserProfileDocument, user, { displayName });

        yield put(signUpSucces());
        yield isUserAuthenticated();
    } catch (error) {
        yield put(signUpFail(error.message))
    }
}

export function* signUpStart() {
    yield takeLatest("SIGN_UP_START", signUp)
}




export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(signOutStart), 
        call(signUpStart)])
};