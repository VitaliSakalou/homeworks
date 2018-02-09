import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {default as isoFetch} from 'isomorphic-fetch';
import { GridLoader } from 'halogenium';

import './PagesLinks.css';
import {data_Request} from '../components/ListOfFood/ListOfFoodAction';

import Routing from './Routing';

class intPagesRouter extends React.PureComponent {

  static propTypes = {
     products: PropTypes.object,
    //  data_Request: PropTypes.func.isRequired
  };

  componentDidMount= () => {
    let fetchError = (errorMessage) => {
      // let initState=require('../../Foods.json');
      // this.props.dispatch(this.props.data_Request(initState));
      //  console.error(showStr);
    };
   
    let fetchSuccess = (loadedData) => {
      console.log("load",loadedData);
      this.props.dispatch(data_Request(loadedData));
    };
  
    let loadData = () => {
      isoFetch("https://api.myjson.com/bins/1ef2yp", {
          method: 'get',
          headers: {
              "Accept": "application/json",
          },
      })
          .then( (response) => {
              if (!response.ok) {
                  let Err=new Error("fetch error " + response.status);
                  Err.userMessage="Ошибка связи";
                  throw Err;
              }
              else
                  return response.json();
          })
          .then( (data) => {
              try {
                  fetchSuccess(data);
              }
              catch ( error ){
                  fetchError(error.message);
              }
          })
          .catch( (error) => {
              fetchError(error.userMessage||error.message);
          })
      ;
  
    };
    loadData();
  };

  state = {
  };
          
  render() {
  if (this.props.products.data === false){
    return (<div className = {"Loader"}>
              <div className = {"LoaderItem"}>
                  <GridLoader color="gold" size="50px" margin="5px"/>
               </div>
            </div>)
  }
    return (
          <Routing/>
    );
    
  }

}
const mapStateToProps = function (state) {
  return {
    // раздел Redux state под именем showProduct будет доступен
    // данному компоненту как this.props.products
    products: state.Product,
  };
};

// const mapDispatch = function (dispatch) {
//   return {
//     data_Request: (data) => dispatch(data_Request(data)) 
//   }
// }

// https://github.com/ReactTraining/react-router/issues/4671
const PagesRouter = withRouter(connect(mapStateToProps)(intPagesRouter));
    
export default PagesRouter;