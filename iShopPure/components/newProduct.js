import React from 'react';
import PropTypes from 'prop-types';
import './css/newprod.css';

class NewProduct extends  React.PureComponent {

    static propTypes = {
        cbCancel: PropTypes.func.isRequired,
        cbAddElement: PropTypes.func.isRequired,
    };

    url = null;
    name = null;
    price = null;
    count = null;

    getUrl = (ref) => {
        this.url = ref;
    };

    getName = (ref) => {
        this.name = ref;
    };

    getPrice = (ref) => {
        this.price = ref;
    };

    getCount = (ref) => {
        this.count = ref;
    };

    saveValue=()=>{
        if (this.url && this.name && this.price && this.count){               //проверка есть ли ссылка
            let arr = [];
            let url = this.url.value;
            let name = this.name.value;
            let price= parseInt(this.price.value);
            let count= parseInt(this.count.value);
    
            if(url=="") {
                this.props.cbFalseValidation("urlValid");
                arr.push('url error');
            }else{
                this.props.cbTrueValidation("urlValid");
            }
            if(name=="") {
                this.props.cbFalseValidation("nameValid");
                arr.push('name error');
            }else{
                this.props.cbTrueValidation("nameValid");
            }
            if(price=="" || !isFinite(price)) {
                this.props.cbFalseValidation("priceValid");
                arr.push('price error');
            }else{
                this.props.cbTrueValidation("priceValid");
            }
            if(count=="" || !isFinite(count)) {
                this.props.cbFalseValidation("countValid");
                arr.push('count error');
            }else{
                this.props.cbTrueValidation("countValid");
            }
            //console.log(arr);
            if(arr.length){
                return;
            }  
            // console.log(url,name,price,count);
            this.props.cbAddElement(url, name, price, count);
            this.props.cbCancel();
        }
    };

    cancel=()=>{
        this.props.cbCancel();
    };

    render() {
        console.log("Карта нового продукта - render");
        return(
            <div className="cardProduct">
                <ul>
                    <li>Url:
                            <input defaultValue='http://www.carlogos.org/logo/Tesla-logo-2003-2500x2500.png' ref={this.getUrl}/>
                        {
                            (this.props.urlValid) &&
                            <span>Введите корректный URL</span>
                        }
                    </li>
                    <li>Name:
                            <input defaultValue='Tesla' ref={this.getName}/>
                        {
                            (this.props.nameValid) &&
                            <span>Введите корректное имя</span>
                        }
                    </li>
                    <li>Price:
                            <input defaultValue='33000' ref={this.getPrice}/>
                        {
                            (this.props.priceValid) &&
                            <span>Введите корректную цену</span>
                        }
                    </li>
                    <li>Count:
                            <input defaultValue='45' ref={this.getCount}/>
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