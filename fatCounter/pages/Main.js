"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import './PagesLinks.css';

class intMain extends React.PureComponent {

  render() {
    return (
      <div className = {"MainPage"}>
        <div className = {"LinksBlock"}>
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLinkMain">
              <span className="backgroundMain"><img className="PageLink" src = {"/./img/logo/MAINW.png"}/></span>
          </NavLink>
          <NavLink to="/McDonalds" className="PageLink" activeClassName="ActivePageLinkMain">
            <span className="backgroundMC"><img className="PageLink" src = {"/./img/logo/MCLOGOW.png"}/></span>
          </NavLink>
          <NavLink to="/BurgerKing" className="PageLink" activeClassName="ActivePageLinkMain">
              <span className="backgroundBK"><img className="PageLink" src = {"/./img/logo/BKLOGOB.png"}/></span>
          </NavLink>
         </div>
        <div className="PageLinkLogo">
          <img className="Logo" src = {"/./img/logo/mainLOGOF.png"}/>
          <div className = {"copyRight"}>© VitaliSakalou</div>
        </div>
       
      </div>
    );

  }

}
const Main = withRouter(intMain);
export default Main;
