import * as React from 'react';

import { IArticle, Article } from './Article';
import { ScientificArticlesContainer } from 'styled/ScientificActivity/ScientificActivity';

export interface ArticlesProps {
	items: IArticle[];
}

export const Articles: React.FC<ArticlesProps> = ({ items }) => {
	return (
		<ScientificArticlesContainer>
			{items.map(article => (
				<Article {...article} />
			))}
		</ScientificArticlesContainer>
	);
};
