import * as React from 'react';
import styled from 'styled-components';

import { Text } from 'styled/Text';
import {
	AboutContainer,
	ContentContainer,
	CONTENT_MARGIN_SIDE,
	Header,
	ButtonWrapper,
} from './About';

import { MAIN_COLOR } from 'styled/constants';

import Screen3Image from 'assets/images/screen_3.png';
import { ImageContainer, renderSectionImage } from 'styled/ImageContainer';

const SECTION_PADDING_TOP = '200px';

const ImageTitle = styled.p`
	display: none;
	@media only screen and (min-width: 920px) {
		display: block;

		position: absolute;
		width: ${SECTION_PADDING_TOP};
		margin-top: -280px;
		z-index: 1;

		text-align: right;
		text-transform: uppercase;
		border-bottom: 2px solid ${MAIN_COLOR};
		transform: rotate(-90deg);
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 16px;

		color: #818181;
	}
`;

export interface IAboutDepartment {
	header: String;
	button: any;
	imageTitle: String;
}

const AboutDepartmentContainer = styled(AboutContainer)`
	@media only screen and (min-width: 920px) {
		padding: 200px 5vw 12vh 5vw;
	}
`;

const DepartmentContentContainer = styled(ContentContainer)`
	@media only screen and (min-width: 920px) {
		margin-left: ${CONTENT_MARGIN_SIDE};
		max-width: 50vw;
	}
`;

const SectionImage = renderSectionImage(Screen3Image);
const AboutDepartment: React.SFC<IAboutDepartment> = ({ header, imageTitle, button, children }) => (
	<AboutDepartmentContainer>
		<ImageTitle>{imageTitle}</ImageTitle>
		<ImageContainer>
			<SectionImage />
		</ImageContainer>
		<DepartmentContentContainer>
			<Header className='content'>{header}</Header>
			<Text className='content'>{children}</Text>
			<ButtonWrapper className='content'>{button}</ButtonWrapper>
		</DepartmentContentContainer>
	</AboutDepartmentContainer>
);

export { AboutDepartment };
