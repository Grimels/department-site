import * as React from 'react';
import { Table, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { IArticle } from 'components/ScientificActivity/Article';
import { Spinner } from 'styled/Spinner';
import { Text } from 'styled/Text';
import { Articles as ArticlesContainer, ScientificArticlesContainer } from 'styled/Admin/Articles';
import { EditScientificActivity } from './EditScientificActivity';

import { postsDataService } from 'dataServices/PostsDataService';
import { DeleteArticle } from 'components/Admin/Articles/DeleteArticle';

const EDIT = 'edit';
const DELETE = 'delete';

export interface ScientificArticlesProps {
    articles?: IArticle[];
    createItemPath: string;
}

export const ScientificArticles: React.FC<ScientificArticlesProps> = (props) => {
    const { createItemPath, articles } = props;

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

    return (
        <>
            {action === EDIT && currentArticle != null && (
                <EditScientificActivity
                    toggle={() => setArticleWithAction(undefined, undefined)}
                    article={currentArticle}
                    onSave={postsDataService.updateArticle}
                />
            )}
            {action === DELETE && currentArticle != null && (
                <DeleteArticle type='article' article={currentArticle} toggle={() => setArticleWithAction(undefined, undefined)} />
            )}
            <ScientificArticlesContainer>
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
                    {articles.map((article, index) => (
                        <tr key={article.subject}>
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
        </>
    );
};
