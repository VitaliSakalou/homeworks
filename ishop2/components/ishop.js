import React from 'react';
import PropTypes from 'prop-types';
import ShopTitle from './ishop2title';
import Table from './ishop2table';
import NewProduct from './newProduct';
import './css/ishop.css';

class PriceOfCarsBlock extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
      selectedColor: PropTypes.string.isRequired,
    
    products: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
      })
    ),

  head:PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
  })
};
  state={
      newEl : false,
      selectedElement: null,
      urlValid: false,
      nameValid: false,
      priceValid: false,
      countValid: false,
  };

    falseValidation =(stateName)=>{
        this.setState({[stateName]:true});
    };

    trueValidation =(stateName)=>{
        this.setState({[stateName]:false});
    };

    colorHighlighting =(idRow)=>{
        this.setState({selectedElement: parseInt(idRow)});
        console.log(this.state.selectedElement);
    };

    newElement =()=>{
        this.setState({selectedElement: null});
        this.setState({newEl: true,})
    };

    cancelNewElement =()=>{
        this.setState({newEl: false,})
    };

    removeSelection=()=>{
        this.setState({selectedElement: null});
    };

  render(){
      return(
          <div className='main' onClick={this.removeSelection}>
              <ShopTitle title={this.props.title}/>
              <Table products={this.props.products} head={this.props.head} cbCancel={this.cancelNewElement}
                     selectedColor={this.props.selectedColor} cbAddElement={this.props.cbAddElement}
                     cbDeleteElement={this.props.cbDeleteElement} cbColorFunc={this.colorHighlighting}
                     selectedElement={this.state.selectedElement} cbEditElement={this.props.cbEditElement}
              />
              <div className="btnNewProd" ><button className="btn" onClick={this.newElement}>Новый</button></div>
              {
                  (this.state.newEl) &&
                  <NewProduct cbCancel={this.cancelNewElement} cbAddElement={this.props.cbAddElement}
                              urlValid={this.state.urlValid} nameValid={this.state.nameValid}
                              priceValid={this.state.priceValid} countValid={this.state.countValid}
                              cbFalseValidation={this.falseValidation} cbTrueValidation={this.trueValidation}
                  />
              }
          </div>
        )
      };
}

export default PriceOfCarsBlock;