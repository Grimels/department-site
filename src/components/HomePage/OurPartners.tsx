import * as React from 'react';

import { Header, Partners, SectionContainer } from 'styled/HomePage/OurPartners';

import { IHomePageSection } from '.';
import { headerTextByLanguageMap } from './constants/ourPartners';

export const OurPartners: React.FC<IHomePageSection> = ({ language }) => {
	const headerText = headerTextByLanguageMap.get(language);

	return (
		<SectionContainer>
			<Header>{headerText}</Header>
			<Partners />
		</SectionContainer>
	);
};
