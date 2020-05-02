import { Language, LANGUAGES } from 'constants/language';
import { Dispatch, Reducer } from 'react';
import { StoreAction } from 'store';

export const SET_LANGUAGE = 'set language';

export interface LanguageState {
	language: Language;
}

export interface LanguageAction extends StoreAction {
	type: string;
	payload: { language: Language };
}

export const initialState: LanguageState = {
	language: LANGUAGES[0],
};

export const languageReducer: Reducer<LanguageState, LanguageAction> = (
	state = initialState,
	action: LanguageAction,
) => {
	const { type, payload } = action;
	switch (type) {
		case SET_LANGUAGE:
			return { language: LANGUAGES.includes(payload.language) ? payload.language : LANGUAGES[0] };
		default:
			return state;
	}
};

export const setLanguage = (language: Language) => (dispatch: Dispatch<LanguageAction>) =>
	dispatch({ type: SET_LANGUAGE, payload: { language } });
