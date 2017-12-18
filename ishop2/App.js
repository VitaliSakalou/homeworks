"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import DemoPage from './components/main';

let productsArr=require('./products.json');


ReactDOM.render(
  <DemoPage products={productsArr}/>
  , document.getElementById('container') 
);

