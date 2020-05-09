import * as React from 'react';
import { useLanguage } from 'hooks/useLanguage';
import { DefaultPage } from 'components/DefaultPage';
import { UA, RU, ENG } from 'constants/language';
import { Articles } from './Articles';
import { postsDataService } from 'dataServices/PostsDataService';
import { Spinner } from 'styled/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'store';
import { setArticles } from 'store/PostsStore';

export const SCIENTIFIC_ARTICLES_HEADER = {
    [UA]: 'Наукові Статті',
    [RU]: 'Научные Статьи',
    [ENG]: 'Scientific Articles',
};

export const ScientificActivity: React.FC = () => {
    const { language } = useLanguage();

    const dispatch = useDispatch();
    const { articles } = useSelector((state: StoreState) => state.postsReducer);
    React.useEffect(() => {
        if (!articles) {
            postsDataService.getArticles().then(returnedArticles => dispatch(setArticles(returnedArticles)));
        }
    }, [articles]);
    console.log(articles);

    if (!articles) {
        return <Spinner/>;
    }

    const props = {
        header: SCIENTIFIC_ARTICLES_HEADER[language],
        renderElement: () => <Articles items={articles}/>,
    };
    return <DefaultPage>{props}</DefaultPage>;
};
