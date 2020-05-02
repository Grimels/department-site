import * as React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { withLogin } from 'components/LoginPage';

import { Text } from 'styled/Text';
import { Profile, ProfileImage, ProfileDataContainer } from 'styled/Admin/Profile';
import { AdminContainer, SideBar, AdminNavBarBrand, SideBarItem, SideBarItemExit } from 'styled/Admin';
import { News } from 'components/Admin/News/News';
import { CreateNewsArticle } from 'components/Admin/News/CreateNewsArticle';
import { CreateScientificArticleLink } from './Articles/CreateScientificArticleLink';

import { ADMIN_SECONDARY_TEXT_COLOR, ADMIN_POSITION_TEXT_COLOR } from 'styled/constants';
import { renderIcon } from 'styled/Icon';

import { IArticle } from 'components/ScientificActivity/Article';
import { ScientificArticle } from './Articles/ScientificArticle';
import { ScientificArticles } from './Articles/ScientificArticles';
import { IUser } from 'store/LoginStore';

import NewsImg from 'assets/icons/news.png';
import ArticleImg from 'assets/icons/article.png';
import LogoutImg from 'assets/icons/logout.png';
import { postsDataService } from 'dataServices/PostsDataService';

import { StoreState } from 'store';
import { setArticles, setNews } from 'store/PostsStore';
import { raiseError } from 'store/ErrorStore';

const LogoutIcon = renderIcon(LogoutImg);

const tabs: { icon: string; name: string; path: string }[] = [
    { icon: NewsImg, name: 'Мои Новости', path: '/admin/news' },
    { icon: ArticleImg, name: 'Мои Статьи', path: '/admin/articles' },
    { icon: NewsImg, name: 'Создать Новость', path: '/admin/create/news' },
    { icon: NewsImg, name: 'Создать Статью', path: '/admin/create/articles' },
];

export const Admin: React.FC<RouteComponentProps & { userData?: IUser, logout: () => void }> = withLogin(props => {
    const {
        userData,
        logout,
        location: { pathname },
    } = props;

    const dispatch = useDispatch();
    const { articles, news } = useSelector((state: StoreState) => state.postsReducer);
    React.useEffect(() => {
        if (!articles) {
            postsDataService.getArticles()
                .then(returnedArticles => dispatch(setArticles(returnedArticles)))
                .catch(error => dispatch(raiseError(error.message)));
        }
    }, [ articles ]);

    React.useEffect(() => {
        if (!news) {
            postsDataService.getNews()
                .then(returnedNews => dispatch(setNews(returnedNews)))
                .catch(error => dispatch(raiseError(error.message)));
        }
    }, [ news ]);

    const isActiveSideBarItem = (path: string) => path === pathname;
    document.title = 'Администратор';

    const renderSideBarTabs = () =>
        tabs.map(tab => {
            const Icon = renderIcon(tab.icon);
            const className = `item ${isActiveSideBarItem(tab.path) ? 'active' : ''}`;
            return (
                <SideBarItem key={tab.path} to={tab.path} className={className}>
                    <Icon className='item-icon'/>
                    {tab.name}
                </SideBarItem>
            );
        });

    const renderProfile = () => (
        <Profile className='item'>
            <ProfileImage src='https://www.shareicon.net/data/512x512/2016/08/18/814068_face_512x512.png'/>
            <ProfileDataContainer>
                <Text margin={{ bottom: '0' }} size='18px' color={ADMIN_SECONDARY_TEXT_COLOR}>
                    {userData.email || ''}
                </Text>
                <Text margin={{ bottom: '0' }} size='16px' color={ADMIN_POSITION_TEXT_COLOR}>
                    Site Administrator
                </Text>
            </ProfileDataContainer>
        </Profile>
    );

    return (
        <AdminContainer>
            <SideBar>
                <AdminNavBarBrand className='item'>Администратор</AdminNavBarBrand>
                {renderProfile()}
                {renderSideBarTabs()}
                <SideBarItemExit onClick={logout}>
                    <LogoutIcon className='item-icon'/>
                    Выход
                </SideBarItemExit>
            </SideBar>
            <Switch>
                <Route path='/admin/create/news' exact component={CreateNewsArticle}/>
                <Route path='/admin/create/articles' exact component={CreateScientificArticleLink}/>

                <Route
                    path='/admin/articles'
                    exact
                    component={() => (
                        <ScientificArticles createItemPath='/articles' articles={articles}>
                            {(article: {}) => <ScientificArticle {...(article as IArticle)} />}
                        </ScientificArticles>
                    )}
                />
                <Route component={() => <News createItemPath='' news={news} />} />
            </Switch>

        </AdminContainer>
    );
});
