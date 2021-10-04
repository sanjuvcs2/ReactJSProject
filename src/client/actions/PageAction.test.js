import { PAGE_CONTENT } from '../actionTypes/PageActionTypes';
import { getPageContent } from './PageAction';

describe('PAGE_CONTENT: ', () => {
    let action;
    test('should return the respective PAGE_CONTENT action type for the invoked action method', () => {
        action = getPageContent();
        expect(action.type).toBe(PAGE_CONTENT);
    });
});