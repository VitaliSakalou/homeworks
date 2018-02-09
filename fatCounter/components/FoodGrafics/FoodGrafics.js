import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import Grafics from './Grafics/Grafics';

import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import highcharts3d from 'highcharts-3d';
highcharts3d(ReactHighcharts.Highcharts);

import './FoodGrafics.css';


class intFoodGrafics extends React.PureComponent {

  static propTypes = {
    products: PropTypes.object,
  };

  getElementWidth = () => {
      let width = null;
      if (document.documentElement.clientWidth > 768){
        width = document.documentElement.clientWidth-400;
      } else {
        width = document.documentElement.clientWidth;
      }
      let height = null;
      height = document.documentElement.clientHeight-.4*document.documentElement.clientHeight-100;
      return (width, height);
  }

  getElementHeight = () => {
    let height = null;
    height = document.documentElement.clientHeight-.4*document.documentElement.clientHeight-100;
    return height;
}

  warning = (ccal) => {
    let warning = '';
    if (ccal > 2000){
      warning = 'warning';
    }
    return warning;
  }

  arrayDefinder = () => {
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
    return arr;
  }

  dataCounting = () => {
    let arr = this.arrayDefinder();
    let calories = 0;
    let proteins = 0;
    let fats = 0;
    let carbohydrates = 0;
    arr.map((item, index) => {if (item.checked){
      calories = Math.round((calories + item.calories*item.count)*100)/100;
      proteins = Math.round((proteins + item.proteins*item.count)*100)/100;
      fats = Math.round((fats + item.fats*item.count)*100)/100;
      carbohydrates = Math.round((carbohydrates + item.carbohydrates*item.count)*100)/100;
    }});
    return [calories, proteins, fats, carbohydrates];
  }

  highchartsBuilder = (calories, proteins, fats, carbohydrates) => {
      return ({chart: {
        backgroundColor: '#590d0e',
        color: '#e86604',
        type: 'column',
         height: document.documentElement.clientHeight-.4*document.documentElement.clientHeight-140,
        options3d: {
            enabled: true,
            alpha: 5,
            beta: 10,
            depth: 40, 
        },
    },
    title: {
        text: 'Пищевая ценность продукта',
        style: { "color": "white", "fontSize": "30px", "font-family":"'BrushType-SemiBold', arial;" },
    },
    subtitle: {
        text: 'Суммарное количество калорий, белков, жиров и углеводов',
        style: { "color": "white", "fontSize": "18px", "font-family":"'BrushType-SemiBold', arial;" },
    },
    plotOptions: {
        column: {
            depth: 150,
            color: '#267C7F',
        }
    },
    responsive:{
      rules:{
        condition:{
          callback: this.getElementWidth(),
        },
      },
    },
    xAxis: {
        categories: ['Калории', 'Белки', 'Жиры', "Углеводы"],
        labels: {
            skew3d: true,
            style: {
                fontSize: '24px',
                color: 'white',
                fontFamily: 'BrushType-SemiBold, arial',
            }
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
          skew3d: true,
          style: {
            fontSize: '24px',
            color: 'white',
            fontFamily: 'BrushType-SemiBold, arial',
        }
        }
    },
    series: [{
        animation: false,
        data: [ calories, proteins, fats, carbohydrates],
    }], 
  }
  )
}

  render() {  
   let objectOfDatas = this.dataCounting();
   // calories = calories/5;
   let g_config= this.highchartsBuilder(...objectOfDatas);
   
    let grafics = (
      <div className={"graficsBlockMain"}>
            <div className={"graficsValue"}>
              <span className = {this.warning(objectOfDatas[0])}>Калории - {objectOfDatas[0]} ккал</span>
              <span>Белки - {objectOfDatas[1]} г</span>
              <span>Жиры - {objectOfDatas[2]} г</span>
              <span>Углеводы - {objectOfDatas[3]} г</span>
            </div>
            <div id='containerHightCharts'>
              <ReactHighcharts config={g_config}/>
             </div>
          {/* <div className={"graficsBlock"}>
            <Grafics height = {calories/10} value = {calories}/>
            <Grafics height = {proteins} value = {proteins}/>
            <Grafics height = {fats} value = {fats}/>
            <Grafics height = {carbohydrates} value = {carbohydrates}/>
          </div> */}
        </div>
    );
    return grafics;
  }
}

const mapStateToProps = function (state) {
  return {
    // раздел Redux state под именем Product будет доступен
    // данному компоненту как this.props.products
    products: state.Product,
  };
};

const FoodGrafics = connect(mapStateToProps)(intFoodGrafics);

export default FoodGrafics;
