import React, { ReactElement } from 'react';
import classes from './Footer.module.scss';
import CenteredContent from '../CenteredContent/CenteredContent';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useBreakpoints } from '../../../utils/hooks/useBreapoints';
import globalClasses from '../../../assets/scss/globalClasses.module.scss';

export default function Footer(): ReactElement {
  const breakpoints = useBreakpoints();

  return (
    <CenteredContent
      maxContentWidth={1280}
      wrapperStyles={{
        transition: '0.2s',
        background: '#000',
      }}
      inlinePadding={breakpoints.up('md') ? 30 : 20}
    >
      <footer className={classNames(classes.footer)}>
        <h3 className={classes.logo}>Logo Here</h3>

        <div className={classes.container}>
          <div className={classNames(classes.section, classes.contacts)}>
            <h4>Reach us</h4>
            <div className={classes.contact}>
              <span>
                <i className="icon-phone" />
              </span>
              <a href="tel: +1012 3456 789">+1012 3456 789</a>
            </div>
            <div className={classes.contact}>
              <span>
                <i className="icon-mail" />
              </span>
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </div>
            <div className={classes.contact}>
              <span>
                <i className="icon-place" />
              </span>
              <a href="https://maps.app.goo.gl/P4qWCXovwD63z8us6">
                132 Dartmouth Street Boston,
                <br /> Massachusetts 02156 United States
              </a>
            </div>
          </div>

          <div className={classes.section}>
            <h4>Company</h4>
            <Link className={classes.section_link} to="/about">
              About
            </Link>
            <Link className={classes.section_link} to="/contact">
              Contact
            </Link>
            <Link className={classes.section_link} to="/blogs">
              Blogs
            </Link>
          </div>

          <div className={classes.section}>
            <h4>Legal</h4>
            <Link className={classes.section_link} to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className={classes.section_link} to="/terms-services">
              Terms & Services
            </Link>
            <Link className={classes.section_link} to="/terms-of-use">
              Terms of Use
            </Link>
            <Link className={classes.section_link} to="/refund-policy">
              Refund Policy
            </Link>
          </div>

          <div className={classes.section}>
            <h4>Quick Links</h4>
            <Link className={classes.section_link} to="/techlabz-keybox">
              Techlabz Keybox
            </Link>
            <Link className={classes.section_link} to="/downloads">
              Downloads
            </Link>
            <Link className={classes.section_link} to="/forum">
              Forum
            </Link>
          </div>

          <div className={classNames(classes.section, classes.subscribe)}>
            <h4>Join Our Newsletter</h4>

            <div className={classes.subscribe_form}>
              <input
                type="text"
                name="first_name"
                required
                placeholder="Your email address"
              />
              <button type="submit" className={globalClasses.button}>
                Subscribe
              </button>
            </div>

            <p>
              * Will send you weekly updates for your better tool management.
            </p>
          </div>
        </div>
      </footer>
    </CenteredContent>
  );
}
