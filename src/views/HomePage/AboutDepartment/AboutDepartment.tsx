import React from 'react';

import './AboutDepartment.scss';
import { useLanguage } from 'hooks/useLanguage';
import { HEADER_TEXT, BODY_TEXT } from './constants';

export const AboutDepartment: React.FC = ({ }) => {
  const { language } = useLanguage();

  return (
    <div className="short-about-department">
      <div className="header">
        <h3>{HEADER_TEXT[language]}</h3>
      </div>
      <div className="body">
        <p>{BODY_TEXT[language]}</p>
      </div>
    </div>
  );
}
