import * as React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
`;

export const renderIcon = (icon: string) => styled.span`
	display: block;

	background: url(${icon});
	background-size: contain;
`;

export const TextAndIcon: React.FC<{ text: string; icon: string }> = ({ text, icon }) => {
	const StyledIcon = styled.span`
		display: block;
		line-height: inherit;

		background: url(${icon});
		background-size: contain;
		width: 10px;
		height: 10px;

		margin-left: 0.5em;
	`;

	return (
		<StyledRow>
			<span>{text}</span>
			<StyledIcon />
		</StyledRow>
	);
};
