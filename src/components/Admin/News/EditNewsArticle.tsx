import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { TextEditor } from 'components/TextEditor/TextEditor';
import { FlexContainer } from 'styled/FlexContainer';
import { Input } from 'styled/Input';
import { EditArticleProps } from 'components/Admin/Articles/EditScientificActivity';
import { postsDataService } from 'dataServices/PostsDataService';
import { setNews } from 'store/PostsStore';
import { useDispatch } from 'react-redux';

export const EditNewsArticle: React.FC<EditArticleProps> = ({ setInfoMessage, isOpen = true, article, onSave, toggle }) => {
    const [ subject, setSubject ] = React.useState(article.subject);
    const [ text, setText ] = React.useState(article.text);

    const dispatch = useDispatch();

    const saveArticle = () => {
        onSave({...article, subject, text })
            .catch(err => setInfoMessage(err.message))
            .finally(() => postsDataService.getNews()
                .then(returned => dispatch(setNews(returned))));
        toggle();
    }
    const onChange = ({ target }: React.SyntheticEvent) => {
        const { value } = target as HTMLInputElement;
        setSubject(value);
    };

    return (<Modal isOpen={isOpen} size='lg'>
        <ModalHeader toggle={toggle}>Редактировать</ModalHeader>
        <ModalBody>
            <FlexContainer>
                <Input
                    name='text'
                    value={subject}
                    onChange={onChange}
                    className='edit-article-header'
                    placeholder='Заголовок'
                />
                <TextEditor setInfoMessage={setInfoMessage} onChange={setText} setContents={article.text}/>
            </FlexContainer>
        </ModalBody>
        <ModalFooter>
            <Button color='primary' onClick={saveArticle}>
                Сохранить
            </Button>
            <Button color='secondary' onClick={toggle}>
                Отмена
            </Button>
        </ModalFooter>
    </Modal>);
};