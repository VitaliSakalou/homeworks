import React from 'react';
import PropTypes from 'prop-types';

import TableHead from './ishop2thead';
import TableRow from './ishop2tbody';
import CardProduct from './cardProduct';
import NewProduct from './newProduct';
import './css/table.css';

class Table extends  React.Component{

    static propTypes = {

        selectedColor:PropTypes.string,

        products:PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                count: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                height: PropTypes.number.isRequired,
            })
        ),

        head: PropTypes.shape({
            logo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
        })
    };

    state = {
        backgroundColor : '',
        selectedCount: null,
        edit: false,
        urlValid: false,
        nameValid: false,
        priceValid: false,
        countValid: false,
    };

    editProduct = () => {
        this.setState({edit:true});
        // console.log("edit");
    };

    falseValidation =(stateName)=>{
        this.setState({[stateName]:true});
    };

    trueValidation =(stateName)=>{
        this.setState({[stateName]:false});
    };

    closeEdit =()=>{
        this.setState({edit:false});
        // console.log(this.state.edit);
    };

    render(){
        let count = 0;
        return (
            <div>
                <table className='table'>
                    <TableHead head={this.props.head}/>
                    <tbody className='tbody'>
                        {this.props.products.map( v =>
                            <TableRow
                                key={v.code} url= {v.url} height= {v.height} name={v.name} id={count++}
                                price={v.price} count={v.count} cbColorFunc={this.props.cbColorFunc}
                                selectedColor={this.props.selectedColor} selectedElement={this.props.selectedElement}
                                cbEditProd={this.editProduct} edit={this.state.edit} cbCloseEdit={this.closeEdit}
                                cbDeleteElement={this.props.cbDeleteElement} cbCancel={this.props.cbCancel}
                            />
                        )}
                    </tbody>
                </table>

                {
                    (this.props.selectedElement || this.props.selectedElement==0) &&
                    <CardProduct name={this.props.products[this.props.selectedElement].name}
                                 url={this.props.products[this.props.selectedElement].url}
                                 price={this.props.products[this.props.selectedElement].price}
                                 count={this.props.products[this.props.selectedElement].count}
                                 edit={this.state.edit} cbCloseEdit={this.closeEdit} cbEditElement={this.props.cbEditElement}
                                 code = {this.props.products[this.props.selectedElement].code}
                                 id = {this.props.selectedElement}
                                 urlValid={this.state.urlValid} nameValid={this.state.nameValid}
                                 priceValid={this.state.priceValid} countValid={this.state.countValid}
                                 cbFalseValidation={this.falseValidation} cbTrueValidation={this.trueValidation}
                    />
                }
            </div>
        )
    }

}
export default Table;