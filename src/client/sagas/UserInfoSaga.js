import { put, takeLatest } from 'redux-saga/effects';

import { GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR } from '../actionTypes/UserInfoActionTypes';
import UserInfoMock from '../mock/UserInfo/UserInfoMock';

function* userInfoSaga() {
    try {
        const result = {
            isSuccess: true
        };
        if (result.isSuccess) {
            yield put({ type: GET_USER_INFO_SUCCESS, userInfo: UserInfoMock });
        } else {
            yield put({ type: GET_USER_INFO_ERROR });
        }
    } catch (err) {
        yield put({ type: GET_USER_INFO_ERROR });
    }
}

export default function* watchUserInfoRequest() {
    yield takeLatest(GET_USER_INFO_REQUEST, userInfoSaga);
}
