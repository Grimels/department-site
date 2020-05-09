import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { DefaultPage } from 'components/DefaultPage';
import { ScientificArticlesContainer } from 'styled/ScientificActivity/ScientificActivity';

import { useLanguage } from 'hooks/useLanguage';
import { ENG, RU, UA } from 'constants/language';

import { IMethodicalSupport, MethodicalSupportList } from 'assets/MethodicalSupport/MethodicalSupport';
import DocumentImage from 'assets/icons/contract.png';

export const METHODICAL_SUUPORT_HEADER = {
    [UA]: 'Методичне забезпечення',
    [RU]: 'Методическое обеспечение',
    [ENG]: '',
};

export const MethodicContainer = styled.div`
	display: flex;
	align-items: center;

	height: 150px;
	width: auto;

	padding: 10px 25px;
`;

const AUTHOR = {
    [UA]: 'За авторством',
    [RU]: 'За авторством',
    [ENG]: '',
}

const YEAR = {
    [UA]: 'Рік видання',
    [RU]: 'Год издания',
    [ENG]: '',
}

export const MethodicalSupport: React.FC = () => {
    const { language } = useLanguage();
    const history = useHistory();

    const renderCard = (data: IMethodicalSupport) => {
        return (
            <MethodicContainer>
                <img src={DocumentImage}/>
                <div>
                <a href={data.methodic.link} target='_blank'>
                    {data.methodic.name}
                </a>
                    <p><strong>{AUTHOR[language]}:</strong> {data.author}</p>
                    <p><strong>{YEAR[language]}:</strong> {data.year}</p>
                </div>
            </MethodicContainer>
        )
    }

    if(language === ENG) {
        history.push('/');
    }

    const props = {
        header: METHODICAL_SUUPORT_HEADER[language],
        renderElement: () => (
            <ScientificArticlesContainer>
                {(MethodicalSupportList[language] || []).map(renderCard)}
            </ScientificArticlesContainer>
        ),
    };
    return <DefaultPage>{props}</DefaultPage>;
}