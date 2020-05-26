import React from 'react';
import {Button, Table} from 'reactstrap';
import { Articles as ArticlesContainer, ScientificArticlesContainer } from 'styled/Admin/Articles';
import { IUser } from 'store/LoginStore';
import { Spinner } from 'styled/Spinner';
import {DeleteUser} from './DeleteUser';

export interface UsersProps {
    userData: IUser;
    users?: IUser[];
    createItemPath: string;
    setInfoMessage: (msg: string) => void;
}

export const Users: React.FC<UsersProps> = ({ setInfoMessage, userData, users }) => {

    const [ { currentUser, action }, setUser ] = React.useState<{
        currentUser?: IUser;
        action?: 'edit' | 'delete';
    }>({});

    const setUserWithAction = (user?: IUser, action?: 'edit' | 'delete') => {
        setUser({ currentUser: user, action });
    };

    if (users == null) {
        return (
            <ArticlesContainer>
                <Spinner/>
            </ArticlesContainer>
        )
    }

    return (
        <ScientificArticlesContainer>
            <Table dark>
                <thead>
                <tr>
                    <th>#</th>
                    <th className='col-sm-7 col-md-7 col-lg-7'>Email</th>
                    <th className='col-sm-2 col-md-2 col-lg-2'></th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={`all-users-${user.email}`}>
                        <td>{index + 1}</td>
                        <td className='col-sm-7 col-md-7 col-lg-7'>
                            {user.email}
                        </td>
                        <td className='col-sm-2 col-md-2 col-lg-2'>
                            {user.email !== userData?.email &&
                            <Button onClick={() => setUserWithAction(user, 'delete')} color='danger'>Удалить</Button>
                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            {action === 'delete' && currentUser != null && (
                <DeleteUser setInfoMessage={setInfoMessage} user={currentUser} toggle={() => setUserWithAction(undefined, undefined)} />
            )}
        </ScientificArticlesContainer>
    )
}