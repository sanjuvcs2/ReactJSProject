import { GET_USER_INFO_REQUEST } from '../actionTypes/UserInfoActionTypes';

const getUserDetails = payload => ({
    type: GET_USER_INFO_REQUEST,
    payload
});

export default getUserDetails;
