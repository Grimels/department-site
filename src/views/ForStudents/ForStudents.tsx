import React from 'react';

import { PageHeader } from 'components/PageHeader';

import { useLanguage } from 'hooks/useLanguage';

import { FOR_STUDENTS } from 'components/Navbar/constants';

import './ForStudents.scss';

export const ForStudents: React.FC = ({ }) => {
  const { language } = useLanguage();

  return (
    <div className="vertical-container">
      <PageHeader header={FOR_STUDENTS[language]} />
    </div>
  );
}
