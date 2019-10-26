import React from 'react';

import { PageHeader } from 'components/PageHeader';

import { useLanguage } from 'hooks/useLanguage';

import { SCIENTIFIC_ACTIVITIES } from 'components/Navbar/constants';

import './ScientificActivities.scss';

export const ScientificActivities: React.FC = ({ }) => {
  const { language } = useLanguage();

  return (
    <div className="vertical-container">
      <PageHeader header={SCIENTIFIC_ACTIVITIES[language]} />
    </div>
  );
}
