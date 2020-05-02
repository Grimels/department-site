import { Dispatch, Reducer } from 'react';
import { StoreAction } from 'store';
import { IArticle } from 'components/ScientificActivity/Article';

export const SET_NEWS = 'set news';
export const SET_ARTICLES = 'set articles';

export interface PostsState {
    articles?: IArticle[];
    news?: IArticle[];
}

export interface PostsAction extends StoreAction{
    type: 'set news' | 'set articles';
    payload: { posts: IArticle[] };
}

export const initialState: PostsState = {
    news: undefined,
    articles: undefined,
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
    state = initialState,
    action: PostsAction,
) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ARTICLES:
            return { ...state, articles: payload.posts };
        case SET_NEWS:
            return { ...state, news: payload.posts };
        default:
            return state;
    }
};

export const setNews = (news: IArticle[]) => (dispatch: Dispatch<PostsAction>) =>
    dispatch({ type: SET_NEWS, payload: { posts: news } });

export const setArticles = (articles: IArticle[]) => (dispatch: Dispatch<PostsAction>) =>
    dispatch({ type: SET_ARTICLES, payload: { posts: articles } });