import LoaderReducer from './LoaderReducer';
import { SHOW_LOADER, REMOVE_LOADER } from '../actionTypes/LoaderActionTypes';

describe('Loader Reducer', () => {
    test('should return the initial default state', () => {
        const reducer = LoaderReducer(undefined, {});
        expect(reducer).toBe(false);
    });
    test('should show the loader', () => {
        const reducer = LoaderReducer(true, { type: SHOW_LOADER });
        expect(reducer).toBe(true);
    });
    test('should remove the loader', () => {
        const reducer = LoaderReducer(false, { type: REMOVE_LOADER });
        expect(reducer).toBe(false);
    });
});
