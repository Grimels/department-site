import * as React from 'react';
import styled from 'styled-components';

import { FlexContainer } from 'styled/FlexContainer';
import { WHITE_COLOR, MAIN_COLOR } from 'styled/constants';

import MainBG from 'assets/images/screen_1.jpg';

const MainTextStyle = styled.h1`
	flex-direction: row;
	justify-content: space-around;
	align-items: space-between;

	color: ${WHITE_COLOR};

	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	text-transform: uppercase;

	width: 70vw;

	font-size: 25px;
	line-height: 30px;

	@media only screen and (min-width: 810px) {
		width: 50vw;

		font-size: 30px;
		line-height: 35px;
	}
`;

const SecondaryTextStyle = styled.h2`
	width: 70%;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 23px;
	line-height: 27px;

	color: ${WHITE_COLOR};
	text-transform: uppercase;

	@media only screen and (min-width: 810px) {
		width: 50%;

		font-size: 30px;
		line-height: 35px;
	}
`;

const DescriptionTextStyle = styled.h3`
	width: 85%;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 25px;

	color: ${WHITE_COLOR};
`;

const BackgroundComponent: React.FC<{ bg: string; isBgAttached?: boolean; height?: string }> = ({
	bg,
	height = '100%',
	isBgAttached = false,
	...props
}) => (
	<section
	style={{
		height,
		backgroundImage: `url(${bg})`,
		width: '100%',
		backgroundAttachment: isBgAttached ? 'fixed' : 'initial',
	}}
		{...props}
	/>
);

const Background = styled(BackgroundComponent)`
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const Section = styled(FlexContainer)`
	height: 100%;

	background: rgba(0, 0, 0, 0.65);
	background-repeat: no-repeat;
	background-size: contain;
`;

const Block: React.SFC<React.CSSProperties> = ({ children, ...props }) => (
	<FlexContainer style={props}>{children}</FlexContainer>
);

const MainBackground: React.SFC = ({ children }) => (
	<Background bg={MainBG} height='90vh'>
		<Section>{children}</Section>
	</Background>
);

const Hr = styled.hr`
	margin-top: 12px;
	width: 80px;
	border-bottom: 6px solid ${MAIN_COLOR};
`;

export {
	MainTextStyle,
	SecondaryTextStyle,
	DescriptionTextStyle,
	Background,
	Section,
	Block,
	MainBackground as Section1Background,
	Hr,
};
