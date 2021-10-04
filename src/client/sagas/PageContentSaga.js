import { put, takeLatest } from 'redux-saga/effects';
import { PAGE_CONTENT, PAGE_CONTENT_SUCCESS, PAGE_CONTENT_ERROR } from '../actionTypes/PageActionTypes';

function* pageContentSaga() {
    try {
        const json = yield fetch('/api/getPageContent')
            .then(response => response.json());
        const result = {
            isSuccess: true
        };
        if (result.isSuccess) {
            yield put({ type: PAGE_CONTENT_SUCCESS, pageInfo: json });
        } else {
            yield put({ type: PAGE_CONTENT_ERROR });
        }
    } catch (err) {
        yield put({ type: PAGE_CONTENT_ERROR });
    }
}

export default function* watchpageContentRequest() {
    yield takeLatest(PAGE_CONTENT, pageContentSaga);
}
