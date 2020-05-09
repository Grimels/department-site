import React from 'react';
import { Button, Table } from 'reactstrap';
import { Articles as ArticlesContainer, ScientificArticlesContainer } from 'styled/Admin/Articles';
import { IUser } from 'store/LoginStore';
import { Spinner } from 'styled/Spinner';
import { DeleteArticle } from 'components/Admin/Articles/DeleteArticle';
import { IArticle } from 'components/ScientificActivity/Article';

export interface UsersProps {
    userData: IUser;
    users?: IUser[];
    createItemPath: string;
}

export const Users: React.FC<UsersProps> = ({ users }) => {
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
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={`all-users-${user.id}`}>
                        <td>{index + 1}</td>
                        <td className='col-sm-7 col-md-7 col-lg-7'>
                            {user.email}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ScientificArticlesContainer>
    )
}