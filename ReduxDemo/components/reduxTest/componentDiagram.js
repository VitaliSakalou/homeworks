import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Diagram from './diagram';

// import { counterButton_create, counterButton_add, counterButton_multiply } from './testActions';

import './test.css';

class intDiagram extends React.PureComponent {

  static propTypes = {
    //  counterid: PropTypes.number.isRequired, // передано из родительского компонента
    // ten: PropTypes.number.isRequired,
    counterButton: PropTypes.object.isRequired, // передано из Redux
    arrMult : PropTypes.array.isRequired,
  };

  // shouldComponentUpdate(oldProps) {
  //     return (this.props.counterButton.counters[this.props.counterid] != oldProps.counterButton.counters[this.props.counterid]);
  // }
  
  render() {
// console.log('render diagram'+this.props.counterid);
// console.log(this.props.arrMult.map(V => {return this.props.counterButton.counters[V.code]}));
    // получим значение именно этого счётчика
    // let counterValue=this.props.counterButton.counters[this.props.counterid];

    return (
        <div className='diagramBlock'>
             {this.props.arrMult.map(V => <Diagram  key={V.code} 
                                                    counterValue={this.props.counterButton.counters[V.code]} 
                                                    counterid = {V.code}/>)}
        </div>
    );
  }

}

const mapStateToProps = function (state) {
    console.log(state.counter);
  return {
    // раздел Redux state под именем counterButton будет доступен
    // данному компоненту как this.props.counterButton
    counterButton: state.counter,
  };
};

const componentDiagram = connect(mapStateToProps)(intDiagram);

export default componentDiagram;