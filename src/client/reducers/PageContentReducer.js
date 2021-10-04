
import {
    PAGE_CONTENT_SUCCESS,
    PAGE_CONTENT_ERROR,
} from '../actionTypes/PageActionTypes';

const initialState = {
    isSuccess: false
};

export default function PageReducer(state = initialState, action = {}) {
    switch (action.type) {
        case PAGE_CONTENT_SUCCESS:
            return {
                ...state,
                data: action.pageInfo,
                isSuccess: action.isSuccess
            };
        case PAGE_CONTENT_ERROR:
            return {
                ...state,
                isSuccess: action.isSuccess
            };
        default:
            return state;
    }
}
