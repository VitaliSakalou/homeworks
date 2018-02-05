import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { view_modal_window } from '../ListOfFood/ListOfFoodAction';

import ImgFood from './ImgFood/ImgFood';
import './Table.css';


class intTable extends React.PureComponent {

  static propTypes = {
    products: PropTypes.object,
  };

  state = {
  
  }

  viewModalWindow = (e) => {
    let url = window.location.href.split('/')[window.location.href.split('/').length-1].toLowerCase();
    this.props.dispatch( view_modal_window(e.currentTarget.dataset.identifier, url) );
  };

  render() {  
    let url = window.location.href.split('/')[window.location.href.split('/').length-1].toLowerCase();
    let arr = null;
    switch ( url ) {
      case 'mcdonalds':
      arr = this.props.products.mcdonalds;
        break;
      case 'burgerking':
      arr = this.props.products.burgerking;
        break;
      default:
        alert('неизвестная страница');
    }
    let grafics = (
          <div className={"foodImage"}>
              {arr.map((item, index) => {if (item.checked){
                 let invisible = '';
                if (item.count > 1){
                 invisible = 'visible';
                }
                  return (
                    //  console.log("render", item.code),
                  <ImgFood key = {item.code} src = {item.img} data_identifier = {item.code} 
                           count = {item.count} invisible = {invisible} code = {item.code} 
                           cbViewModalWindow = {this.viewModalWindow} name = {item.name}/>
                       
                         )
              }})
              }
          </div>
    );
    return grafics;
  }
}

const mapStateToProps = function (state) {
  // console.log(state.Product.products);
  return {
    // раздел Redux state под именем Product будет доступен
    // данному компоненту как this.props.products
    products: state.Product,
  };
};

const Table = connect(mapStateToProps)(intTable);

export default Table;
