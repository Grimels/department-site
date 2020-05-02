import React from 'react';
import styled from 'styled-components';

import { HeaderText, HeaderBackgroung, HeaderContainer } from 'styled/Header';

const SectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 40px 0;
`;

const FeedbacksHeaderContainer = styled(HeaderContainer)`
	padding-top: 20px;

	&,
	hr {
		margin-left: 5px;
	}

	@media only screen and (min-width: 920px) {
		margin-left: 7.7em;
	}
`;

export interface ISectionHeaderProps {
	bgText: string;
	header: string;
}

const Hr = styled.hr`
	margin-top: 12px !important;
`;
const Header: React.SFC<ISectionHeaderProps> = ({ bgText, header }) => (
	<FeedbacksHeaderContainer>
		<HeaderBackgroung>{bgText}</HeaderBackgroung>
		<HeaderText>{header}</HeaderText>
		<Hr />
	</FeedbacksHeaderContainer>
);

export { SectionContainer, Header };
