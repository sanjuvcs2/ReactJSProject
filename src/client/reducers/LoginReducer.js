
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
} from '../actionTypes/LoginActionTypes';

const initialState = {
    isSuccess: false
};

export default function LoginReducer(state = initialState, action = {}) {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                data: action.userInfo,
                isSuccess: action.isSuccess
            };
        case USER_LOGIN_ERROR:
            return {
                ...state,
                isSuccess: false
            };
        default:
            return state;
    }
}
