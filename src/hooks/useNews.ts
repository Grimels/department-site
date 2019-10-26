import * as React from 'react';

import { NewsContext } from 'stores/News';

export const useNews = (): object[] => {
  const { news } = React.useContext(NewsContext);

  return news;
}