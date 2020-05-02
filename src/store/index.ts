import 'regenerator-runtime/runtime';
import { compose, createStore, applyMiddleware, Action, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import { languageReducer, LanguageState } from './LanguageStore';
import { loginReducer, LoginState } from './LoginStore';
import { postsReducer, PostsState } from './PostsStore';
import { errorReducer, ErrorState } from './ErrorStore';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreAction extends Action {
    type: string;
    payload: object;
}

export interface StoreState {
    languageReducer: LanguageState;
    loginReducer: LoginState;
    postsReducer: PostsState;
    errorReducer: ErrorState;
}

const reducer = combineReducers({ languageReducer, loginReducer, postsReducer, errorReducer });
const store = (initialState =>
    createStore(reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk))))();

export default store;
