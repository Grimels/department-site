import styled from 'styled-components';

import { WHITE_COLOR } from './constants';

export const Button = styled.button`
	width: 250px;
	height: 58px;
	text-transform: uppercase;
	background: linear-gradient(
		268.01deg,
		#2497f1 -3.28%,
		#0260a9 103.54%,
		rgba(46, 67, 173, 0) 103.55%
	);
	border: none;

	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 23px;
	text-align: center;

	color: ${WHITE_COLOR};
`;
