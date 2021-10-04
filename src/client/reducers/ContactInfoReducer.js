import {
    GET_CONTACT_INFO_SUCCESS,
    SHOW_CONTACT_INFO_FORM,
} from '../actionTypes/ContactMeActionTypes';

export default function ContactInfoReducer(state = { showContactForm: true }, action = {}) {
    switch (action.type) {
        case GET_CONTACT_INFO_SUCCESS: {
            const options = action.data.entries;
            options[0].selected = true;
            return {
                options
            };
        }

        case SHOW_CONTACT_INFO_FORM: {
            return {
                ...state,
                showContactForm: true
            };
        }
        default:
            return state;
    }
}
