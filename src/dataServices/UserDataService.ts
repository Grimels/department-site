import {abstractFetch, DELETE, GET, POST} from 'dataServices/AbstractFetch';
import { ILoginForm } from 'components/LoginPage';
import { IUser } from 'store/LoginStore';
import {RU} from '../constants/language';

export interface IUserDataService {
    getUsers: () => Promise<IUser[]>,
    createUser: (email: string) => Promise<IUser>,
    deleteUser: (id: number) => Promise<void>,
    login: (loginData: ILoginForm) => Promise<IUser>,
    logout: () => Promise<object>
}

const UserDataService: () => IUserDataService = () => {
    const API_USERS = '/users';

    const createUser = async (email: string) => {
        return await abstractFetch(POST, `${API_USERS}`, { email, language: RU }) as Promise<IUser>;
    }

    const getUsers = async () => {
        return await abstractFetch(GET, `${API_USERS}`) as Promise<IUser[]>;
    }

    const login = async (loginData: ILoginForm) => {
        return await fetch(`/api${API_USERS}/login`, {
            method: POST,
            headers: {
                'content-type': 'application/json',
                'host': 'pm-department.herokuapp.com',
            },
            credentials: 'same-origin',
            body: JSON.stringify(loginData),
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(JSON.stringify(response.body));
                }
                return response.json() as Promise<IUser>;
            });
    };

    const deleteUser = async (id: number) => {
        return await abstractFetch(DELETE, `${API_USERS}/${id}`) as Promise<void>;
    }

    const logout = async () => {
        return await abstractFetch(POST, `${API_USERS}/logout`) as Promise<{}>;
    };

    return {
        login,
        logout,
        getUsers,
        createUser,
        deleteUser,
    };
};

const userDataService = UserDataService();
export { userDataService };