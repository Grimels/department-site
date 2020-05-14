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
    DropdownMenu, DropdownNavLink, DropdownExternalLink,
} from 'styled/Navigation';
import { TextAndIcon } from 'styled/Icon';

import { useLanguage } from 'hooks/useLanguage';
import { localStorageManager } from 'utils/localStorageManager';
import { Language, ENG, RU, UA, LANGUAGE } from 'constants/language';
import DOWN_ARROW_ICON from 'assets/icons/down-arrow.png';
import styled from 'styled-components';
import { MAIN_COLOR } from 'styled/constants';


const StyledDropdown = styled(DropdownMenu)`
	background-color: white;
`;

const StyledDropdownItem = styled(DropdownItem)`
    * {
        color: ${MAIN_COLOR}!important;
    }
`;

export const NavBar: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [ isOpen, setIsOpen ] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    React.useEffect(() => {
        const savedLanguage = localStorageManager.get(LANGUAGE);
        if (savedLanguage) {
            setLanguage(savedLanguage as Language);
        }

        document.title = getUniversityName(language);
    }, [ setLanguage ]);

    const renderNestedNavLink = (parentPath: string, navLink: NavigationLink) => {
        if (navLink.routes) {
            return renderNavDropDown(navLink);
        }
        if (navLink.link) {
            return <DropdownExternalLink href={navLink.link} target='_blank'>{navLink.name}</DropdownExternalLink>;
        }
        return <DropdownNavLink to={`${parentPath}${navLink.route}`}>{navLink.name}</DropdownNavLink>;
    };

    const renderNavigationItemStrategy = (navLink: NavigationLink) => {
        if (navLink.routes) {
            return renderNavDropDown(navLink);
        }
        return <NavLink to={navLink.route}>{navLink.name}</NavLink>;
    };

    const renderNavLink = (navLink: NavigationLink) => (
        <NavItem key={navLink.name}>
            {renderNavigationItemStrategy(navLink)}
        </NavItem>
    );

    const renderNavLinks = (navLinks: NavigationLink[]) => navLinks.map(renderNavLink);

    const renderNavDropDownItem = (parentPath: string, navLinks: NavigationLink[]) => {
        return navLinks.map((navLink) => {
            if(navLink.routes) {
                return renderNavDropDown(navLink, true);
            }
            return <StyledDropdownItem>{renderNestedNavLink(parentPath, navLink)}</StyledDropdownItem>;
        });
    };

    const renderNavDropDown = (navLink: NavigationLink, isNested = false) => {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav style={isNested ? { color: MAIN_COLOR, padding: '0.25rem 1.5rem', margin: '10px 20px' } : {}}>
                    <TextAndIcon icon={DOWN_ARROW_ICON} text={navLink.name}/>
                </DropdownToggle>
                <StyledDropdown
                    right>{navLink.routes && renderNavDropDownItem(navLink.route, navLink.routes)}</StyledDropdown>
            </UncontrolledDropdown>
        );
    };

    const getAvailableLanguages = (languages: Language[]) =>
        languages
            .filter((lang) => lang !== language)
            .map((lang) => <LanguageSelector onClick={() => setLanguage(lang)}>{lang}</LanguageSelector>);

    const availableLanguages = getAvailableLanguages([ UA, RU, ENG ]);
    return (
        <div>
            <Navbar expand='lg'>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        {renderNavLinks(navLinksByLanguage.get(language) || [])}
                    </Nav>
                </Collapse>
                <NavbarBrand>
                    <div>
                        <LanguageIcon/>
                    </div>
                    {availableLanguages[0]}
                    <span style={{ color: 'white', margin: '0 2px' }}> | </span>
                    {availableLanguages[1]}
                </NavbarBrand>
            </Navbar>
        </div>
    );
};
