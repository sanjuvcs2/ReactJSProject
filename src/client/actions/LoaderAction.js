import { SHOW_LOADER, REMOVE_LOADER } from '../actionTypes/LoaderActionTypes';

export const showLoader = () => ({
    type: SHOW_LOADER
});

export const removeLoader = () => ({
    type: REMOVE_LOADER
});
