import React from 'react';

import DefaultBackground from 'styles/assets/images/header-background.jpg'

import './PageHeader.scss';

export interface IPageHeaderProps {
  header: string;
  background?: string;
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ header, background }) => {
  const backgroundImage = background || DefaultBackground;
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="page-header">
      <h1>{header}</h1>
    </div>
  );
}
