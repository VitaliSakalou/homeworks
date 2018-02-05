"use strict";

import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class Main extends React.PureComponent {

  render() {
    return (
      <div className = {"MainPage"}>
        <div className = {"LinksBlock"}>
          {/* <NavLink to="/"  activeClassName="ActivePageLink"><img className="PageLink" src = {"../img/logo/main.jpg"}/></NavLink> */}
          <NavLink to="/McDonalds"  activeClassName="ActivePageLink"><img className="PageLink" src = {"../img/logo/mclogo.jpg"}/></NavLink>
          <NavLink to="/BurgerKing"  activeClassName="ActivePageLink"><img className="PageLink" src = {"../img/logo/bklogo.jpg"}/></NavLink>
        </div>
        <div className="PageLinkLogo"><img className="Logo" src = {"../img/logo/logo.png"}/></div>
      </div>
    );

  }

}

export default Main;
