﻿import React from 'react';
import PropTypes from 'prop-types';

import ListOfFood from '../ListOfFood/ListOfFood';
import FoodGrafics from '../FoodGrafics/FoodGrafics';
import Table from '../Table/Table';
import { NavLink } from 'react-router-dom';

import './RestaurantComponent.css';

class intRestaurantComponent extends React.PureComponent {

  static propTypes = {
    // products: PropTypes.object,
  };

  render() {  
    return(
      <div className = {"RestaurantComponent"}>
        <div className = {"LinksBlock"}>
          <NavLink to="/" className="PageLink" activeClassName="ActivePageLink">
             <span className="backgroundMain"><img className="PageLink" src = {"../../img/logo/MAINW.png"}/></span>
          </NavLink>
          <NavLink to="/McDonalds" className="PageLink" activeClassName="ActivePageLinkMc">
            <span className="backgroundMC"><img className="PageLink" src = {"../../img/logo/MCLOGOW.png"}/></span>
          </NavLink>
          <NavLink to="/BurgerKing" className="PageLink" activeClassName="ActivePageLinkBk">
              <span className="backgroundBK"><img className="PageLink" src = {"../../img/logo/BKLOGOB.png"}/></span>
          </NavLink>
        </div>
        {/* <div className="BlockOfListTableGrafics"> */}
          <ListOfFood/>
          <Table/>
          <FoodGrafics/>
        {/* </div> */}
      </div>
    );

  }

}

export default intRestaurantComponent;
