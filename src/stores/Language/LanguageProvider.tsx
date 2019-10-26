import * as React from 'react';

import { LanguageContext } from './Language';

import { UA, Languages } from 'constants/languages';

const LanguageProvider: React.FC<{ children: React.ReactChild }> = ({
  children
}) => {
  const savedLanguage = localStorage.getItem('language');

  const [language, setLanguage] = React.useState<Languages>(savedLanguage as Languages || UA);

  const handleSetLanguage = (newLanguage: Languages) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
