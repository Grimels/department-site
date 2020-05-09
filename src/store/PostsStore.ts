import { Dispatch, Reducer } from 'react';
import { StoreAction } from 'store';
import { IArticle } from 'components/ScientificActivity/Article';
import { IUser } from 'store/LoginStore';

export const SET_NEWS = 'set news';
export const SET_ARTICLES = 'set articles';
export const SET_USERS = 'set users';

export interface PostsState {
    articles?: IArticle[];
    news?: IArticle[];
    users?: IUser[];
}

export interface PostsAction extends StoreAction {
    type: 'set news' | 'set articles';
    payload: { posts: IArticle[] };
}

export interface UsersAction extends StoreAction {
    type: 'set users';
    payload: { users: IUser[] };
}

export const initialState: PostsState = {
    news: undefined,
    articles: undefined,
    users: undefined,
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
    state = initialState,
    action: PostsAction | UsersAction,
) => {
    const { type } = action;
    switch (type) {
        case SET_ARTICLES:
            return { ...state, articles: (action as PostsAction).payload.posts };
        case SET_NEWS:
            return { ...state, news: (action as PostsAction).payload.posts };
        case SET_USERS:
            return { ...state, users: (action as UsersAction).payload.users }
        default:
            return state;
    }
};

export const setNews = (news: IArticle[]) => (dispatch: Dispatch<PostsAction>) =>
    dispatch({ type: SET_NEWS, payload: { posts: news } });

export const setArticles = (articles: IArticle[]) => (dispatch: Dispatch<PostsAction>) =>
    dispatch({ type: SET_ARTICLES, payload: { posts: articles } });

export const setUsers = (users: IUser[]) => (dispatch: Dispatch<UsersAction>) =>
    dispatch({ type: SET_USERS, payload: { users: users } });