import React from 'react';
import { useLanguage } from 'hooks/useLanguage';
import { MethodicContainer } from 'components/Student/MethodicalSupport';
import DocumentImage from 'assets/icons/course.png';
import { ScientificArticlesContainer } from 'styled/ScientificActivity/ScientificActivity';
import { DefaultPage } from 'components/DefaultPage';
import { DURATION, HEADER, ITEMS, TARGET } from 'components/OurServices/BusinessConstants';
import { Text } from 'styled/Text';

export const BussinessEducation: React.FC = () => {
    const { language } = useLanguage();

    const renderCard = (item: { link: string, ua: { name: string, target: string }, ru: { name: string, target: string }, eng: { name: string, target: string } }) => {
        const currItem = item[language];
        return (
            <MethodicContainer>
                <img src={DocumentImage}/>
                <div>
                    <a href={item.link} target='_blank'>
                        {currItem.name}
                    </a>
                    <p><strong>{TARGET[language]}:</strong> {currItem.target}</p>
                </div>
            </MethodicContainer>
        );
    };

    const props = {
        header: HEADER[language],
        renderElement: () => (
            <ScientificArticlesContainer>
                <Text><strong>{DURATION[language]}</strong></Text>
                {(ITEMS || []).map(renderCard)}
            </ScientificArticlesContainer>
        ),
    };
    return <DefaultPage>{props}</DefaultPage>;
};