
import {
    PAGE_CONTENT_SUCCESS,
    PAGE_CONTENT_ERROR,
} from '../actionTypes/PageActionTypes';

import PageContentReducer from './PageContentReducer';
import dataMock from '../mock/PageContent/PageContent.json';

describe('Reducer:PageContentReducer', () => {
    const data = undefined;
    const isSuccess = undefined;

    test('should return intital state', () => {
        const reducer = PageContentReducer(
            {},
            {
                type: PAGE_CONTENT_SUCCESS,
                dataMock
            }
        );
        expect(reducer).toEqual({ data, isSuccess });
    });

    test('should return intital state', () => {
        const reducer = PageContentReducer(
            {},
            {
                type: PAGE_CONTENT_ERROR
            }
        );
        expect(reducer).toEqual({ isSuccess: undefined });
    });

    test('should return deafult state', () => {
        const reducer = PageContentReducer();
        expect(reducer).toEqual({ isSuccess: false });
    });
});
