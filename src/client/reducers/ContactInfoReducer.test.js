import {
    GET_CONTACT_INFO_SUCCESS,
    SHOW_CONTACT_INFO_FORM,
} from '../actionTypes/ContactMeActionTypes';
import ContactInfoReducer from './ContactInfoReducer';
import data from '../mock/ContactMe/ContactMeMock';

describe('Reducer:ContactInfoReducer', () => {
    const options = [
        {
            code: '001',
            codeGroup: '123',
            shortText: 'Kundenstammdaten',
            selected: true
        },
        {
            code: '002',
            codeGroup: 'ZW2WEB',
            shortText: 'Produktinformationen'
        },
        {
            code: '003',
            codeGroup: 'ZW2WEB',
            shortText: 'Geräteinformationen'
        },
        {
            code: '004',
            codeGroup: 'ZW2WEB',
            shortText: 'Kundenberateranfrage'
        }
    ];
    test('should return intital state', () => {
        const reducer = ContactInfoReducer(
            {},
            {
                type: GET_CONTACT_INFO_SUCCESS,
                data
            }
        );
        expect(reducer).toEqual({ options });
    });

    test('should return intital state', () => {
        const reducer = ContactInfoReducer(
            {},
            {
                type: SHOW_CONTACT_INFO_FORM
            }
        );
        expect(reducer).toEqual({ showContactForm: true });
    });

    test('should return deafult state', () => {
        const reducer = ContactInfoReducer();
        expect(reducer).toEqual({ showContactForm: true });
    });
});
