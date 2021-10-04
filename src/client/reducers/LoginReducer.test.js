import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
} from '../actionTypes/LoginActionTypes';
import LoginReducer from './LoginReducer';

describe('Reducer:LoginReducer', () => {
    const data = undefined;
    const isSuccess = undefined;
    test('should return intital state', () => {
        const reducer = LoginReducer(
            {},
            {
                type: USER_LOGIN_SUCCESS,
                data
            }
        );
        expect(reducer).toEqual({ data, isSuccess });
    });

    test('should return intital state', () => {
        const reducer = LoginReducer(
            {},
            {
                type: USER_LOGIN_ERROR
            }
        );
        expect(reducer).toEqual({ isSuccess: false });
    });

    test('should return deafult state', () => {
        const reducer = LoginReducer();
        expect(reducer).toEqual({ isSuccess: false });
    });
});
