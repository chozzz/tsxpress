import { Router } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import classNames from "classnames";

type ISidenavToggleProps = {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
};

const SidenavToggleComp: React.FC<ISidenavToggleProps> = (props: ISidenavToggleProps) => {
  const sideNavRef = useRef<HTMLElement>(null),
    navToggleRef = useRef<HTMLDivElement>(null),
    [isNavbarOpened, setNavbarOpened] = useState(false),
    toggleNavbar = (): void => {
      setNavbarOpened(!isNavbarOpened);
    };

  /**
   * Collapses navbar when user click-aways from navbar components
   */
  useClickAway(sideNavRef, (evt) => {
    /** Ignore */
    const target = evt?.target as HTMLElement;
    if (target.classList.contains("no-ca")) {
      return;
    }

    if (isNavbarOpened) {
      setNavbarOpened(false);
    }
  });

  /**
   * Collapses navbar when user changes route
   */
  useEffect(() => {
    const onRouteChangeCompleted = (url: string) => {
      if (isNavbarOpened) {
        setNavbarOpened(false);
      }
    };

    Router.events.on("routeChangeComplete", onRouteChangeCompleted);

    return () => {
      Router.events.off("routeChangeComplete", onRouteChangeCompleted);
    };
  }, [isNavbarOpened]);

  const classes = classNames("sidenav-toggle-comp", props.className),
    toggleClasses = classNames("navbar-toggle no-ca", {
      expanded: isNavbarOpened,
      collapsed: isNavbarOpened,
    }),
    menuClasses = classNames("flying-menu d-flex", {
      show: isNavbarOpened,
    });

  return (
    <div className={classes} data-testid="sidenav-toggle-comp">
      <div ref={navToggleRef} className="d-flex burger">
        <button title="Sidenav" type="button" className={toggleClasses} onClick={toggleNavbar}>
          <span className="icon-bar no-ca"></span>
          <span className="icon-bar no-ca"></span>
          <span className="icon-bar no-ca"></span>
        </button>
      </div>
      <div className={menuClasses}>
        <nav ref={sideNavRef} className="menu" role="navigation">
          {props.children}
        </nav>
      </div>
    </div>
  );
};

export default SidenavToggleComp;
