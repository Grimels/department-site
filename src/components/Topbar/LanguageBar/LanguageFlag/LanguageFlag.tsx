import React from 'react';

import { FLAGS, Languages } from 'constants/languages';

import './LanguageFlag.scss';

export interface ILanguageFlagProps {
  language: Languages;
  onClick: (language: Languages) => void;
  selected: boolean;
}

export const LanguageFlag: React.FC<ILanguageFlagProps> = ({ language, onClick, selected = false }) => {
  return (
    <div className={`language-flag ${selected ? 'selected' : ''}`} onClick={() => onClick(language)}>
      <img src={FLAGS[language]} alt={language} />
      <span>{language}</span>
    </div>
  );
}
