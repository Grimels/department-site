import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { setUsers } from 'store/PostsStore';
import { userDataService } from 'dataServices/UserDataService';
import { Input } from 'styled/Input';
import {
    CreateArticleFooter,
    CreateArticleHeader,
    CreateContainer,
    ScientificArticleContainer
} from 'styled/Admin/CreateArticle';
import { emailValidator } from 'utils/validateFormValues';

export interface CreateUserProps {
    isOpen?: boolean;
    setInfoMessage: (msg: string) => void;
}

export const CreateUser: React.FC<CreateUserProps> = ({ setInfoMessage }) => {
    const dispatch = useDispatch();
    const [ email, setEmail ] = React.useState('');

    const onChange = ({ target }: React.SyntheticEvent) => {
        const { value } = target as HTMLInputElement;
        setEmail(value);
    };

    const onSave = () => {
        userDataService.createUser(email)
            .then(() => {
                setInfoMessage(`Пользователь успешно создан! На почту ${email} отправлено сообщение с данными для входа!`);
            })
            .then(() => userDataService.getUsers())
            .then(returnedNews => dispatch(setUsers(returnedNews)))
            .catch(error => {
                console.log(error.toString())
                setInfoMessage(error.toString())
            });
    };

    return (
        <CreateContainer>
            <CreateArticleHeader>Создать Пользователя</CreateArticleHeader>
            <ScientificArticleContainer>
                <Input name='email' className='article-header' placeholder='Введите адрес электронной почты' value={email} onChange={onChange}/>
            </ScientificArticleContainer>
            <CreateArticleFooter>
                <Button color='success' onClick={onSave} disabled={!emailValidator(email)}>Создать</Button>
            </CreateArticleFooter>
        </CreateContainer>
    );
};