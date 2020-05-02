import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from 'hooks/useLanguage';

import { DefaultPage } from 'components/DefaultPage';
import { HEADER_BY_LANG } from 'components/News/constants';
import { NewsContainer } from 'components/News/NewsContainer';
import { Spinner } from 'styled/Spinner';

import { postsDataService } from 'dataServices/PostsDataService';
import { StoreState } from 'store';
import { setNews } from 'store/PostsStore';

export const News: React.FC = () => {
    const { language } = useLanguage();

    const dispatch = useDispatch();
    const { news } = useSelector((state: StoreState) => state.postsReducer);
    React.useEffect(() => {
        if (!news) {
            postsDataService.getNews()
                .then(returnedNews => dispatch(setNews(returnedNews)));
        }
    }, [ news ]);

    if (!news) {
        return <Spinner/>;
    }

    const props = {
        header: HEADER_BY_LANG[language],
        renderElement: () => <NewsContainer news={news}/>,
    };
    return <DefaultPage>{props}</DefaultPage>;
};