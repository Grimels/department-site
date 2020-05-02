import { Dispatch, Reducer } from 'react';
import { StoreAction } from 'store';

export const SET_ERROR = 'set error';
export const CLEAR_ERROR = 'clear error';

export interface ErrorState {
    error?: string;
    hasError: boolean;
}

export interface ErrorAction extends StoreAction {
    type: string;
    payload: { error?: string };
}

export const initialState: ErrorState = {
    error: undefined,
    hasError: false,
};

export const errorReducer: Reducer<ErrorState, ErrorAction> = (
    state = initialState,
    action: ErrorAction,
) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ERROR:
            return { error: payload.error, hasError: true };
        case CLEAR_ERROR:
            return { error: undefined, hasError: false }
        default:
            return state;
    }
};

export const raiseError = (error: string) => (dispatch: Dispatch<ErrorAction>) =>
    dispatch({ type: SET_ERROR, payload: { error } });

export const clearError = () => (dispatch: Dispatch<ErrorAction>) =>
    dispatch({ type: CLEAR_ERROR, payload: {} });