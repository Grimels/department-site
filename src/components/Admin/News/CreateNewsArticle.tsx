import * as React from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Button } from 'reactstrap';
import { TextEditor } from 'components/TextEditor/TextEditor';
import {
    CreateContainer,
    CreateArticleHeader,
    EditorContainer,
    CreateArticleFooter,
} from 'styled/Admin/CreateArticle';
import { Input } from 'styled/Input';

import { ICreateArticleRequest, postsDataService } from 'dataServices/PostsDataService';
import { setNews } from 'store/PostsStore';
import { raiseError } from 'store/ErrorStore';

export const CreateNewsArticle: React.FC = () => {
    const [ header, setHeader ] = useState<string>('');
    const [ body, setBody ] = useState<string>('');

    const dispatch = useDispatch();

    const onHeaderChange = ({ target }: React.SyntheticEvent) => {
        const { value } = target as HTMLInputElement;
        setHeader(value);
    };

    const onSave = async () => {
        const article: ICreateArticleRequest = {
            subject: header,
            text: body,
            type_id: 1,
            language: 'ru',
            imageIds: []
        };

        postsDataService.createArticle(article)
            .then(() => alert('Новость добавлено!'))
            .then(() => postsDataService.getNews())
            .then(returnedNews => dispatch(setNews(returnedNews)))
            .catch(error => dispatch(raiseError(error.message)));
    };

    return (
        <CreateContainer>
            <CreateArticleHeader>Создать Новость</CreateArticleHeader>
            <EditorContainer>
                <Input name='text' className='article-header' placeholder='Заголовок' onChange={onHeaderChange}/>
                <TextEditor onChange={setBody}/>
            </EditorContainer>
            <CreateArticleFooter>
                <Button color='success' onClick={onSave}>Создать</Button>
            </CreateArticleFooter>
        </CreateContainer>
    );
};
