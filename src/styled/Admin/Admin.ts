import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';

import { ADMIN_TEXT_COLOR, ADMIN_ACTIVE_BG_COLOR } from 'styled/constants';
import { TEXT_COLOR, ADMIN_DARK_BG_COLOR, ADMIN_SIDE_BAR_COLOR } from 'styled/constants';
import { ButtonWrapper } from 'styled/HomePage/About';

export const AdminContainer = styled.div`
	height: auto;

	display: flex;
	flex-direction: row;
	justify-content: stretch;
`;

export const AdminNavBarBrand = styled(NavbarBrand)`
    text-align: center;
	background-color: ${ADMIN_DARK_BG_COLOR};
	color: ${ADMIN_TEXT_COLOR}!important;

	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 26px;
	line-height: 35px;
	margin: 0;
`;

export const SideBar = styled.div`
	position: sticky;
	top: 0;

	min-width: 300px;
	min-height: 100vh;
	height: auto;
	background-color: ${ADMIN_SIDE_BAR_COLOR};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	border-right: 1px solid ${TEXT_COLOR};

	.item {
		width: 100%;
		line-height: 60px;
	}
`;

export const SideBarItemExit = styled(ButtonWrapper)`
    height: 60px;
    width: 100%;
    
	display: flex;
	justify-content: flex-start;
	align-items: center;

    color: #ff0033;

	font-size: 16px;

	padding: 0 15px;

	&.active {
		background-color: ${ADMIN_ACTIVE_BG_COLOR};
	}

	&:hover {
		text-decoration: none;
		background-color: ${ADMIN_ACTIVE_BG_COLOR};
	}

	.item-icon {
		width: 15px;
		height: 15px;

		margin: 0 10px;
	}

	&:hover {
		cursor: pointer;
	}
`;

export const SideBarItem = styled(NavLink)`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	color: ${ADMIN_TEXT_COLOR};
	font-size: 16px;

	padding: 0 15px;

	&.active {
		background-color: ${ADMIN_ACTIVE_BG_COLOR};
	}

	&:hover {
		text-decoration: none;
		color: ${ADMIN_TEXT_COLOR};
	}

	.item-icon {
		width: 15px;
		height: 15px;

		margin: 0 10px;
	}

	&:hover {
		cursor: pointer;
	}
`;
