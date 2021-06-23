import React from "react";
import Link from "next/link";
import classNames from "classnames";
import SidenavToggleComp from "@components/navs/SidenavToggleComp";
import logo from "@assets/images/logo.svg";

const Header: React.FC = () => {
  const classes = classNames("header-comp");

  return (
    <header className={classes} data-testid="header-comp">
      <div className="container">
        <div className="wrapper">
          <nav className="navbar navbar-expand main-navbar">
            <Link href="/" shallow={true}>
              <a className="navbar-brand p-0 nav-link">
                <img className="logo me-2" src={logo} alt="Logo" width={40} height={40} />
                Tsxpress
              </a>
            </Link>
            <ul className="navbar-nav d-none d-lg-flex ms-auto" role="navigation">
              <li className="nav-item">
                <a href="#" title="Home" aria-label="Home" aria-hidden="false" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" title="Other" aria-label="Other" aria-hidden="false" className="nav-link">
                  Other
                </a>
              </li>
            </ul>

            <SidenavToggleComp className="ms-auto d-lg-none">
              <ul className="nav d-flex flex-column text-end w-100 px-2" role="navigation">
                <li className="nav-item">
                  <a href="#" title="Home" aria-label="Home" aria-hidden="false" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" title="Other" aria-label="Other" aria-hidden="false" className="nav-link">
                    Other
                  </a>
                </li>
              </ul>
            </SidenavToggleComp>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
