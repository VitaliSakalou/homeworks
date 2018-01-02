import React from 'react';
import PropTypes from 'prop-types';
import PriceOfCarsBlock from './ishop';


class DemoPage extends React.PureComponent {

    titleOfPrice='Price list';
    selectedColor = 'grey';
    state = {
        productsArr:this.props.products,
    };


    addElement=(url,name,price,count)=>{
        console.log(url,name,price,count);
        if (this.state.productsArr.length ==0){
            this.state.productsArr.push({name, code:1, price, url, count, height: 100}); //ES6
        }else{
            this.state.productsArr.push({name, code:this.state.productsArr[this.state.productsArr.length-1].code+1, price, url, count, height: 100}); //ES6
        }
        this.setState({productsArr:this.state.productsArr.slice(),});
        console.log(this.state.productsArr);
    };

    editElement=(url, name, price, count, id, code)=>{
        console.log(url, name, price, count, id, code);
        this.state.productsArr.splice(id,1,{name, code, price, url, count, height: 100});//ES6
        this.setState({productsArr:this.state.productsArr.slice(),});
        console.log(this.state.productsArr);
    };

    deleteElement=(id)=>{
        function FF(V,I,A) {
            // console.log( V.code);
            // console.log( id);
            if(I != id){
                return true;
            }
        }
        this.state.productsArr = this.state.productsArr.filter(FF);
        this.setState({productsArr:this.state.productsArr.slice(),});
        console.log(this.state.productsArr);
    };

    headArr= {
        logo:'Logo', name:"Name", price: "Price", count:"In stock",
    };

    render() {
        return (
            <div><PriceOfCarsBlock cbEditElement={this.editElement} cbAddElement={this.addElement}
                                   cbDeleteElement={this.deleteElement} title={this.titleOfPrice} selectedColor={this.selectedColor}
                                   products={this.state.productsArr} head={this.headArr}/></div>
        );
    }

}

export default DemoPage;
