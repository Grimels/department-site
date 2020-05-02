import React from 'react';

import styled from 'styled-components';

import { HeaderContainer, HeaderBackgroung, HeaderText } from 'styled/Header';
import { StyledComponent } from 'styled/constants';

export const CONTENT_MARGIN_SIDE = '7%';
export const SECTION_PADDING_TOP = '200px';

export const SectionHeaderContainer = styled(HeaderContainer)`
	hr {
		margin-left: 0;
	}

	.bg {
		display: none;
		@media only screen and (min-width: 920px) {
			display: block;
		}
	}
`;

export const Header: React.FC<StyledComponent> = ({ children, className = '' }) => (
	<SectionHeaderContainer className={className}>
		<HeaderBackgroung className='bg'>{children}</HeaderBackgroung>
		<HeaderText>{children}</HeaderText>
		<hr />
	</SectionHeaderContainer>
);

export const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2% 0 6vh 0;

	* {
		margin-bottom: 1em;
	}

	@media only screen and (min-width: 920px) {
		flex-direction: row;
		padding: 2% 5vw 12vh 5vw;

		* {
			margin-bottom: 0em;
		}
	}
`;

export const AboutHeaderContainer = styled(HeaderContainer)`
	hr {
		margin-left: 0;
	}

	.bg {
		display: none;
		@media only screen and (min-width: 920px) {
			display: block;
		}
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: -2em;
	.content {
		padding: 0.5em;
	}

	@media only screen and (min-width: 920px) {
		max-width: 50vw;
	}
`;

export const ButtonWrapper = styled.div`
	margin-top: auto;

	padding-top: 45px;
	margin: 0;

	text-align: center;
	@media only screen and (min-width: 920px) {
		text-align: left;
	}
`;
