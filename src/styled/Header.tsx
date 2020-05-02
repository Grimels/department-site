import * as React from 'react';

import styled from 'styled-components';
import { MAIN_COLOR, StyledComponent } from './constants';

export const HeaderContainer: React.FC<StyledComponent & { color?: string }> = ({
	color = MAIN_COLOR,
	children,
	className = '',
}) => {
	const Component = styled.div`
		color: ${color};
		font-family: Roboto;
		font-style: normal;
		text-align: baseline;

		text-transform: uppercase;

		hr {
			margin-top: -1.7em;
			width: 80px;
			border-bottom: 6px solid ${color};
			@media only screen and (min-width: 920px) {
				margin-top: 12px;
			}
		}
	`;
	return <Component className={className}>{children}</Component>;
};

export const HeaderBackgroung = styled.h2`
	opacity: 0.05;
	position: absolute;

	font-weight: 900;
	font-size: 65px;
	line-height: 82px;

	margin-left: -2%;
`;

export const HeaderText = styled.h3`
	font-weight: bold;
	font-size: 35px;
	line-height: 41px;

	margin-bottom: 0px;
	margin-top: 1em;
	margin-left: 0;
	text-align: left;
`;
