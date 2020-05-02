import * as React from 'react';

import { Text } from 'styled/Text';
import { Header, Partners, SectionContainer, TextContainer } from 'styled/HomePage/OurPartners';

import { IHomePageSection } from '.';
import { headerTextByLanguageMap, contentTextByLanguageMap } from './constants/ourPartners';

export const OurPartners: React.SFC<IHomePageSection> = ({ language }) => {
	const headerText = headerTextByLanguageMap.get(language);
	const contentText = contentTextByLanguageMap.get(language);

	return (
		<SectionContainer>
			<Header>{headerText}</Header>
			<br />
			<TextContainer>
				<Text position='center'>{contentText}</Text>
			</TextContainer>
			<Partners />
		</SectionContainer>
	);
};
