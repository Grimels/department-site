import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { IArticle } from 'components/ScientificActivity/Article';
import { ScientificArticlesContainer } from 'styled/ScientificActivity/ScientificActivity';
import { Input } from 'styled/Input';
import { useDispatch } from 'react-redux';
import { postsDataService } from 'dataServices/PostsDataService';
import { setArticles } from 'store/PostsStore';

export interface EditArticleProps {
    article: IArticle;
    onSave: (article: IArticle) => Promise<IArticle>;
    toggle: () => void;
    isOpen?: boolean;
    setInfoMessage: (msg: string) => void;
}

export const EditScientificActivity: React.FC<EditArticleProps> = ({ setInfoMessage, isOpen = true, article, onSave, toggle }) => {
    const [ subject, setSubject ] = React.useState(article.subject);
    const [ text, setText ] = React.useState(article.text);

    const dispatch = useDispatch();

    const onChange = ({ target }: React.SyntheticEvent) => {
        const { name, value } = target as HTMLInputElement;

        if (name === 'subject') {
            setSubject(value);
        } else if (name === 'text') {
            setText(value);
        }
    };

    return (
        <Modal isOpen={isOpen} dark>
            <ModalHeader toggle={toggle}>Редактировать</ModalHeader>
            <ModalBody>
                <ScientificArticlesContainer>
                    <Input
                        name='text'
                        value={text}
                        onChange={onChange}
                        className='edit-article-header'
                        placeholder='Заголовок'
                    />
                    <Input
                        name='subject'
                        value={subject}
                        onChange={onChange}
                        className='edit-article-header'
                        placeholder='Ссылка'
                    />
                </ScientificArticlesContainer>
            </ModalBody>
            <ModalFooter>
                <Button
                    color='primary'
                    onClick={() => {
                        article && onSave({ ...article, subject, text })
                            .catch(error => setInfoMessage(error.message))
                            .finally(() => postsDataService.getArticles()
                            .then(returned => dispatch(setArticles(returned))));
                        toggle();
                    }
                    }
                >
                    Сохранить
                </Button>
                <Button color='secondary' onClick={toggle}>
                    Отмена
                </Button>
            </ModalFooter>
        </Modal>
    );
};
