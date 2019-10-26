import React from 'react';

import { PageHeader } from 'components/PageHeader';
import { Section } from 'components/Section';
import { ListItem } from 'components/ListItem';

import { useLanguage } from 'hooks/useLanguage';

import { SPECIALTIES } from 'components/Navbar/constants';
import { BODY_TEXT, BACHELOR, MASTER, SPECIALIZATION } from './constants';

import './Specialties.scss';

export const Specialties: React.FC = ({ }) => {
  const { language } = useLanguage();

  return (
    <div className="vertical-container">
      <PageHeader header={SPECIALTIES[language]} />

      <Section header={BACHELOR[language]}>
        <p>{BODY_TEXT[language]}</p>
        <ListItem>
          {SPECIALIZATION[language]}
        </ListItem>
      </Section>

      <Section header={MASTER[language]}>
        <p>{BODY_TEXT[language]}</p>
        <ListItem>
          {SPECIALIZATION[language]}
        </ListItem>
      </Section>
    </div>
  );
}
