import React, { ReactElement, useEffect, useState } from 'react';
import globalClasses from 'assets/scss/globalClasses.module.scss';
import classes from './Header.module.scss';
import CenteredContent from '../CenteredContent/CenteredContent';
import classNames from 'classnames';
import { navLinks } from '../../../utils/configs/navLinksConfig';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useBreakpoints } from '../../../utils/hooks/useBreapoints';

export default function Header(): ReactElement {
  const location = useLocation();

  const breakpoints = useBreakpoints();

  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const [currentOpenedSection, setCurrentOpenedSection] = useState<
    string | null
  >(null);

  useEffect(() => {
    setShowMobileNav(false);

    setCurrentOpenedSection(null);
  }, [location.pathname, breakpoints.up('md')]);

  console.log(showMobileNav);

  return (
    <CenteredContent
      maxContentWidth={1240}
      wrapperStyles={{
        transition: '0.2s',
        background: showMobileNav ? '#000' : '#fbfbfb',
        boxShadow:
          breakpoints.down('md') && !showMobileNav
            ? '0px 0px 2px #00000012'
            : undefined,
      }}
      inlinePadding={breakpoints.up('md') ? 30 : 20}
    >
      <header
        className={classNames(
          classes.header,
          showMobileNav && classes.nav_mobile_open,
        )}
      >
        <h3 className={classes.logo}>Logo Here</h3>

        <nav className={classes.nav_desktop}>
          <ul className={classes.nav_desktop_list}>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={classNames(
                  classes.nav_desktop_item,
                  currentOpenedSection === link.name && classes.open,
                )}
              >
                <div>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      classNames(
                        classes.nav_desktop_link,
                        isActive && classes.active,
                      )
                    }
                  >
                    {link.title}
                  </NavLink>
                  {!!link.children && (
                    <i
                      className="icon-arrow"
                      onClick={() => {
                        if (currentOpenedSection === link.name) {
                          setCurrentOpenedSection(null);
                        } else {
                          setCurrentOpenedSection(link.name);
                        }
                      }}
                    />
                  )}
                </div>
                {!!link.children && (
                  <ul className={classes.nav_desktop_link_children}>
                    {link.children.map((child) => (
                      <li key={child.name}>
                        <NavLink
                          to={child.href}
                          className={({ isActive }) =>
                            classNames(
                              classes.nav_desktop_link,
                              isActive && classes.active,
                            )
                          }
                        >
                          {child.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className={classes.nav_mobile_features}>
            <Link to="/profile">
              <span className={classNames(globalClasses.icon_button)}>
                <i className="icon-person"></i>
              </span>
            </Link>
            <Link to="/cart">
              <span className={classNames(globalClasses.icon_button)}>
                <i className="icon-cart"></i>
              </span>
            </Link>
          </div>
        </nav>

        <span
          className={classNames(
            classes.nav_mobile_icon,
            showMobileNav && classes.open,
          )}
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <span />
        </span>

        <nav className={classes.nav_mobile}>
          <ul className={classes.nav_mobile_list}>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={classNames(
                  classes.nav_mobile_item,
                  currentOpenedSection === link.name && classes.open,
                )}
              >
                <div>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      classNames(
                        classes.nav_mobile_link,
                        isActive && classes.active,
                      )
                    }
                  >
                    {link.title}
                  </NavLink>
                  {!!link.children && (
                    <i
                      className="icon-arrow"
                      onClick={() => {
                        if (currentOpenedSection === link.name) {
                          setCurrentOpenedSection(null);
                        } else {
                          setCurrentOpenedSection(link.name);
                        }
                      }}
                    />
                  )}
                </div>
                {!!link.children && (
                  <ul className={classes.nav_mobile_link_children}>
                    {link.children.map((child) => (
                      <li key={child.name}>
                        <NavLink
                          to={child.href}
                          className={({ isActive }) =>
                            classNames(
                              classes.nav_mobile_link,
                              isActive && classes.active,
                            )
                          }
                        >
                          {child.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className={classes.nav_mobile_features}>
            <Link to="/profile">
              <span
                className={classNames(
                  globalClasses.icon_button,
                  classes.nav_mobile_feature,
                )}
              >
                <i className="icon-person"></i>
              </span>
            </Link>
            <Link to="/cart">
              <span
                className={classNames(
                  globalClasses.icon_button,
                  classes.nav_mobile_feature,
                )}
              >
                <i className="icon-cart"></i>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </CenteredContent>
  );
}
