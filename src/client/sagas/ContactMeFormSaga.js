import { put, takeLatest, call } from 'redux-saga/effects';
import _get from 'lodash/get';
import data from '../mock/ContactMe/ContactMeMock';
import {
    GET_CONTACT_INFO_REQUEST,
    GET_CONTACT_INFO_SUCCESS,
    GET_CONTACT_INFO_ERROR
} from '../actionTypes/ContactMeActionTypes';

function* getContactInfoSaga(action) {
    try {
        const result = data;
        if (result) {
            yield put({ type: GET_CONTACT_INFO_SUCCESS, data: data });
        } else {
            yield put({ type: GET_CONTACT_INFO_ERROR, data: { error: getErrorInfo(result) } });
        }
    } catch (err) {
        yield put({ type: GET_CONTACT_INFO_ERROR });
    }
}

export default function* watchContactInfoRequest() {
    yield takeLatest(GET_CONTACT_INFO_REQUEST, getContactInfoSaga);
}
