import { APP_TITLE, SOCIAL_FACEBOOK, SOCIAL_LINKEDIN } from "@app/utilities/constants";
import React from "react";

const Footer: React.FC = () => {
  const currentDate = new Date(),
    currentYear = currentDate.getFullYear();

  return (
    <footer className="footer-comp" data-testid="footer-comp">
      <div className="container">
        <div className="wrapper">
          <nav className="navbar footer-navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span>
                  &copy; {currentYear} {APP_TITLE}
                </span>
              </li>
            </ul>
            <ul className="nav-social navbar-nav navbar-expand ml-md-auto">
              <li className="nav-item">
                <a href={SOCIAL_FACEBOOK} className="btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href={SOCIAL_LINKEDIN} className="btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
