import { GET_USER_INFO_SUCCESS, UPDATE_USER_OUTLET_SUCCESS } from '../actionTypes/UserInfoActionTypes';
import UserInfoReducer from './UserInfoReducer';
import UserInfoMock from '../mock/UserInfo/UserInfoMock';

describe('Reducer:UserInfoReducer', () => {
    test('Should return intital state', () => {
        const reducer = UserInfoReducer(undefined, {});
        expect(reducer).toEqual({});
    });

    test('Should return success state', () => {
        const reducer = UserInfoReducer(
            {},
            {
                type: GET_USER_INFO_SUCCESS,
                userInfo: UserInfoMock
            }
        );
        expect(reducer).toEqual({ ...UserInfoMock });
    });

    test('Should return success state', () => {
        const reducer = UserInfoReducer(
            {},
            {
                type: UPDATE_USER_OUTLET_SUCCESS,
                userInfo: UserInfoMock
            }
        );
        expect(reducer).toEqual({ ...UserInfoMock });
    });

    test('should return deafult state', () => {
        const reducer = UserInfoReducer();
        expect(reducer).toEqual({});
    });
});
