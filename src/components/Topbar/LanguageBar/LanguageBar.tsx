import React from 'react';

import { LanguageFlag } from 'components/Topbar/LanguageBar/LanguageFlag';

import { useLanguage } from 'hooks/useLanguage';

import { UA, RU, ENG, Languages } from 'constants/languages';

import './LanguageBar.scss';

export const LanguageBar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: Languages[] = [UA, RU, ENG];

  const renderLanguageBar = () => languages.map(lang => (
    <LanguageFlag
      key={lang}
      language={lang}
      onClick={setLanguage}
      selected={lang === language}
    />
  ));

  return (
    <div className="language-bar">
      {renderLanguageBar()}
    </div>
  );
}
