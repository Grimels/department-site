import React from 'react';

import './Section.scss';

export interface ISectionProps {
  header: React.ReactNode | string;
  bodyStyles?: string;
}

export const Section: React.FC<ISectionProps> = ({ header, children, bodyStyles = '' }) => {
  return (
    <div className={`section`}>
      <div className="horizontal-header">
        <h3 className="header">{header}</h3>
        <div className="header-underline" />
      </div>

      <div className={`content ${bodyStyles}`}>
        {children}
      </div>
    </div>
  );
}
