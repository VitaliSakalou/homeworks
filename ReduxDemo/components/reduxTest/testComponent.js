import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { counterButton_create, counterButton_add, counterButton_multiply, counterButton_dividir,} from './buttonsActions';

import './test.css';

class intCounterButton extends React.Component {

  static propTypes = {
    counterid: PropTypes.number.isRequired, // передано из родительского компонента
    ten: PropTypes.number.isRequired,
    counterButton: PropTypes.object.isRequired, // передано из Redux
  };

  componentWillMount() {
    // изначально счётчика с идентификатором counterid нет
    // создадим
     this.props.dispatch( counterButton_create(this.props.counterid) );
  }
  shouldComponentUpdate(oldProps) {
    return (this.props.counterButton.counters[this.props.counterid] != oldProps.counterButton.counters[this.props.counterid])
  }

  incCounter = () => {
    this.props.dispatch( counterButton_add(this.props.counterid,1) );
  }

  decCounter = () => {
    this.props.dispatch( counterButton_add(this.props.counterid,-1) );
  }

  multCounter = () => {
    this.props.dispatch( counterButton_multiply(this.props.counterid, this.props.ten) );
  }

  dividCounter = () => {
    this.props.dispatch( counterButton_dividir(this.props.counterid, this.props.ten) );
  }
  
  render() {
console.log('render '+this.props.counterid);
    // получим значение именно этого счётчика
    let counterValue=this.props.counterButton.counters[this.props.counterid];

    return (
      <div className="CounterButton">
        <input className='btnMinus' type='button' value='-' onClick={this.decCounter} />
        <span className="CounterButtonValue">{counterValue}</span>
        <input className='btnPlus' type='button' value='+' onClick={this.incCounter} />
        <input className='btnMult' type='button' value={'*'+this.props.ten} onClick={this.multCounter} />
        <input className='btnMult' type='button' value={'/'+this.props.ten} onClick={this.dividCounter} />
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    // раздел Redux state под именем counterButton будет доступен
    // данному компоненту как this.props.counterButton
    counterButton: state.counter,
  };
};

const Counter = connect(mapStateToProps)(intCounterButton);

export default Counter;
