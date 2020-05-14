import React from 'react';
import { useLanguage } from 'hooks/useLanguage';
import DocumentImage from 'assets/icons/diploma.png';
import { ENG, RU, UA } from 'constants/language';
import { ScientificArticlesContainer } from 'styled/ScientificActivity/ScientificActivity';
import { DefaultPage } from 'components/DefaultPage';
import { MethodicContainer } from 'components/Student/MethodicalSupport';
import { DefendedDissertationsList, IDefendedDissertation } from 'assets/DefendedDissertations/DefendedDissertations';

export const DEFENDED_DISSERTATIONS_HEADER = {
    [UA]: 'Захищені Дисертації',
    [RU]: 'Защищенные Диссертации',
    [ENG]: 'Defended Dissertations',
};

const AUTHOR = {
    [UA]: 'Автор',
    [RU]: 'Автор',
    [ENG]: 'Author',
};

export const DefendedDissertations: React.FC = () => {
    const { language } = useLanguage();

    const renderCard = (data: IDefendedDissertation) => {
        if(!data.author[language]) {
            return;
        }
        return (
            <MethodicContainer>
                <img src={DocumentImage}/>
                <div>
                    <a href={data.link} target='_blank'>
                        {data.name[language]}
                    </a>
                    <p><strong>{AUTHOR[language]}:</strong> {data.author[language]}</p>
                </div>
            </MethodicContainer>
        );
    };

    const props = {
        header: DEFENDED_DISSERTATIONS_HEADER[language],
        renderElement: () => (
            <ScientificArticlesContainer>
                {(DefendedDissertationsList || []).map(renderCard)}
            </ScientificArticlesContainer>
        ),
    };
    return <DefaultPage>{props}</DefaultPage>;
};