import { PAGE_CONTENT } from '../actionTypes/PageActionTypes';

export const getPageContent = payload => ({
    type: PAGE_CONTENT,
    payload
});