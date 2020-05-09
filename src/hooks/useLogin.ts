import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IUser, setIsLoggedIn } from 'store/LoginStore';
import { StoreState } from 'store';
import { localStorageManager } from 'utils/localStorageManager';

import { ILoginForm } from 'components/LoginPage';
import { userDataService } from 'dataServices/UserDataService';

export const useLogin = () => {
    const {isLoggedIn, error, userData} = useSelector((state: StoreState) => state.loginReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedUserDataString = localStorageManager.get('userData');
        const savedUserData: IUser = savedUserDataString && JSON.parse(savedUserDataString);
        if (savedUserData) {
            dispatch(setIsLoggedIn(true, savedUserData));
        }
    }, []);

    const login = (data: ILoginForm, setSubmitting: (isSubmitting: boolean) => void) => {
        userDataService.login(data)
            .then((userData: IUser) => {
                dispatch(setIsLoggedIn(true, userData));
                localStorageManager.set('userData', JSON.stringify(userData));
            })
            .catch((error) => {
                dispatch(setIsLoggedIn(false, undefined, error))
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    const logout = () => {
        userDataService.logout();
        dispatch(setIsLoggedIn(false));
        localStorageManager.remove('userData');
    };
    return {isLoggedIn, error, userData, login, logout};
};
