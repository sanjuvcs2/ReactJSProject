import { fork } from 'redux-saga/effects';
import watchUserInfoRequest from './UserInfoSaga';
import watchLoginRequest from './LoginSaga';
import watchContactInfoRequest from './ContactMeFormSaga';
import watchpageContentRequest from './PageContentSaga';

export default function* rootSaga() {
    yield* [
        fork(watchUserInfoRequest),
        fork(watchLoginRequest),
        fork(watchpageContentRequest),
        fork(watchContactInfoRequest)
    ];
}
