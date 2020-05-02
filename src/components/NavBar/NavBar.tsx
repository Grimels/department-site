import * as React from 'react';

import { Collapse, UncontrolledDropdown, DropdownItem } from 'reactstrap';

import { navLinksByLanguage, NavigationLink, getUniversityName } from './NavbarLinks';
import {
	NavItem,
	NavLink,
	LanguageSelector,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	LanguageIcon,
	Nav,
	DropdownToggle,
	DropdownMenu,
} from 'styled/Navigation';
import { TextAndIcon } from 'styled/Icon';

import { useLanguage } from 'hooks/useLanguage';
import { localStorageManager } from 'utils/localStorageManager';
import { Language, ENG, RU, UA, LANGUAGE } from 'constants/language';
import DOWN_ARROW_ICON from 'assets/icons/down-arrow.png';

export const NavBar: React.FC = () => {
	const { language, setLanguage } = useLanguage();
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);

	React.useEffect(() => {
		const savedLanguage = localStorageManager.get(LANGUAGE);
		if (savedLanguage) {
			setLanguage(savedLanguage as Language);
		}

		document.title = getUniversityName(language);
	}, [setLanguage]);

	const renderNavLink = (navLink: NavigationLink) => (
		<NavItem key={navLink.name}>
			{navLink.routes ? (
				renderNavDropDown(navLink)
			) : (
				<NavLink to={navLink.route}>{navLink.name}</NavLink>
			)}
		</NavItem>
	);

	const renderNavLinks = (navLinks: NavigationLink[]) => navLinks.map(renderNavLink);

	const renderNavDropDownItem = (navLinks: NavigationLink[]) => {
		return navLinks.map((navLink) => <DropdownItem>{renderNavLink(navLink)}</DropdownItem>);
	};

	const renderNavDropDown = (navLink: NavigationLink) => {
		return (
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav>
					<TextAndIcon icon={DOWN_ARROW_ICON} text={navLink.name} />
				</DropdownToggle>
				<DropdownMenu right>{navLink.routes && renderNavDropDownItem(navLink.routes)}</DropdownMenu>
			</UncontrolledDropdown>
		);
	};

	const getAvailableLanguages = (languages: Language[]) =>
		languages
			.filter((lang) => lang !== language)
			.map((lang) => <LanguageSelector onClick={() => setLanguage(lang)}>{lang}</LanguageSelector>);

	const availableLanguages = getAvailableLanguages([UA, RU, ENG]);
	return (
		<div>
			<Navbar expand='lg'>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						{renderNavLinks(navLinksByLanguage.get(language) || [])}
					</Nav>
				</Collapse>
				<NavbarBrand>
					<div>
						<LanguageIcon />
					</div>
					{availableLanguages[0]}
					<span style={{ color: 'white', margin: '0 2px' }}> | </span>
					{availableLanguages[1]}
				</NavbarBrand>
			</Navbar>
		</div>
	);
};
