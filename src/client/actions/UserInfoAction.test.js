import getUserDetails from './UserInfoAction';
import { GET_USER_INFO_REQUEST } from '../actionTypes/UserInfoActionTypes';

describe('UserInfoAction: ', () => {
    let UserInfoAction;

    test('should return the respective GET_USER_INFO_REQUEST action type for the invoked action method', () => {
        UserInfoAction = getUserDetails();
        expect(UserInfoAction.type).toBe(GET_USER_INFO_REQUEST);
    });
});
