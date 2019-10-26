import React from 'react';

import { AboutDepartment } from './AboutDepartment';
import { OurPartners } from './OurPartners';
import { Feedbacks } from './Feedbacks';

import { useLanguage } from 'hooks/useLanguage';

import { RU, UA, ENG } from 'constants/languages';

import './HomePage.scss';

export const HomePage: React.FC = ({ }) => {


  const { language } = useLanguage();

  const HEADER = {
    [RU]: 'Стань востребованным специалистом вместе с нами!',
    [UA]: 'Стань затребуваним фахIвцем разом з нами!',
    [ENG]: 'Become a sought-after specialist with us!',
  };

  return (
    <>
      <div className="section-1">
        <div className="bg-color">
          <h1>{HEADER[language]}</h1>
        </div>
      </div>
      <Feedbacks />
      <div className="section-2">
        <div className="bg-color">
          <AboutDepartment />
        </div>
      </div>
      <OurPartners />
    </>
  );
}
