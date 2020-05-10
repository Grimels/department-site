import * as React from 'react';

import { Carousel } from 'components/Carousel/Carousel';

import { SectionContainer } from 'styled/HomePage/Feedbacks';
import { Header } from 'styled/HomePage/Feedbacks';
import { FeedbackCard } from 'styled/Feedback';

import { IHomePageSection } from './HomePage';
import { Feedback, FEEDBACKS, headerByLanguage } from './constants/feedbacks';
import { FlexContainer } from 'styled/FlexContainer';

export const Feedbacks: React.FC<IHomePageSection> = ({ language }) => {
	const headerText = headerByLanguage.get(language);

	return (
		<SectionContainer>
			<Header bgText={headerText?.bgText || ''} header={headerText?.header || ''} />
			<br />
			<FlexContainer>
				<Carousel items={FEEDBACKS}>
					{(feedback: Feedback) => <FeedbackCard feedback={feedback} language={language} />}
				</Carousel>
			</FlexContainer>
		</SectionContainer>
	);
};
