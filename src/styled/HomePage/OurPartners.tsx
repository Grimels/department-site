import * as React from 'react';
import styled from 'styled-components';

import { HeaderContainer, HeaderText } from 'styled/Header';
import { FlexContainer } from 'styled/FlexContainer';

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 75%;

	* {
		margin: 2em 0;
		height: 75px;
	}

	@media only screen and (min-width: 920px) {
		flex-direction: row;
		padding: 10vh 0;
		* {
			margin: 0;
		}
	}
`;

const Partners = () => (
	<ImageContainer>
		<div>
			<img src='https://www.nixsolutions.com/wp-content/themes/nixsite6g/img/nix-logo.svg' alt='' />
		</div>
		<div>
			<img
				src='https://www.airport-suppliers.com/wp-content/uploads/2018/11/Sigma-Software-logo.png'
				alt=''
			/>
		</div>
		<div>
			<img
				src='https://logos-download.com/wp-content/uploads/2019/06/Epam_Systems_Logo.png'
				alt=''
			/>
		</div>
	</ImageContainer>
);

const Hr = styled.hr`
	margin-top: 12px !important;
`;
const Header: React.FC<{className?: string}> = ({ className, children }) => (
	<HeaderContainer className={className}>
		<HeaderText>{children}</HeaderText>
		<Hr />
	</HeaderContainer>
);

const SectionContainer = styled(FlexContainer)`
	padding: 0 5vw;
	p {
		text-align: left;
	}
	@media only screen and (min-width: 920px) {
		p {
			text-align: center;
		}
	}
`;

const TextContainer = styled.div`
	width: 100%;
	@media only screen and (min-width: 920px) {
		width: 75%;
	}
`;

export { Header, Partners, SectionContainer, TextContainer };
