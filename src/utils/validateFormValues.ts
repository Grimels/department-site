import { ISubscribeFormValues } from 'components/HomePage/Form';
import { ILoginForm } from 'components/LoginPage';

import { Language, UA, RU, ENG } from 'constants/language';

const REQUIRED = {
	[UA]: "Обов'язкове поле.",
	[RU]: 'Обязательное поле.',
	[ENG]: 'Required field.',
};

const INVALID_EMAIL = {
	[UA]: 'Невірна адреса електронної пошти.',
	[RU]: 'Неверный адрес электронной почты.',
	[ENG]: 'Invalid email address.',
};

export const emailValidator = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

export const validateSubscribeFormValues = (values: ISubscribeFormValues, language: Language) => {
	const { name, surName, email, question } = values;
	const errors: ISubscribeFormValues = {};

	if (name == undefined || name.length === 0) {
		errors.name = REQUIRED[language];
	} else if (name.length > 50) {
		errors.name = 'Name is too long.';
	}

	if (surName == undefined || surName.length === 0) {
		errors.surName = REQUIRED[language];
	} else if (surName.length > 50) {
		errors.surName = 'Surname is too long.';
	}

	if (!email) {
		errors.email = REQUIRED[language];
	} else if (!emailValidator(email)) {
		errors.email = INVALID_EMAIL[language];
	}

	if (question == undefined || question.length === 0) {
		errors.question = REQUIRED[language];
	}

	return errors;
};

export const validateLoginForm = (values: ILoginForm) => {
	const { email, password } = values;
	const errors: ILoginForm = {};

	if (!email) {
		errors.email = REQUIRED[RU];
	} else if (!emailValidator(email)) {
		errors.email = INVALID_EMAIL[RU];
	}

	if (password === undefined || password.length === 0) {
		errors.password = REQUIRED[RU];
	}

	return errors;
};
