import * as React from 'react';

import { NewsContext } from './News';

export const NewsProvider: React.FC<{ children: React.ReactChild }> = ({
  children
}) => {
  const [news, setNews] = React.useState<object[]>([]);

  React.useEffect(() => {
    setTimeout(() => setNews([]), 1000);
  }, []);

  return (
    <NewsContext.Provider
      value={{ news }}
    >
      {children}
    </NewsContext.Provider>
  );
};
