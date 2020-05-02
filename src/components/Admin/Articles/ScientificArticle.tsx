import * as React from 'react';

import { Text } from 'styled/Text';

import { IArticle } from 'components/ScientificActivity/Article';
import { ScientificArticleContainer } from 'styled/Admin/CreateArticle';

export const ScientificArticle: React.FC<IArticle> = ({ text, subject }) => {
    return (
        <ScientificArticleContainer>
            <a href={subject} target='_blank'>
                <Text color='white'>{text}</Text>
            </a>
        </ScientificArticleContainer>
    );
};
