import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { view_modal_window } from '../ListOfFood/ListOfFoodAction';

import './ModalWindow.css';


class intModalWindow extends React.PureComponent {

  static propTypes = {
    products: PropTypes.object,
  };

   state = {

  }

  viewModalWindow = (e) => {
    let url = window.location.href.split('/')[window.location.href.split('/').length-1].toLowerCase();
    console.log(e.currentTarget.dataset.identifier);
    console.log(url);
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
    let className = '';
    let id = null;
    let src = '';
    {arr.some((item, index) => {if (item.modal){
        className = '_view';
        id = item.code;
        src = item.img;
       }
      }
    )
   }
return (
<div className = {"ModalWindow"+className} onClick = {this.viewModalWindow} data-identifier = {id}>
<img className = {'ModalImage'} src = {"../../img/"+src+".png"}/>
<p className = {'ModalDescription'}>ВОППЕР® — это вкуснейшая приготовленная на огне 100% говядина с сочными помидорами, свежим нарезанным листовым салатом, 
  густым майонезом, хрустящими маринованными огурчиками и рубленым белым луком на нежной булочке с кунжутной посыпкой.</p>
</div>
)
 }
}

const mapStateToProps = function (state) {
  return {
    // раздел Redux state под именем Product будет доступен
    // данному компоненту как this.props.products
    products: state.Product,
  };
};

const ModalWindow = connect(mapStateToProps)(intModalWindow);

export default ModalWindow;
