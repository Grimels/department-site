import * as React from 'react';

import { Languages } from 'constants/languages';
import { LanguageContext } from 'stores/Language';

export const useLanguage = (): {
  language: Languages;
  setLanguage: (language: Languages) => void;
} => {
  const { language, setLanguage } = React.useContext(LanguageContext);

  return { language, setLanguage };
};
