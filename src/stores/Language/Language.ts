import * as React from 'react';

import { ILanguagesContext } from './LanguageTypes';

import { UA, Languages } from 'constants/languages';

export const LanguageContext = React.createContext<ILanguagesContext>({
  language: UA,
  setLanguage: (language: Languages) => {
    throw new Error(`setLanguage() not implemented. Received: ${language}`);
  }
});
