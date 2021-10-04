import { USER_LOGIN } from '../actionTypes/LoginActionTypes';
import { getUserDetails } from './LoginAction';

describe('USER_LOGIN: ', () => {
    let action;

    test('should return the respective USER_LOGIN action type for the invoked action method', () => {
        action = getUserDetails();
        expect(action.type).toBe(USER_LOGIN);
    });
});
