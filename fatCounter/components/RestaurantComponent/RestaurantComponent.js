import React from 'react';
import PropTypes from 'prop-types';

import ListOfFood from '../ListOfFood/ListOfFood';
import FoodGrafics from '../FoodGrafics/FoodGrafics';
import Table from '../Table/Table';
import { NavLink } from 'react-router-dom';


class intRestaurantComponent extends React.PureComponent {

  static propTypes = {
    // products: PropTypes.object,
  };

  render() {  
    return(
      <div className = {"RestaurantComponent"}>
      <div>
        <NavLink to="/" className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/McDonalds" className="PageLink" activeClassName="ActivePageLink">McDonalds</NavLink>
        <NavLink to="/BurgerKing" className="PageLink" activeClassName="ActivePageLink">BurgerKing</NavLink>
        </div>
        <ListOfFood/>
        <Table/>
        <FoodGrafics/>
      </div>
    );

  }

}

export default intRestaurantComponent;
