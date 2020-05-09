import styled from 'styled-components';
import { AboutContainer } from './HomePage/About';

export const DefaultPage = styled.div`
	max-width: 100vw;
	display: flex;
	flex-direction: column;

	padding: 20px 40px;

	.header hr {
		margin-left: 0;
		margin-top: 0;
	}
`;

export const DefaultPageContainer = styled(AboutContainer)`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 20px;

	.text {
		text-align: justify;
	}

	.header {
		text-align: center;
	}

	@media only screen and (min-width: 810px) {
		.header {
			text-align: justify;
		}
		.text {
			margin-left: 4em;
			text-indent: 2em;

			text-align: justify;

			width: initial;
		}
	}
`;

export const DefaultPageContainerWithoutImage = styled(AboutContainer)`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0;

	.text {
		text-align: justify;
	}

	.header {
		text-align: center;
	}

	@media only screen and (min-width: 810px) {
		.header {
			text-align: justify;
		}
		.text {
			margin-left: 0;
			text-indent: 2em;

			text-align: justify;

			width: initial;
		}
	}
`;

export const DefaultPageTextContainer = styled.div`
	display: flex;
	flex-direction: column;

	margin: 0;
	@media only screen and (min-width: 810px) {
		margin: -20px 0 0 0;
	}
`;
