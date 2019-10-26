import * as React from 'react';

import { INewsContext } from './NewsTypes';

export const NewsContext = React.createContext<INewsContext>({
  news: [],
});
