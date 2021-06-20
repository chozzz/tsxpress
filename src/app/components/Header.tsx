import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useWindowScroll } from "react-use";
import SidenavToggleComp from "@components/navs/SidenavToggleComp";
import logo from "@assets/images/logo.svg";

const Header: React.FC = () => {
  const router = useRouter(),
    currentPath = router.asPath,
    { y: windowScrollY } = useWindowScroll(),
    [showMiniHeader, setShowMiniHeader] = useState(false),
    getNavItemClasses = useCallback(
      (path: string) => {
        return classNames("nav-item", {
          active: currentPath === path,
        });
      },
      [currentPath]
    );

  useEffect(() => {
    if (!showMiniHeader && windowScrollY > 300) {
      setShowMiniHeader(true);
    } else if (showMiniHeader && windowScrollY <= 300) {
      setShowMiniHeader(false);
    }
  }, [windowScrollY]);

  const classes = classNames("header-comp", {
    scrolled: showMiniHeader,
  });

  return (
    <header className={classes} data-testid="header-comp">
      <div className="container-fluid">
        <div className="wrapper">
          <nav className="navbar navbar-expand main-navbar">
            <Link href="/" shallow={true}>
              <a className="navbar-brand p-0">{/* <img className="logo" src={logo} alt="Logo" width={40} height={40} /> */}</a>
            </Link>
            <ul className="navbar-nav mx-3 mx-lg-5 w-100 d-none d-lg-flex" role="navigation">
              <li className={getNavItemClasses("/")}>
                <Link href="/" shallow={true}>
                  <a title="Home" aria-label="Home" aria-hidden="false" className="nav-link">
                    Home
                  </a>
                </Link>
              </li>
              <li className={getNavItemClasses("/about")}>
                <Link href="/about" shallow={true}>
                  <a title="About" aria-label="About" aria-hidden="false" className="nav-link">
                    About
                  </a>
                </Link>
              </li>
              <li className={getNavItemClasses("/services")}>
                <Link href="/services" shallow={true}>
                  <a title="Services" aria-label="Services" aria-hidden="false" className="nav-link">
                    Services
                  </a>
                </Link>
              </li>
              <li className={getNavItemClasses("/teams")}>
                <Link href="/teams" shallow={true}>
                  <a title="Team" aria-label="Team" aria-hidden="false" className="nav-link">
                    Team
                  </a>
                </Link>
              </li>
              <li className={getNavItemClasses("/blogs")}>
                <Link href="/blogs" shallow={true}>
                  <a title="Blogs" aria-label="Blogs" aria-hidden="false" className="nav-link">
                    Blogs
                  </a>
                </Link>
              </li>
              <li className={getNavItemClasses("/faqs")}>
                <Link href="/faqs" shallow={true}>
                  <a title="FAQ" aria-label="FAQ" aria-hidden="false" className="nav-link">
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>

            <SidenavToggleComp className="ml-auto d-lg-none">
              <ul className="nav d-flex flex-column text-right w-100 px-4" role="navigation">
                <li className={getNavItemClasses("/")}>
                  <Link href="/">
                    <a aria-label="Home" aria-hidden="false" className="nav-link">
                      Home
                    </a>
                  </Link>
                </li>
                <li className={getNavItemClasses("/about")}>
                  <Link href="/about" shallow={true}>
                    <a title="About" aria-label="About" aria-hidden="false" className="nav-link">
                      About
                    </a>
                  </Link>
                </li>
                <li className={getNavItemClasses("/services")}>
                  <Link href="/services">
                    <a aria-label="Services" aria-hidden="false" className="nav-link">
                      Services
                    </a>
                  </Link>
                </li>
                <li className={getNavItemClasses("/teams")}>
                  <Link href="/teams" shallow={true}>
                    <a title="Team" aria-label="Team" aria-hidden="false" className="nav-link">
                      Team
                    </a>
                  </Link>
                </li>
                <li className={getNavItemClasses("/blogs")}>
                  <Link href="/blogs" shallow={true}>
                    <a title="Blogs" aria-label="Blogs" aria-hidden="false" className="nav-link">
                      Blogs
                    </a>
                  </Link>
                </li>
                <li className={getNavItemClasses("/faqs")}>
                  <Link href="/faqs">
                    <a aria-label="FAQ" aria-hidden="false" className="nav-link">
                      FAQ
                    </a>
                  </Link>
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
