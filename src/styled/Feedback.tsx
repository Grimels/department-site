import * as React from 'react';
import styled from 'styled-components';

import { Feedback } from 'components/HomePage/constants/feedbacks';
import { TEXT_COLOR } from './constants';
import { Language } from 'constants/language';

const FeedbackContainer = styled.div`
	box-shadow: 0px 0px 30px rgba(46, 67, 173, 0.3);
	height: 700px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	padding: 30px 20px;

	@media only screen and (min-width: 810px) {
		padding: 30px 60px;
		flex-direction: row;
		justify-content: center;
		height: 100%;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& img {
		width: 135px;
		height: 135px;
		border-radius: 100%;
	}

	margin-bottom: 25px;

	@media only screen and (min-width: 810px) {
		margin-right: 60px;
		margin-bottom: initial;
	}
`;

const AuthorText = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: ${TEXT_COLOR};
`;

const FeedbackText = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	color: ${TEXT_COLOR};
	text-align: justify;
	margin-top: -25px;
`;

const FeedbackCard: React.SFC<{ feedback: Feedback; language: Language }> = ({
	feedback,
	language,
}) => {
	return (
		<FeedbackContainer>
			<ImageContainer>
				<img src={feedback.img} alt='' />
				<AuthorText>{feedback.author.get(language)}</AuthorText>
			</ImageContainer>
			<FeedbackText>{feedback.text.get(language)}</FeedbackText>
		</FeedbackContainer>
	);
};

export { FeedbackCard };
