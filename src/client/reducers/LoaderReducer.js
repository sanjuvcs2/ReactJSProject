import { SHOW_LOADER, REMOVE_LOADER } from '../actionTypes/LoaderActionTypes';

export default function LoaderReducer(state = false, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return true;
        case REMOVE_LOADER:
            return false;
        default:
            return state;
    }
}
