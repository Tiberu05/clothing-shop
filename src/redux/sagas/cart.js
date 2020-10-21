import { takeLatest , call, put, all } from 'redux-saga/effects';

import { clearCart } from '../actions/cart';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSucces() {
    yield takeLatest("SIGN_OUT_SUCCES", clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSucces)
    ])
}