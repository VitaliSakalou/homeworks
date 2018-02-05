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


    saveEdit =()=>{
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
        let id = this.props.id;
        let code = this.props.code;
        //console.log(typeof(url),name,price,typeof(count), id,code);
        this.props.cbEditElement(url, name, price, count, id, code);
        this.props.cbCloseEdit();
        }
    };

    stopPropagation=(EO)=>{
        EO.stopPropagation();
    };


    render() {
        console.log("Карта продукта - render");
        return(
            <div className="cardProduct" onClick={this.stopPropagation}>
                <ul>
                    <li>Url: {
                        (this.props.edit)
                            ?
                            <div>
                                <input defaultValue={this.props.url} ref={this.getUrl}/>
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
                            <input defaultValue={this.props.name} ref={this.getName}/>
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
                            <input defaultValue={this.props.price} ref={this.getPrice}/>
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
                            <input defaultValue={this.props.count} ref={this.getCount}/>
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