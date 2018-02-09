"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';

import MainPageMcDonalds from './MainPage';
import MainPageBurgerKing from './MainPage';
import MainPage from './Main';


class intRouting extends React.Component {

  render() {
    return (
          <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/McDonalds"  component={MainPageMcDonalds} />
            <Route path="/BurgerKing"  component={MainPageBurgerKing} />
          </div>
    );

  }

}
const Routing = withRouter(intRouting);
export default Routing;
