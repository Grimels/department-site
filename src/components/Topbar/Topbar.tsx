import React from 'react';

import { LanguageBar } from './LanguageBar';
import { ContactBar } from './ContactBar';

import './Topbar.scss';

export const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <ContactBar />
      <LanguageBar />
    </div>
  );
}
