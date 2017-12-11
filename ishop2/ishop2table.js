var Table = React.createClass({

    displayName: 'Table',

    render: function(){
        var priceCode=this.props.products.map( v =>
            React.createElement(TableBody,{key:v.code, url: v.url, height: v.height, 
              name: v.name, price: v.price, count: v.count},
            )
          );   
          
        return React.DOM.table( {className:'table'}, 
        React.createElement( TableHead,{head: this.props.head} ), 
        React.DOM.tbody( {className:'tbody'}, priceCode ) )
    },

})