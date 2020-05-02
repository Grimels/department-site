import * as React from 'react';

import { LoginPage } from './LoginPage';
import { useLogin } from 'hooks/useLogin';

export const withLogin = (Component: React.ElementType) => (props = {}) => {
	const { isLoggedIn, userData, logout } = useLogin();

	if (!isLoggedIn) {
		return <LoginPage />;
	}

	return <Component {...props} logout={logout} userData={userData} />;
};
