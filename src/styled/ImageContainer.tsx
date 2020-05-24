import styled from 'styled-components';
import { MIN_SCREEN_IMAGE_WIDTH, MAIN_COLOR, IMAGE_WIDTH } from './constants';

const MAX_WIDTH = '550px';
export const ImageContainer = styled.div`
	border-radius: 5px;

	display: inline-block;
	position: relative;

	@media only screen and (min-width: 920px) {
		border: 2px solid ${MAIN_COLOR};
		box-sizing: border-box;
		width: ${IMAGE_WIDTH};
		max-width: ${MAX_WIDTH};

		&::before {
			content: '';
		}
	}
`;

export const renderSectionImage = (
	image: string,
	width = IMAGE_WIDTH,
	maxWidth = MAX_WIDTH,
) => styled.image`
	content: url(${image});
	width: ${MIN_SCREEN_IMAGE_WIDTH};
	max-width: ${maxWidth};
	text-align: center;
	border-radius: 5px;

	position: inherit;

	@media only screen and (min-width: 920px) {
		width: ${width};
		max-width: ${width};

		right: 1em;
		bottom: 1em;
	}
`;
