import styled from 'styled-components';
import { ADMIN_TEXT_COLOR } from 'styled/constants';

export const ScientificArticleContainer = styled.a`
	display: flex;
	align-items: center;

	height: 150px;
	width: auto;

	padding: 10px 25px;
`;

export const ScientificArticlesContainer = styled.div`
	display: flex;
	flex-direction: column;

	padding: 40px;

	img {
		width: 64px;
		height: 64px;

		margin-right: 20px;
	}
	
	.edit-article-header {
        &::placeholder {
            color: ${ADMIN_TEXT_COLOR};
        }
\t}
`;
