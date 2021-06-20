import React from "react";
import { APP_TITLE, SOCIAL_FACEBOOK, SOCIAL_IG, SOCIAL_LINKEDIN } from "@app/utilities/constants";

const Footer: React.FC = () => {
  const currentDate = new Date(),
    currentYear = currentDate.getFullYear();

  return (
    <footer className="footer-comp" data-testid="footer-comp">
      <div className="footer-wrapper container">
        <nav className="navbar navbar-expand">
          <ul className="nav-social navbar-nav">
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
            <li className="nav-item">
              <a href={SOCIAL_IG} className="btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
        <p className="">
          &copy; {currentYear} {APP_TITLE}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
