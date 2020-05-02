import * as React from 'react';
import styled from 'styled-components';

import { Form as StrapForm } from 'reactstrap';

import { Background, Section } from './Main';
import { ImageContainer, renderSectionImage } from 'styled/ImageContainer';
import { FlexContainer } from 'styled/FlexContainer';
import { HeaderContainer, HeaderText } from 'styled/Header';
import { Text } from 'styled/Text';

import { WHITE_COLOR } from 'styled/constants';

import FormBG from 'assets/images/screen_5.png';
import SectionImagePNG from 'assets/images/screen_5_2.png';
import EducationIcon from 'assets/icons/education.png';

const SectionImage = renderSectionImage(SectionImagePNG);

const FormBackground: React.FC = ({ children, ...props }) => (
	<Background bg={FormBG} isBgAttached {...props}>
		<Section>{children}</Section>
	</Background>
);

const ContentContainer = styled(FlexContainer)`
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	margin-left: 5%;

	form {
		width: 100%;
		text-align: left;

		textarea {
			height: 140px;
			resize: none;
		}
	}
`;

const FlexContainerRow = styled(FlexContainer)`
	flex-direction: row;
	justify-content: center;
	align-items: center;

	margin: 60px 30px;

	.image {
		display: none;
	}
	@media only screen and (min-width: 920px) {
		.image {
			display: inline-block;
		}
	}
`;

const IconContainer = styled(FlexContainerRow)`
	margin: 0;
	text-align: baseline;
	&::before {
		line-height: 40px;
		content: url(${EducationIcon});
	}
`;

export interface IHomePageForm {
	id?: string;
	header?: String;
	subHeader?: String;
	content?: String;
}

export const StyledStrapForm = styled(StrapForm)`
	color: ${WHITE_COLOR};
`;

const Hr = styled.hr`
	margin-top: 12px !important;
	margin-left: 0;
`;
export const Form: React.FC<IHomePageForm> = ({ header, subHeader, content, children, ...props }) => (
	<FormBackground {...props}>
		<FlexContainerRow className='content'>
			<ImageContainer className='image'>
				<SectionImage />
			</ImageContainer>
			<ContentContainer>
				<HeaderContainer color={WHITE_COLOR}>
					<HeaderText>{header}</HeaderText>
					<Hr />
				</HeaderContainer>
				<IconContainer>
					<i className='icon'></i>
					<Text
						color={WHITE_COLOR}
						size='23px'
						lineHeight='30px'
						margin={{ left: '22px' }}
						style={{ borderBottom: `2px solid ${WHITE_COLOR}` }}
					>
						{subHeader}
					</Text>
				</IconContainer>
				<Text color={WHITE_COLOR} size='20px' lineHeight='39px'>
					{content}
				</Text>
				{children}
			</ContentContainer>
		</FlexContainerRow>
	</FormBackground>
);
