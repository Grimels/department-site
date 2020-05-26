import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { raiseError } from 'store/ErrorStore';
import { setUsers} from 'store/PostsStore';
import {IUser} from 'store/LoginStore';
import {userDataService} from '../../../dataServices/UserDataService';

export interface DeleteUserProps {
    user: IUser;
    toggle: () => void;
    isOpen?: boolean;
    setInfoMessage: (msg: string) => void;
}

export const DeleteUser: React.FC<DeleteUserProps> = ({ setInfoMessage, isOpen = true, user, toggle }) => {
    const dispatch = useDispatch();

    return (
        <Modal isOpen={isOpen} dark>
            <ModalHeader toggle={toggle}>Удалить пользователя</ModalHeader>
            <ModalBody>
                Вы уверены что хотите удалить пользователя <strong>{user.email}</strong>?
            </ModalBody>
            <ModalFooter>
                <Button
                    color='danger'
                    onClick={() => {
                        user && userDataService
                            .deleteUser(user.id)
                            .then(() => setInfoMessage('Пользователь успешно удален.'))
                            .catch(error => dispatch(raiseError(error.message)))
                            .finally(() => {
                                userDataService.getUsers()
                                    .then(users => dispatch(setUsers(users)))
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