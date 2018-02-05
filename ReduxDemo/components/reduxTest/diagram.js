import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import { counterButton_create, counterButton_add, counterButton_multiply } from './testActions';

import './test.css';

class Diagram extends React.PureComponent {

  static propTypes = {
    counterid: PropTypes.number.isRequired, // передано из родительского компонента
    // ten: PropTypes.number.isRequired,
    // counterButton: PropTypes.object.isRequired, // передано из Redux
    counterValue: PropTypes.number.isRequired,
  };

  // shouldComponentUpdate(oldProps) {
  //     return (this.props.counterButton.counters[this.props.counterid] != oldProps.counterButton.counters[this.props.counterid]);
  // }
  
  render() {
console.log('render diagram'+this.props.counterid);
    // получим значение именно этого счётчика
    // let counterValue=this.props.counterButton.counters[this.props.counterid];

    return (
      <div className="diagram" style={{height:this.props.counterValue}}>{this.props.counterValue}</div>
    );
  }

}

// const mapStateToProps = function (state) {
//   return {
//     // раздел Redux state под именем counterButton будет доступен
//     // данному компоненту как this.props.counterButton
//     counterButton: state.counter,
//   };
// };

// const Diagram = connect(mapStateToProps)(intDiagram);

export default Diagram;
