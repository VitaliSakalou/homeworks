"use strict";

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from './reducers.js';
import Counter from '../components/reduxTest/testComponent';
import ComponentDiagram from '../components/reduxTest/componentDiagram';
import '../components/CounterButton/CounterButton.css';

let store=createStore(combinedReducer);
let mult = [
  {value: 2, code:1},
  {value: 3, code:2},
  {value: 4, code:3},
  {value: 5, code:4},
  {value: 6, code:5},
  ];

class MainPage extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
          <div>
              {/* <h1>демо работы Redux</h1>
              <CounterButton counterid={111} />
              <CounterButton counterid={222} /> */}
              <h1>Test Redux</h1>
              <div className = 'BtnBlock'>
              {mult.map(V => 
                <Counter counterid={V.code} ten = {V.value} key = {V.code}/>
              )}
              </div>
              <div className=''>
              <ComponentDiagram arrMult = {mult}/>
              </div>
          </div>
      </Provider>
    );

  }

}

export default MainPage;
