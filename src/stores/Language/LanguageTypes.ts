import { Languages } from 'constants/languages';

export interface ILanguagesContext {
  language: Languages;
  setLanguage: (language: Languages) => void;
}

export type LanguageMap<T> = { [key in Languages]: T };
