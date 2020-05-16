import * as React from 'react';
import styled from 'styled-components';

import { HeaderContainer, HeaderText } from 'styled/Header';
import { FlexContainer } from 'styled/FlexContainer';

import WYZSA from 'assets/images/wyzsa.png'

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;

	* {
		margin: 2em 1em;
		height: 75px;
	}

	@media only screen and (min-width: 920px) {
		flex-direction: row;
		padding: 2vh 0;
		* {
			margin: 2em 1em;
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
		<div>
			<img
				src='https://www.p.lodz.pl/sites/all/themes/politechnika/Images/logo_pl.jpg'
				alt=''
			/>
		</div>
		<div>
			<img
				src='http://www.upma.kiev.ua/sites/all/themes/upma/i/logo.png'
				alt=''
			/>
		</div>
		<div>
			<img
				src={WYZSA}
				alt=''
			/>
		</div>
		<div>
			<img
				src='https://common2.unwe.bg//wwwroot/images/logo-short-en.png'
				alt=''
				style={{ backgroundColor: '#760e26', padding: '10px'}}
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
	width: 60em;
	padding: 0 5vw;
	max-width: 100%;
	p {
		text-align: left;
	}
	@media only screen and (min-width: 920px) {
		p {
			text-align: center;
		}
	}
`;

export { Header, Partners, SectionContainer };
