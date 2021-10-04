import {
    getContactMeFormData,
    updateContactMeInfo,
    updateContactMeConcern,
    submitContactMeForm,
    showConatctMe
} from './ContactMeAction';
import {
    GET_CONTACT_INFO_REQUEST,
    UPDATE_CONTACT_INFO,
    UPDATE_CONTACT_INFO_CONCERN,
    SHOW_CONTACT_INFO_FORM,
    SUBMIT_CONTACT_INFO_FORM
} from '../actionTypes/ContactMeActionTypes';

describe('ContactMeAction: ', () => {
    let ContactMeAction;

    test('should return the respective GET_CONTACT_INFO_REQUEST action type for the invoked action method', () => {
        ContactMeAction = getContactMeFormData();
        expect(ContactMeAction.type).toBe(GET_CONTACT_INFO_REQUEST);
    });

    test('should return the respective UPDATE_CONTACT_INFO action type for the invoked action method', () => {
        ContactMeAction = updateContactMeInfo();
        expect(ContactMeAction.type).toBe(UPDATE_CONTACT_INFO);
    });

    test('should return the respective UPDATE_CONTACT_INFO_CONCERN action type for the invoked action method', () => {
        ContactMeAction = updateContactMeConcern();
        expect(ContactMeAction.type).toBe(UPDATE_CONTACT_INFO_CONCERN);
    });

    test('should return the respective SUBMIT_CONTACT_INFO_FORM action type for the invoked action method', () => {
        ContactMeAction = submitContactMeForm();
        expect(ContactMeAction.type).toBe(SUBMIT_CONTACT_INFO_FORM);
    });

    test('should return the respective SHOW_CONTACT_INFO_FORM action type for the invoked action method', () => {
        ContactMeAction = showConatctMe();
        expect(ContactMeAction.type).toBe(SHOW_CONTACT_INFO_FORM);
    });
});
