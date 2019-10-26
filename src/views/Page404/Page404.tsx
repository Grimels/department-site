import React from 'react';

import './Page404.scss';
import { useLanguage } from 'hooks/useLanguage';
import { TITLE_TEXT, ADDITIONAL_TEXT, CAPTION_TEXT } from './constants';

export const Page404: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="page-not-found-bg">
      <div className="page-not-found">
        <h1 className="error-code">404</h1>
        <h3 className="title">{TITLE_TEXT[language]}</h3>
        <p className="caption">{CAPTION_TEXT[language]}</p>
        <p className="additonal">{ADDITIONAL_TEXT[language]}</p>
      </div>
    </div>
  );
}
