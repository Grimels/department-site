import React from 'react';

import { useNews } from 'hooks/useNews';

export interface INewsProps {

}

export const News: React.FC<INewsProps> = ({ }) => {
  const news = useNews();

  return (
    <div>
      <h4>News & Updates</h4>

    </div>
  );
}
