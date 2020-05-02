import styled from 'styled-components';

import { Input as StrapInput } from 'reactstrap';

import { ADMIN_TEXT_COLOR, WHITE_COLOR } from './constants';

export const Input = styled(StrapInput)`
	background-color: transparent;
	border-width: 2px;
	height: 60px;

	padding: 10px 20px;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;

	&::placeholder {
		color: ${WHITE_COLOR};
	}

	&:hover,
	&:not(:hover) {
		background-color: transparent;
	}
`;

export const InvalidLabel = styled.p`
	color: #d31f3c;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	text-align: left;
`;
