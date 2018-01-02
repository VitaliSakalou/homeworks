import React from 'react';
import PropTypes from 'prop-types';

class CardProduct extends  React.PureComponent {

    static propTypes = {
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        edit: PropTypes.bool.isRequired,
    };

    cancelEdit =()=>{
        this.props.cbCloseEdit();
    };


    saveEdit =()=>{
        let arr = [];
        if(this.refs.url.value=="") {
            this.props.cbFalseValidation("urlValid");
            arr.push('url error');
        }else{
            this.props.cbTrueValidation("urlValid");
        }
        if(this.refs.name.value=="") {
            this.props.cbFalseValidation("nameValid");
            arr.push('name error');
        }else{
            this.props.cbTrueValidation("nameValid");
        }
        if(this.refs.price.value=="" || !isFinite(this.refs.price.value)) {
            this.props.cbFalseValidation("priceValid");
            arr.push('price error');
        }else{
            this.props.cbTrueValidation("priceValid");
        }
        if(this.refs.count.value=="" || !isFinite(this.refs.count.value)) {
            this.props.cbFalseValidation("countValid");
            arr.push('count error');
        }else{
            this.props.cbTrueValidation("countValid");
        }
        console.log(arr);
        if(arr.length){
            return;
        }
        let url= this.refs.url.value;
        let name= this.refs.name.value;
        let price= parseInt(this.refs.price.value);
        let count= parseInt(this.refs.count.value);
        let id = this.props.id;
        let code = this.props.code;
        console.log(typeof(url),name,price,typeof(count), id,code);
        this.props.cbEditElement(url, name, price, count, id, code);
        this.props.cbCloseEdit();
    };

    stopPropagation=(EO)=>{
        EO.stopPropagation();
    };


    render() {
        return(
            <div className="cardProduct" onClick={this.stopPropagation}>
                <ul>
                    <li>Url: {
                        (this.props.edit)
                            ?
                            <div>
                                <input defaultValue={this.props.url} ref="url"/>
                                {
                                    (this.props.urlValid) &&
                                    <span>Введите корректный URL</span>
                                }
                            </div>
                            :
                            <span>{this.props.url}</span>
                    }</li>
                    <li>Name: {
                        (this.props.edit)
                            ?
                            <div>
                            <input defaultValue={this.props.name} ref="name"/>
                                {
                                    (this.props.nameValid) &&
                                    <span>Введите корректное имя</span>
                                }
                            </div>
                            :
                            <span>{this.props.name}</span>
                    }</li>
                    <li>Price: {
                        (this.props.edit)
                            ?
                            <div>
                            <input defaultValue={this.props.price} ref="price"/>
                                {
                                    (this.props.priceValid) &&
                                    <span>Введите корректную цену</span>
                                }
                            </div>
                            :
                            <span>{this.props.price}</span>
                    }</li>
                    <li>Count: {
                        (this.props.edit)
                            ?
                            <div>
                            <input defaultValue={this.props.count} ref="count"/>
                                {
                                    (this.props.countValid) &&
                                    <span>Введите корректное колличество</span>
                                }
                            </div>
                            :
                            <span>{this.props.count}</span>
                    }</li>
                </ul>
                {
                    (this.props.edit) &&
                    <div>
                        <button className="btn" onClick={this.saveEdit}>Сохранить</button>
                        <button className="btn" onClick={this.cancelEdit}>Отмена</button>
                    </div>
                }

            </div>

        )
    }
}

export default CardProduct;