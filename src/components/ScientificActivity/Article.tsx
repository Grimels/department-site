import * as React from 'react';

import { Text } from 'styled/Text';
import { ScientificArticleContainer } from 'styled/ScientificActivity/ScientificActivity';

import DocumentImage from 'assets/icons/contract.png';
import { Language } from 'constants/language';

export interface IArticle {
    id: string,
    subject: string,
    text: string,
    type_id: number,
    language?: Language,
    imageIds?: string[]
}

export const Article: React.FC<IArticle> = ({ subject, text }) => {
    return (
        <ScientificArticleContainer href={text} target='_blank'>
            <img src={DocumentImage}/>
            <a href={subject} target='_blank'>
                <Text>{text}</Text>
            </a>
        </ScientificArticleContainer>
    );
};
