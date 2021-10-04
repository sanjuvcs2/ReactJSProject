import {
    GET_CONTACT_INFO_REQUEST,
    UPDATE_CONTACT_INFO,
    UPDATE_CONTACT_INFO_CONCERN,
    SHOW_CONTACT_INFO_FORM,
    SUBMIT_CONTACT_INFO_FORM
} from '../actionTypes/ContactMeActionTypes';

export const getContactMeFormData = payload => ({
    type: GET_CONTACT_INFO_REQUEST,
    payload
});

export const updateContactMeInfo = payload => ({
    type: UPDATE_CONTACT_INFO,
    payload
});

export const updateContactMeConcern = payload => ({
    type: UPDATE_CONTACT_INFO_CONCERN,
    payload
});

export const submitContactMeForm = payload => ({
    type: SUBMIT_CONTACT_INFO_FORM,
    payload
});

export const showConatctMe = () => ({
    type: SHOW_CONTACT_INFO_FORM
});
