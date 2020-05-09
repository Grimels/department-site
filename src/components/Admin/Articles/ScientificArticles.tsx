import * as React from 'react';
import { Table, Button, NavItem, NavLink as StrapLink, Nav, TabContent, TabPane } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { IArticle } from 'components/ScientificActivity/Article';
import { Spinner } from 'styled/Spinner';
import { Text } from 'styled/Text';
import { Articles as ArticlesContainer, ScientificArticlesContainer } from 'styled/Admin/Articles';
import { EditScientificActivity } from './EditScientificActivity';

import { postsDataService } from 'dataServices/PostsDataService';
import { DeleteArticle } from 'components/Admin/Articles/DeleteArticle';
import { IUser } from 'store/LoginStore';
import { StyledContainer } from 'components/Admin/News/News';

const EDIT = 'edit';
const DELETE = 'delete';

export interface ScientificArticlesProps {
    userData: IUser,
    articles?: IArticle[];
    createItemPath: string;
    setInfoMessage: (msg: string) => void;
}

export const ScientificArticles: React.FC<ScientificArticlesProps> = (props) => {
    const { createItemPath, articles, userData, setInfoMessage } = props;
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

    const renderSpinner = () => (
        <ArticlesContainer>
            <Spinner />
        </ArticlesContainer>
    );

    const renderEmptyList = () => (
        <ArticlesContainer>
            <Text>
                Список пуст. Давайте <NavLink to={`/admin/create${createItemPath}`}>создадим</NavLink>{' '}
                парочку?
            </Text>
        </ArticlesContainer>
    );

    if (articles == null) {
        return renderSpinner();
    }

    if (!articles.length) {
        return renderEmptyList();
    }

    const renderArticles = (renderItems: IArticle[]) => {
        if (!renderItems.length) {
            return renderEmptyList();
        }
        return <ScientificArticlesContainer>
            <Table dark>
                <thead>
                <tr>
                    <th>#</th>
                    <th className='col-sm-7 col-md-7 col-lg-7'>Ссылка</th>
                    <th className='col-sm-2 col-md-2 col-lg-2'/>
                    <th className='col-sm-2 col-md-2 col-lg-2'/>
                </tr>
                </thead>
                <tbody>
                {renderItems.map((article, index) => (
                    <tr key={`article-${article.subject}`}>
                        <td>{index + 1}</td>
                        <td className='col-sm-7 col-md-7 col-lg-7'>
                            <a href={article.subject} target='_blank'>
                                {article.text}
                            </a>
                        </td>
                        <td className='col-sm-2 col-md-2 col-lg-2'>
                            <Button onClick={() => setArticleWithAction(article, EDIT)} color='primary'>
                                Изменить
                            </Button>
                        </td>
                        <td className='col-sm-2 col-md-2 col-lg-2'>
                            <Button onClick={() => setArticleWithAction(article, DELETE)} color='danger'>Удалить</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ScientificArticlesContainer>
    }

    return (
        <StyledContainer>
            {action === EDIT && currentArticle != null && (
                <EditScientificActivity
                    toggle={() => setArticleWithAction(undefined, undefined)}
                    article={currentArticle}
                    onSave={postsDataService.updateArticle}
                    setInfoMessage={setInfoMessage}
                />
            )}
            {action === DELETE && currentArticle != null && (
                <DeleteArticle setInfoMessage={setInfoMessage} type='article' article={currentArticle} toggle={() => setArticleWithAction(undefined, undefined)} />
            )}
            <Nav tabs dark>
                <NavItem>
                    <StrapLink
                        className={`${activeTab === '1' && 'active'}`}
                        onClick={() => { toggle('1'); }}
                    >
                        Все Статьи
                    </StrapLink>
                </NavItem>
                <NavItem>
                    <StrapLink
                        className={`${activeTab === '2' && 'active'}`}
                        onClick={() => { toggle('2'); }}
                    >
                        Мои Статьи
                    </StrapLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {renderArticles(articles)}
                </TabPane>
                <TabPane tabId="2">
                    {renderArticles(articles.filter(article => userData.id === article.user_id))}
                </TabPane>
            </TabContent>
        </StyledContainer>
    );
};
