import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Articles as ArticlesContainer, ScientificArticlesContainer } from 'styled/Admin/Articles';
import { IArticle } from 'components/ScientificActivity/Article';
import { Spinner } from 'styled/Spinner';
import { Button, Nav, NavItem, Table, NavLink as StrapLink, TabPane, TabContent } from 'reactstrap';
import { postsDataService } from 'dataServices/PostsDataService';
import { EditNewsArticle } from 'components/Admin/News/EditNewsArticle';
import { DeleteArticle } from 'components/Admin/Articles/DeleteArticle';
import styled from 'styled-components';
import { IUser } from 'store/LoginStore';
import { ADMIN_ACTIVE_BG_COLOR } from 'styled/constants';
import { Text } from 'styled/Text';

export interface ArticlesProps {
    userData: IUser,
    news?: IArticle[];
    createItemPath: string;
    setInfoMessage: (msg: string) => void;
}

export const StyledContainer = styled.div`
  background-color: ${ADMIN_ACTIVE_BG_COLOR};
  width: 100%;
  height: 100vh;
  
  .tab-pane, .tab-content, .tab-content div {
    height: 100%;
  }
  
  .nav-item {
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
  
`;

export const News: React.FC<ArticlesProps> = ({ userData, news, createItemPath , setInfoMessage}) => {
    const [activeTab, setActiveTab] = React.useState('1');
    const toggle = (tab: string) => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const [ { currentArticle, action }, setArticle ] = React.useState<{
        currentArticle?: IArticle;
        action?: 'edit' | 'delete';
    }>({});

    const setArticleWithAction = (article?: IArticle, action?: 'edit' | 'delete') => {
        setArticle({ currentArticle: article, action });
    };

    if (news == null) {
        return (
            <ArticlesContainer>
                <Spinner/>
            </ArticlesContainer>
        )
    }

    const renderEmptyList = () => (
        <ArticlesContainer>
            <Text>
                Список пуст. Давайте <NavLink to={`/admin/create${createItemPath}`}>создадим</NavLink>{' '}
                парочку?
            </Text>
        </ArticlesContainer>
    );

    if (!news.length) {
        return renderEmptyList();
    }

    const renderNews = (renderItems: IArticle[]) => {
        if (!renderItems.length) {
            return renderEmptyList();
        }

        return (<ScientificArticlesContainer>
            <Table dark>
                <thead>
                <tr>
                    <th>#</th>
                    <th className='col-sm-7 col-md-7 col-lg-7'>Заголовок</th>
                    <th className='col-sm-2 col-md-2 col-lg-2'/>
                    <th className='col-sm-2 col-md-2 col-lg-2'/>
                </tr>
                </thead>
                <tbody>
                {renderItems.map((article, index) => (
                    <tr key={`all-news-${article.subject}`}>
                        <td>{index + 1}</td>
                        <td className='col-sm-7 col-md-7 col-lg-7'>
                            {article.subject}
                        </td>
                        <td className='col-sm-2 col-md-2 col-lg-2'>
                            <Button color='primary' onClick={() => setArticleWithAction(article, 'edit')}>
                                Изменить
                            </Button>
                        </td>
                        <td className='col-sm-2 col-md-2 col-lg-2'>
                            <Button color='danger' onClick={() => setArticleWithAction(article, 'delete')}>Удалить</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ScientificArticlesContainer>)
    }

    return (
        <StyledContainer>
            {action === 'edit' && currentArticle != null && (
                <EditNewsArticle
                    toggle={() => setArticleWithAction(undefined, undefined)}
                    article={currentArticle}
                    onSave={(article: IArticle) => postsDataService.updateArticle(article)}
                    setInfoMessage={setInfoMessage}
                />
            )}
            {action === 'delete' && currentArticle != null && (
                <DeleteArticle setInfoMessage={setInfoMessage} type='news' article={currentArticle} toggle={() => setArticleWithAction(undefined, undefined)} />
            )}
            <Nav tabs dark>
                <NavItem>
                    <StrapLink
                        className={`${activeTab === '1' && 'active'}`}
                        onClick={() => { toggle('1'); }}
                    >
                        Все Новости
                    </StrapLink>
                </NavItem>
                <NavItem>
                    <StrapLink
                        className={`${activeTab === '2' && 'active'}`}
                        onClick={() => { toggle('2'); }}
                    >
                        Мои Новости
                    </StrapLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {renderNews(news)}
                </TabPane>
                <TabPane tabId="2">
                    {renderNews(news.filter(newsItem => newsItem.user_id === userData.id))}
                </TabPane>
            </TabContent>
        </StyledContainer>);
};
