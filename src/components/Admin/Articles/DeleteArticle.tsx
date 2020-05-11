import { IArticle } from 'components/ScientificActivity/Article';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { raiseError } from 'store/ErrorStore';
import { postsDataService } from 'dataServices/PostsDataService';
import { setArticles, setNews } from 'store/PostsStore';

export interface DeleteArticleProps {
    type: 'news' | 'article',
    article: IArticle;
    toggle: () => void;
    isOpen?: boolean;
    setInfoMessage: (msg: string) => void;
}

export const DeleteArticle: React.FC<DeleteArticleProps> = ({ setInfoMessage, type, isOpen = true, article, toggle }) => {
    const dispatch = useDispatch();

    return (
        <Modal isOpen={isOpen} dark>
            <ModalHeader toggle={toggle}>Удалить запись</ModalHeader>
            <ModalBody>
                Вы уверены что хотите удалить запись "<strong>{article.subject}</strong>"?
            </ModalBody>
            <ModalFooter>
                <Button
                    color='danger'
                    onClick={() => {
                        article && postsDataService
                            .deleteArticle(article.id)
                            .then(() => setInfoMessage('Запись успешно удалена.'))
                            .catch(error => dispatch(raiseError(error.message)))
                            .finally(() => {
                                if(type === 'news') {
                                    postsDataService.getNews()
                                        .then(returned => dispatch(setNews(returned)));
                                }
                                postsDataService.getArticles()
                                    .then(returned => dispatch(setArticles(returned)));
                            });
                        toggle();
                    }
                    }
                >
                    Удалить
                </Button>
                <Button color='primary' onClick={toggle}>
                    Отмена
                </Button>
            </ModalFooter>
        </Modal>
    );
};