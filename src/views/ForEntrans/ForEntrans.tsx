import React from 'react';

import { useLanguage } from 'hooks/useLanguage';

import { Section } from 'components/Section';
import { PageHeader } from 'components/PageHeader';
import { ListItem } from 'components/ListItem';

import { SPECIALITY_HEADER, BODY_TEXT, BASIC_DISCIPLINES, BASIC_DISCIPLINES_LABEL } from './constants';
import { FOR_ENTRANS } from 'components/Navbar/constants';

import './ForEntrans.scss';

export const ForEntrans: React.FC = ({ }) => {
  const { language } = useLanguage();

  const renderDisciplines = () => BASIC_DISCIPLINES[language].map(discipline => (
    <ListItem key={discipline}>{discipline}</ListItem>
  ));

  return (
    <div className="vertical-container">
      <PageHeader header={FOR_ENTRANS[language]} />

      <Section header={SPECIALITY_HEADER[language]}>
        <p>{BODY_TEXT[language]}</p>
      </Section>

      <Section header={BASIC_DISCIPLINES_LABEL[language]}>
        <div className="disciplines-list">{renderDisciplines()}</div>
      </Section>
    </div>
  );
}
