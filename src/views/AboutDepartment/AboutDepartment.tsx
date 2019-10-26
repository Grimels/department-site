import React from 'react';

import { Section } from 'components/Section';
import { PageHeader } from 'components/PageHeader';

import { useLanguage } from 'hooks/useLanguage';

import { BODY_TEXT, TITLE_TEXT } from './constants';

import './AboutDepartment.scss';

export const AboutDepartment: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="vertical-container">
      <PageHeader header={TITLE_TEXT[language]} />
      <Section header={TITLE_TEXT[language]} >
        {BODY_TEXT[language].map(text => <p key={text}>{text}</p>)}
      </Section>
    </div>
  );
}
