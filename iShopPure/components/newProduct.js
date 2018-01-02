import React from 'react';
import PropTypes from 'prop-types';
import './css/newprod.css';

class NewProduct extends  React.PureComponent {

    static propTypes = {
        cbCancel: PropTypes.func.isRequired,
        cbAddElement: PropTypes.func.isRequired,
    };

    saveValue=()=>{
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
        console.log(url,name,price,count);
        this.props.cbAddElement(url, name, price, count);
        this.props.cbCancel();
    };

    cancel=()=>{
        this.props.cbCancel();
    };

    render() {
        return(
            <div className="cardProduct">
                <ul>
                    <li>Url:
                            <input defaultValue='http://www.carlogos.org/logo/Tesla-logo-2003-2500x2500.png' ref="url"/>
                        {
                            (this.props.urlValid) &&
                            <span>Введите корректный URL</span>
                        }
                    </li>
                    <li>Name:
                            <input defaultValue='Tesla' ref="name"/>
                        {
                            (this.props.nameValid) &&
                            <span>Введите корректное имя</span>
                        }
                    </li>
                    <li>Price:
                            <input defaultValue='33000' ref="price"/>
                        {
                            (this.props.priceValid) &&
                            <span>Введите корректную цену</span>
                        }
                    </li>
                    <li>Count:
                            <input defaultValue='45' ref="count"/>
                        {
                            (this.props.countValid) &&
                            <span>Введите корректное колличество</span>
                        }
                    </li>
                </ul>
                    <div>
                        <button className="btn" onClick={this.saveValue}>Добавить</button>
                        <button className="btn" onClick={this.cancel}>Отмена</button>
                    </div>

            </div>

        )
    }
}

export default NewProduct;