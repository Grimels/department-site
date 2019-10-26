import React from 'react';

import { useLanguage } from 'hooks/useLanguage';

import { UA, RU, ENG } from 'constants/languages';

import './OurPartners.scss';

export const OurPartners: React.FC = ({ }) => {
  const partners = [
    {
      img: 'https://www.nixsolutions.com/wp-content/themes/nixsite6g/img/nix-logo.svg',
      link: 'https://www.nixsolutions.com/',
    },
    {
      img: 'https://www.airport-suppliers.com/wp-content/uploads/2018/11/Sigma-Software-logo.png',
      link: 'https://sigma.software/',
    },
    {
      img: 'https://logos-download.com/wp-content/uploads/2019/06/Epam_Systems_Logo.png',
      link: 'https://www.epam.com/',
    },
  ];

  const { language } = useLanguage();

  const OUR_PARTNERS = {
    [UA]: 'Нашi Партнери',
    [RU]: 'Наши Партнёры',
    [ENG]: 'Our Partners',
  }

  return (
    <div className="our-partners">
      <h2>{OUR_PARTNERS[language]}</h2>
      <div className="partners-list">
        {
          partners.map(partner => (
            <a key={partner.link} href={partner.link} target="_blank" >
              <img src={partner.img} alt="" />
            </a>
          ))
        }
      </div>
    </div>
  );
}
