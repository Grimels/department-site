import * as React from 'react';
import styled from 'styled-components';

import { TEXT_COLOR, StyledComponent } from './constants';

export interface ISidesParametrs {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
}

export interface IText {
	position?: 'left' | 'right' | 'center';
	color?: string;
	width?: string;
	size?: string;
	lineHeight?: string;
	margin?: string | ISidesParametrs;
}
export const Text: React.SFC<IText & StyledComponent> = ({
	width = '100%',
	position = 'left',
	color = TEXT_COLOR,
	size = '18px',
	lineHeight = '26px',
	margin,
	className = '',
	style = {},
	children,
}) => {
	const getMargin = () => {
		if (!margin) {
			return;
		}
		if (margin instanceof String) {
			return `margin: ${margin}`;
		}
		if (margin instanceof Object) {
			return `
				${margin.top ? 'margin-top: ' + margin.top + ';' : ''}
				${margin.bottom ? 'margin-bottom: ' + margin.bottom + ';' : ''}
				${margin.left ? 'margin-left: ' + margin.left + ';' : ''}
				${margin.right ? 'margin-right: ' + margin.right + ';' : ''}
			`;
		}
	};

	const StyledText = styled.p`
		width: ${width};
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: ${size};
		line-height: ${lineHeight};
		color: ${color};

		text-align: ${position};
		${getMargin()}
	`;

	return (
		<StyledText style={style} className={className}>
			{children}
		</StyledText>
	);
};
