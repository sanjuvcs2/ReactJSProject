import { put, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../actionTypes/LoginActionTypes';

function* loginSaga() {
    try {
        const json = yield fetch('/api/getUsername')
            .then(response => response.json());
        const result = {
            isSuccess: true
        };
        if (result.isSuccess) {
            yield put({ type: USER_LOGIN_SUCCESS, userInfo: json });
        } else {
            yield put({ type: USER_LOGIN_ERROR });
        }
    } catch (err) {
        yield put({ type: USER_LOGIN_ERROR });
    }
}

export default function* watchLoginRequest() {
    yield takeLatest(USER_LOGIN, loginSaga);
}
