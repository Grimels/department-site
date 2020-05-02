import { Dispatch, Reducer } from 'react';
import { StoreAction } from 'store';

export const SET_DATA = 'set data';

export interface LoginState {
    isLoggedIn: Boolean;
    error?: Error;
    userData?: IUser;
}

export interface IUser {
    id: number;
    email: string;
    isAdmin: boolean;
}

export interface LoginAction extends StoreAction {
    type: string;
    payload: LoginState;
}

export const initialState: LoginState = {
    isLoggedIn: false,
    error: undefined,
    userData: undefined,
};

export const loginReducer: Reducer<LoginState, LoginAction> = (
    state = initialState,
    action: LoginAction,
) => {
    const {type, payload} = action;
    switch (type) {
        case SET_DATA:
            return {...payload};
        default:
            return state;
    }
};

export const setIsLoggedIn = (isLoggedIn: Boolean, userData?: IUser, error = undefined) => (dispatch: Dispatch<LoginAction>) =>
    dispatch({type: SET_DATA, payload: {isLoggedIn, userData, error}});
