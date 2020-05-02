import Cookies from 'js-cookie';

import { abstractFetch, POST } from 'dataServices/AbstractFetch';
import { ILoginForm } from 'components/LoginPage';
import { IUser } from 'store/LoginStore';

export interface IUserDataService {
    login: (loginData: ILoginForm) => Promise<IUser>,
    logout: () => Promise<object>
}

const UserDataService: () => IUserDataService = () => {
    const API_USERS = '/users';

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

    const logout = async () => {
        return await abstractFetch(POST, `${API_USERS}/logout`) as Promise<{}>;
    };

    return {
        login,
        logout
    };
};

const userDataService = UserDataService();
export { userDataService };