import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import Grafics from './Grafics/Grafics';

import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import highcharts3d from 'highcharts-3d';
// import 'highcharts/modules/higcharts-3d';
// require('highcharts-3d')(ReactHighcharts.Highcharts);
highcharts3d(ReactHighcharts.Highcharts);

import './FoodGrafics.css';


class intFoodGrafics extends React.PureComponent {

  static propTypes = {
    products: PropTypes.object,
  };



   state = {
    // g_config: {chart: {
    //       type: 'column',
    //       height: 400,
    //       width: 400,
          
    //       options3d: {
    //           enabled: true,
              
    //           alpha: 10,
    //           beta: 25,
    //           depth: 70
    //       }
    //   },
    //   title: {
    //       text: '3D chart with null values'
    //   },
    //   subtitle: {
    //       text: 'Notice the difference between a 0 value and a null point'
    //   },
    //   plotOptions: {
    //       column: {
    //           depth: 25
    //       }
    //   },
    //   responsive:{
    //     rules:{
    //       maxHeight: 200,
    //     },
    //   },
    //   xAxis: {
    //       categories: Highcharts.getOptions().lang.shortMonths,
    //       labels: {
    //           skew3d: true,
    //           style: {
    //               fontSize: '16px'
    //           }
    //       }
    //   },
    //   yAxis: {
    //       title: {
    //           text: null
    //       }
    //   },
    //   series: [{
    //       animation: false,
    //       name: 'Sales',
    //       data: [ 23, 45,  45, 34]
    //   }] 
    // }
  }

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

  handler = () => {
    console.log(this.state.g_config.series[0]);
    this.state.g_config.series[0].data[0] = this.state.g_config.series[0].data[0]+99;
    this.setState({g_config: JSON.parse(JSON.stringify(this.state.g_config))})
  }

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
    let calories = null;
   
    let proteins = null;
    let fats = null;
    let carbohydrates = null;
    arr.map((item, index) => {if (item.checked){
      calories = calories + item.calories*item.count;
      proteins = proteins + item.proteins*item.count;
      fats = fats + item.fats*item.count;
      carbohydrates = carbohydrates + item.carbohydrates*item.count;
    }});
    // if (calories !=null){
    //   calories = calories/10;
    // }

    let g_config= {
      
      chart: {
        backgroundColor: '#590d0e',
        color: '#e86604',
        type: 'column',
         height: document.documentElement.clientHeight-.4*document.documentElement.clientHeight-100,
        // width: this.getElementHeight(),
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
        // maxHeight: 200,
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
        data: [ calories, proteins,  fats, carbohydrates]
    }] 
   }
    let grafics = (
      <div className={"graficsBlockMain"}>
            <div id='containerHightCharts'>
             {/* <button onClick = {this.handler}>render</button>  */}
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
