import styled from 'styled-components';
import { ADMIN_ACTIVE_BG_COLOR } from 'styled/constants';

export const Articles = styled.div`
	background-color: ${ADMIN_ACTIVE_BG_COLOR};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	* {
		text-align: center !important;
	}

	width: 100%;
`;

export const ScientificArticlesContainer = styled.div`
	background-color: ${ADMIN_ACTIVE_BG_COLOR};
	display: flex;

	* {
		text-align: center !important;
	}

	width: 100%;
`;
