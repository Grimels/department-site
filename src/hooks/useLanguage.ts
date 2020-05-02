import { useSelector, useDispatch } from 'react-redux';

import { setLanguage as updateLanguage } from 'store/LanguageStore';

import { Language, LANGUAGE } from 'constants/language';
import { StoreState } from 'store';
import { localStorageManager } from 'utils/localStorageManager';

export const useLanguage = () => {
	const language = useSelector((state: StoreState) => state.languageReducer.language);
	const dispatch = useDispatch();

	const setLanguage = (newLanguage: Language) => {
		localStorageManager.set(LANGUAGE, newLanguage);
		return dispatch(updateLanguage(newLanguage));
	};
	return { language, setLanguage };
};
