import React from 'react';

import { DEPARTMENT_NAME } from 'components/Navbar/constants';

import { useLanguage } from 'hooks/useLanguage';
import { DEPARTMENT_ADDRESS, CONTACTS } from './contsants';

import './Footer.scss';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="footer">
      <p className="address">
        <span>{DEPARTMENT_NAME[language]}</span>
        <span>{DEPARTMENT_ADDRESS[language]}</span>
      </p>
      <p className="contacs">
        {CONTACTS[language].map((contact: string) => <span key="contact">{contact}</span>)}
      </p>
    </div>
  );
}
