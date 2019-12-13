import React, { RefObject } from 'react';

import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Navbar as BootstrapNavbar, NavbarToggler, Collapse, Nav } from 'reactstrap';

import { useLanguage } from 'hooks/useLanguage';
import { getPathLinks } from 'utils/getPathLinks';
import { setPageTitle } from 'utils/setPageTitle';

import { DEPARTMENT_NAME } from './constants';

import './Navbar.scss';

interface INavbarView {
  logoIcon: string;
  location: { pathname: string };
  reference?: RefObject<HTMLDivElement>;
}

const NavbarView: React.FC<RouteComponentProps & INavbarView> = (props) => {
  const { location: { pathname }, reference, logoIcon } = props;
  const { language } = useLanguage();

  const [isToggled, setIsToggled] = React.useState(false);
  const toggle = () => setIsToggled(!isToggled);

  const isActiveLabel = (path: string) => path === pathname;

  React.useEffect(() => {
    setPageTitle(logoIcon, DEPARTMENT_NAME[language]);
  }, [language]);

  const renderNavigation = () => getPathLinks().map(pathLink => (
    <NavLink
      key={`nav-item-${pathLink.path}`}
      to={pathLink.path}
      className={`nav-item ${isActiveLabel(pathLink.path) ? 'current' : ''}`}
    >
      <p>{pathLink.label[language]}</p>
    </NavLink>
  ));

  return (
    <div ref={reference}>
      <BootstrapNavbar color="light" light expand="md">
        <NavLink to='/' className="logo">
          <img src={logoIcon} alt="" />
          <span className="logo-department-text">{DEPARTMENT_NAME[language]}</span>
        </NavLink>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isToggled} navbar className="mr-2">
          <Nav className="ml-sm-auto" navbar>
            {renderNavigation()}
          </Nav>
        </Collapse>

      </BootstrapNavbar>
    </div>
  );
}

export const Navbar = withRouter(NavbarView);