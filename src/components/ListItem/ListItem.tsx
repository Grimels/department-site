import React from 'react';

import './ListItem.scss';

export const ListItem: React.FC = ({ children }) => {
  return <p className="list-item">{children}</p>;
}
