import React from 'react';
import PropTypes from 'prop-types';
import './css/tbody.css';

class TableRow extends  React.Component {

    static propTypes = {
                count: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                height: PropTypes.number.isRequired,
                id: PropTypes.number.isRequired,
                cbColorFunc: PropTypes.func,
                cbEditProd: PropTypes.func,
                cbCloseEdit: PropTypes.func,
                selectedColor: PropTypes.string,
                selectedElement: PropTypes.number,
                edit:PropTypes.bool.isRequired,
    };


    changeColor=(EO)=>{
        EO.stopPropagation();
        console.log(EO.currentTarget.id);
        this.props.cbCloseEdit();
        this.props.cbColorFunc(EO.currentTarget.id);
        this.props.cbCancel();
    };

    editProduct=(EO)=>{
        EO.stopPropagation();
        this.props.cbEditProd();
    };

    deleteProduct=(EO)=>{
         EO.stopPropagation();
        this.props.cbDeleteElement(EO.currentTarget.id);
        this.props.cbColorFunc(null);
        console.log(EO.currentTarget.id);
    };

    render() {
        let color= '';
        let btn = false;
        if (this.props.selectedElement === this.props.id){
            color = this.props.selectedColor;
            btn = true;
        }
        return(
                <tr className='row' onClick={this.changeColor} id={this.props.id}
                      style={{backgroundColor:color}}>
                    <td className='col' >
                        <img className='img' src={this.props.url} height={this.props.height}/>
                    </td>
                    <td className='col' >
                        {this.props.name}
                    </td>
                    <td className='col'  >
                        {this.props.price}
                    </td>
                    <td className='col'>
                        {this.props.count}<br/>
                        {
                            (btn)&&
                            <div>
                                <button className="btn" onClick={this.editProduct}>Редактировать</button><br/>
                                <button className="btn" onClick={this.deleteProduct} id={this.props.id}>Удалить</button>
                            </div>
                        }
                    </td>
                </tr>
        )
    }
}

export default TableRow;