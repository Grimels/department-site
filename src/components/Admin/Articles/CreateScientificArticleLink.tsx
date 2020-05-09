import * as React from 'react';
import { Button } from 'reactstrap';

import {
    CreateContainer,
    CreateArticleHeader,
    CreateArticleFooter,
    ScientificArticleContainer,
} from 'styled/Admin/CreateArticle';
import { Input } from 'styled/Input';

import { ICreateArticleRequest, postsDataService } from 'dataServices/PostsDataService';
import { setNews } from 'store/PostsStore';
import { raiseError } from 'store/ErrorStore';
import { useDispatch } from 'react-redux';

export const CreateScientificArticleLink: React.FC<{ setInfoMessage: (msg: string) => void; }> = ({ setInfoMessage }) => {
    const [ subject, setSubject ] = React.useState('');
    const [ text, setText ] = React.useState('');

    const dispatch = useDispatch();

    const onSave = () => {
        const article: ICreateArticleRequest = {
            subject,
            text,
            type_id: 2,
            language: 'ru',
            imageIds: []
        };

        postsDataService.createArticle(article)
            .then(() => {
                setSubject('');
                setText('');
                setInfoMessage('Ссылку на статью успешно добавлено!');
            })
            .then(() => postsDataService.getArticles())
            .then(returnedNews => dispatch(setNews(returnedNews)))
            .catch(error => setInfoMessage(error.message));
    };

    const onChange = ({ target }: React.SyntheticEvent) => {
        const { name, value } = target as HTMLInputElement;

        if (name === 'subject') {
            setSubject(value);
        } else if (name === 'text') {
            setText(value);
        }
    };

    return (
        <CreateContainer>
            <CreateArticleHeader>Создать Статью</CreateArticleHeader>
            <ScientificArticleContainer>
                <Input name='text' className='article-header' placeholder='Заголовок' onChange={onChange}/>
                <Input name='subject' className='article-header' placeholder='Ссылка' onChange={onChange}/>
            </ScientificArticleContainer>
            <CreateArticleFooter>
                <Button color='success' onClick={onSave}>Создать</Button>
            </CreateArticleFooter>
        </CreateContainer>
    );
};
