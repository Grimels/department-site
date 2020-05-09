import * as React from 'react';
import styled from 'styled-components';

import { Text } from 'styled/Text';
import {
	AboutContainer,
	ContentContainer,
	Header,
	CONTENT_MARGIN_SIDE,
	ButtonWrapper,
} from './About';
import { ImageContainer, renderSectionImage } from 'styled/ImageContainer';

import { MAIN_COLOR } from 'styled/constants';

import Screen2Image from 'assets/images/screen_2.jpg';

const ImageTitle = styled.p`
	display: none;
	@media only screen and (min-width: 920px) {
		display: block;

		position: absolute;
		width: 200px;
		z-index: 1;

		color: #818181;

		text-align: left;
		text-transform: uppercase;
		border-bottom: 2px solid ${MAIN_COLOR};
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 16px;

		margin-top: 60px;
		transform: rotate(-90deg);
	}

	@media only screen and (min-width: 1280px) {
		transform: rotate(0deg);
		margin-left: -180px;
		margin-top: -60px;
	}
`;

export interface IAboutSpeciality {
	header: String;
	button: any;
	imageTitle: String;
}

const AboutSpecialityContainer = styled(AboutContainer)`
	flex-direction: column-reverse;
`;

const SpecialityContentContainer = styled(ContentContainer)`
	@media only screen and (min-width: 920px) {
		margin-right: ${CONTENT_MARGIN_SIDE};
		max-width: 50vw;
	}
`;

const SectionImage = renderSectionImage(Screen2Image);
const AboutSpeciality: React.SFC<IAboutSpeciality> = ({ header, imageTitle, button, children }) => (
	<AboutSpecialityContainer>
		<SpecialityContentContainer>
			<Header className='content'>{header}</Header>
			<Text className='content' margin={{ bottom: '0px' }}>
				{children}
			</Text>
			<ButtonWrapper className='content'>{button}</ButtonWrapper>
		</SpecialityContentContainer>
		<ImageContainer className='image-container' style={{ marginTop: '5em' }}>
			<ImageTitle>{imageTitle}</ImageTitle>
			<SectionImage />
		</ImageContainer>
	</AboutSpecialityContainer>
);

export { AboutSpeciality };
