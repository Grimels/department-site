import React from 'react';

import EMailIcon from 'styles/assets/contacts/email.svg';
import PhoneIcon from 'styles/assets/contacts/phone.svg';
import './ContactBar.scss';

export const ContactBar: React.FC = ({ }) => {
  const email = 'kiv@kpi.kharkov.ua';
  const phone = '+38 (057) 707-68-24';

  return (
    <div className="contact-info">
      <div className="contact-block">
        <img src={EMailIcon} alt="email" />
        <span>{email}</span>
      </div>
      <div className="contact-block">
        <img src={PhoneIcon} alt="phone" />
        <span>{phone}</span>
      </div>
    </div>
  );
}
