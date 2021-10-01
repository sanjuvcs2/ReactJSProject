import { GET_USER_INFO_SUCCESS, UPDATE_USER_OUTLET_SUCCESS } from '../actionTypes/UserInfoActionTypes';

export default function UserInfoReducer(state = {}, action = {}) {
    switch (action.type) {
        case GET_USER_INFO_SUCCESS:
            return {
                ...action.userInfo
            };
        case UPDATE_USER_OUTLET_SUCCESS:
            return {
                ...action.userInfo
            };
        default:
            return state;
    }
}
