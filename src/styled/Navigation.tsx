import styled from 'styled-components';
import {
	Navbar as DefaultNavbar,
	NavbarBrand as DefaultNavbarBrand,
	NavbarToggler as DefaultNavbarToggler,
	Nav as DefaultNav,
	NavItem as DefaultNavItem,
	DropdownToggle as StrapDropdownToggle,
	DropdownMenu as StrapDropdownMenu,
	DropdownItem as StrapDropdownItem,
} from 'reactstrap';

import { NavLink as RouteNavLink } from 'react-router-dom';

import { MAIN_COLOR, WHITE_COLOR } from './constants';

import MENU_ICON from 'assets/icons/menu.png';
import LANG_ICON from 'assets/icons/language.png';

const Navbar = styled(DefaultNavbar)`
	min-height: 85px;
	width: 100%;
	background-color: ${MAIN_COLOR};

	display: flex;
	flex-direction: row;
`;

const DropdownMenu = styled(StrapDropdownMenu)`
	background-color: ${MAIN_COLOR};
`;

const NavbarBrand = styled(DefaultNavbarBrand)`
	display: flex;
	width: 55px;
`;

const LanguageIcon = styled.div`
	margin-right: 5px;
	&::before {
		content: url(${LANG_ICON});
		vertical-align: middle;
	}
`;

const LanguageSelector = styled.span`
	color: ${WHITE_COLOR};
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 36px;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
		color: ${WHITE_COLOR};
	}
`;

const NavbarToggler = styled(DefaultNavbarToggler)`
	background-image: url(${MENU_ICON});
	width: 30px;
	height: 30px;
`;

const Nav = styled(DefaultNav)`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const NavItem = styled(DefaultNavItem)`
	display: flex;
`;

const linkStyle = `
display: flex;

color: ${WHITE_COLOR};
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-transform: uppercase;

margin: auto 10px;
text-decoration: none;

&:hover {
	text-decoration: underline;
	cursor: pointer;
	color: ${WHITE_COLOR};
}
`;

const DropdownToggle = styled(StrapDropdownToggle)`
	${linkStyle}
`;

const NavLink = styled(RouteNavLink)`
	${linkStyle}
`;

const DropdownNavLink = styled(NavLink)`
	${linkStyle};
	padding: 10px;
`;

export {
	Navbar,
	NavbarBrand,
	LanguageIcon,
	LanguageSelector,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	DropdownToggle,
	DropdownMenu,
	DropdownNavLink
};
