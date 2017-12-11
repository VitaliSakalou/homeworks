var PriceOfCarsBlock = React.createClass({

  displayName: 'PriceOfCarsBlock',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    
    products:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        height: React.PropTypes.number.isRequired,
      })
    ),

  head:React.PropTypes.shape({
    logo: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    count: React.PropTypes.string.isRequired,
  })
},

  render: function() {
    return React.DOM.div( {className:'main'}, 
      React.createElement( ShopTitle,{ title: this.props.title},),
      React.createElement(Table, {products: this.props.products, head: this.props.head}),
    );
  },

});