import React from "react";
import { Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ReactComponent as BcgMenu } from "../img/bcg.svg";
import { ReactComponent as Logo } from "../img/header-logo.svg";
import { ReactComponent as LuHeader } from "../img/lu-header.svg";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="menu">
          <div className="header-logo">
            <LuHeader />
            <Logo />
          </div>
          <div className="list-menu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                >
                  Consulta CEP
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/protocolo"
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                >
                  protocolo HTTP
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="bcg-menu">
          <BcgMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
