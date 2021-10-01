import { SHOW_LOADER, REMOVE_LOADER } from '../actionTypes/LoaderActionTypes';
import { showLoader, removeLoader } from './LoaderAction';

describe('Loader Actions', () => {
    let action;

    describe('show the loader', () => {
        test('show loader', () => {
            action = showLoader();
            expect(action.type).toBe(SHOW_LOADER);
        });

        test('hide the loader', () => {
            action = removeLoader();
            expect(action.type).toBe(REMOVE_LOADER);
        });
    });
});
