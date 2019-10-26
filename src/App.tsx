import * as React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Page404 } from 'views/Page404';

import { Navbar } from 'components/Navbar';
import { Topbar } from 'components/Topbar';
import { Footer } from 'components/Footer';

import { LanguageProvider } from 'stores/Language';
import { NewsProvider } from 'stores/News';

import { getPathLinks, IPathLink } from 'utils/getPathLinks';

import './App.scss';

const LOGO_ICON = 'http://www.kpi.kharkov.ua/ukr/wp-content/uploads/sites/2/2018/02/logo.png';

const App: React.FC = () => {
  const links: IPathLink[] = getPathLinks();
  const navbarRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const isScrolledToButton = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    if (!navbarRef.current || isScrolledToButton) {
      return;
    }

    const sticky = navbarRef.current.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbarRef.current.classList.add("sticky")
    } else {
      navbarRef.current.classList.remove("sticky");
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="application">
          <Topbar />
          <Navbar logoIcon={LOGO_ICON} reference={navbarRef} />

          <NewsProvider>
            <div className="content-section">
              <Switch>
                {
                  links.map(link => (
                    <Route key={link.path} path={link.path} exact component={link.component} />
                  ))
                }
                <Route component={Page404} />
              </Switch>
            </div>
          </NewsProvider>

          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
