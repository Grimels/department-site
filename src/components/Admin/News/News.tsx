import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Text } from 'styled/Text';
import { Articles as ArticlesContainer, ScientificArticlesContainer } from 'styled/Admin/Articles';
import { IArticle } from 'components/ScientificActivity/Article';
import { Spinner } from 'styled/Spinner';
import { Button, Table } from 'reactstrap';
import { postsDataService } from 'dataServices/PostsDataService';
import { EditNewsArticle } from 'components/Admin/News/EditNewsArticle';
import { DeleteArticle } from 'components/Admin/Articles/DeleteArticle';

export interface ArticlesProps {
    news?: IArticle[];
    createItemPath: string;
}

export const News: React.FC<ArticlesProps> = ({ news, createItemPath }) => {
    const [ { currentArticle, action }, setArticle ] = React.useState<{
        currentArticle?: IArticle;
        action?: 'edit' | 'delete';
    }>({});

    const setArticleWithAction = (article?: IArticle, action?: 'edit' | 'delete') => {
        setArticle({ currentArticle: article, action });
    };

    const renderSpinner = () => (
        <ArticlesContainer>
            <Spinner/>
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

    if (news == null) {
        return renderSpinner();
    }

    if (!news.length) {
        return renderEmptyList();
    }

    return (
        <>
            {action === 'edit' && currentArticle != null && (
                <EditNewsArticle
                    toggle={() => setArticleWithAction(undefined, undefined)}
                    article={currentArticle}
                    onSave={(article: IArticle) => postsDataService.updateArticle(article)}
                />
            )}
            {action === 'delete' && currentArticle != null && (
                <DeleteArticle type='news' article={currentArticle} toggle={() => setArticleWithAction(undefined, undefined)} />
            )}
            <ScientificArticlesContainer>
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
                    {news.map((article, index) => (
                        <tr key={article.subject}>
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
            </ScientificArticlesContainer>
        </>);
};
