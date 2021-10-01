import { fork } from 'redux-saga/effects';
import watchUserInfoRequest from './UserInfoSaga';

export default function* rootSaga() {
    yield* [
        fork(watchUserInfoRequest)
    ];
}
