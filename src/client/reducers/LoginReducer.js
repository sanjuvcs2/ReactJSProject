import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import _find from 'lodash/find';
import { LOGIN_CONTENT_SUCCESS } from '../actionTypes/PageContentActionTypes';
import {
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
    CLEAR_LOGIN_MESSAGE,
    CLEAR_LOGIN_PAGE,
    UPDATE_USER_TYPE,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_ERROR,
    NEW_REGISTER_USER_SUCCESS,
    NEW_REGISTER_USER_ERROR
} from '../actionTypes/LoginActionTypes';
import {
    getLocalization,
    isIndirectUser,
    isPickUpAllowed,
    isZADOrderType,
    isOrderSplitIndirect
} from '../common/UserManager/UserManager';
import { LOGIN_INFO, LOGIN_UID, PAGE_ID, UNIQUE_ID } from '../common/Constants';

const initialState = {
    [PAGE_ID.LOGIN]: {},
    [PAGE_ID.LOGIN_FORGOT]: {},
    [PAGE_ID.LOGIN_RESET]: {},
    [LOGIN_UID.FOOTER]: {},
    isIndirectUser: isIndirectUser(),
    pickUpAllowed: isPickUpAllowed(),
    isZADOrderType: isZADOrderType(),
    isOrderSplitIndirect: isOrderSplitIndirect(),
    message: {
        isSuccess: false,
        content: '',
        error: {}
    }
};

function getFooterComponents(footerData, uid) {
    let footerComponent = _find(footerData, [UNIQUE_ID, uid]);

    if (footerComponent && !_isEmpty(footerComponent.childComponents)) {
        footerComponent = { ...footerComponent, ...footerComponent.childComponents[0] };
        delete footerComponent.childComponents;
    }
    return footerComponent;
}

export default function LoginReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_CONTENT_SUCCESS: {
            const data = _get(action, 'data.components');
            const footer = _find(data, [UNIQUE_ID, LOGIN_UID.FOOTER]) || {};
            const footerChild = footer.childComponents;
            const pageTitle = `${_get(action, 'data.title', '')} ${getLocalization()[LOGIN_INFO.COUNTRY] || ''}`;
            const ourCompany = _find(footerChild, [UNIQUE_ID, LOGIN_UID.OUR_COMPANY]) || {};
            ourCompany.url = (_find(ourCompany.childComponents, [UNIQUE_ID, LOGIN_UID.OUR_COMPANY_URL]) || {}).url;

            const loginData = {
                pageTitle,
                [LOGIN_UID.SITE_LOGO]: _find(data, [UNIQUE_ID, LOGIN_UID.SITE_LOGO]),
                [LOGIN_UID.BG_BANNER]: _find(data, [UNIQUE_ID, LOGIN_UID.BG_BANNER_UID[action.pageId]]),
                [LOGIN_UID.IMPRINT_PARA]: _find(data, [UNIQUE_ID, LOGIN_UID.IMPRINT_PARA]),
                [LOGIN_UID.SELF_REGISTER]: _find(data, [UNIQUE_ID, LOGIN_UID.SELF_REGISTER]),
                [LOGIN_UID.PARA_COMP]: _find(data, [UNIQUE_ID, LOGIN_UID.PARA_COMP]),
                content: _get(action, 'data.localization', {})
            };

            const footerData = {
                [LOGIN_UID.IMPRINT]: _find(footerChild, [UNIQUE_ID, LOGIN_UID.IMPRINT]),
                [LOGIN_UID.OUR_COMPANY]: ourCompany,
                [LOGIN_UID.CONTACT_US]: _find(footerChild, [UNIQUE_ID, LOGIN_UID.CONTACT_US]),
                [LOGIN_UID.TERMS]: getFooterComponents(footerChild, LOGIN_UID.TERMS),
                [LOGIN_UID.PRIVACY]: getFooterComponents(footerChild, LOGIN_UID.PRIVACY),
                [LOGIN_UID.COPY_RIGHT]: footer[LOGIN_UID.COPY_RIGHT],
                content: _get(action, 'data.localization', {})
            };

            return {
                ...state,
                [action.pageId]: loginData,
                [LOGIN_UID.FOOTER]: footerData
            };
        }
        case USER_LOGIN_SUCCESS: {
            const message = {
                isSuccess: true,
                content: (action.data || {}).message
            };
            return {
                ...state,
                message
            };
        }
        case USER_LOGIN_ERROR: {
            const { error = {} } = action.data || {};
            return {
                ...state,
                message: {
                    isSuccess: false,
                    error
                }
            };
        }
        case USER_VERIFY_SUCCESS: {
            const message = {
                isVerifySuccess: true,
                content: (action.data || {}).message
            };
            return {
                ...state,
                message
            };
        }
        case USER_VERIFY_ERROR: {
            const { error = {} } = action.data || {};
            return {
                ...state,
                message: {
                    isVerifySuccess: false,
                    error
                }
            };
        }
        case NEW_REGISTER_USER_SUCCESS: {
            const message = {
                isRegisterSuccess: true,
                isVerifySuccess: true,
                content: (action.data || {}).message
            };
            return {
                ...state,
                message
            };
        }
        case NEW_REGISTER_USER_ERROR: {
            const { error = {} } = action.data || {};
            return {
                ...state,
                message: {
                    isRegisterSuccess: false,
                    isVerifySuccess: true,
                    error
                }
            };
        }
        case CLEAR_LOGIN_MESSAGE: {
            return {
                ...state,
                message: initialState.message
            };
        }
        case CLEAR_LOGIN_PAGE: {
            return initialState;
        }
        case UPDATE_USER_TYPE: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }
}
