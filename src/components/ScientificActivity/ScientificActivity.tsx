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

const headerByLanguage = {
    [UA]: 'Наукова Діяльність',
    [RU]: 'Научная Деятельность',
    [ENG]: 'Scientific Activity',
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
        header: headerByLanguage[language],
        renderElement: () => <Articles items={articles}/>,
    };
    return <DefaultPage>{props}</DefaultPage>;
};
