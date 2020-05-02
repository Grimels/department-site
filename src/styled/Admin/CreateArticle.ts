import styled from 'styled-components';
import { ADMIN_ACTIVE_BG_COLOR, ADMIN_TEXT_COLOR, WHITE_COLOR } from 'styled/constants';
import { AdminNavBarBrand } from '.';

import { ScientificArticleContainer as DefaultScientificArticleContainer } from 'styled/ScientificActivity/ScientificActivity';

export const CreateContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;

	background-color: ${ADMIN_ACTIVE_BG_COLOR};

	.article-header {
		color: ${ADMIN_TEXT_COLOR}!important;
		margin-bottom: 10px;
	}
`;

export const CreateArticleHeader = styled(AdminNavBarBrand)`
	display: flex;
	width: 100%;
	line-height: 60px;
	padding: 5px 40px;
`;

export const CreateArticleFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	align-self: flex-end;
	bottom: 0;

	color: ${ADMIN_TEXT_COLOR}!important;

	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 26px;
	line-height: 35px;
	margin: 0;

	width: 100%;
	line-height: 60px;
	padding: 25px 40px;
`;

export const EditorContainer = styled.div`
	padding: 10px 40px 0 40px;
`;

export const ScientificArticleContainer = styled(DefaultScientificArticleContainer)`
	width: inherit;
	flex-direction: column;
	padding: 10px 40px 0 40px;
`;
