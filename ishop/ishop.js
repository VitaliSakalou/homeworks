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

    var priceCode=this.props.products.map( v =>
        React.DOM.tr({key:v.code,className:'row'},
          React.DOM.td({className:'col'},React.DOM.img({className:'', src: v.url, height: v.height})),
          React.DOM.td({className:'col'},v.name),
          React.DOM.td({className:'col'},v.price),
          React.DOM.td({className:'col'},v.count),
        )
      );   

    var headOfTable = React.DOM.tr({className:'row'},
        React.DOM.td({className:'col'},this.props.head.logo),
        React.DOM.td({className:'col'},this.props.head.name),
        React.DOM.td({className:'col'},this.props.head.price),
        React.DOM.td({className:'col'},this.props.head.count),
      );  

    return React.DOM.div( {className:'main'}, 
      React.DOM.div( {className:'title'}, this.props.title ),
      React.DOM.table( {className:'table'}, 
      React.DOM.thead( {className:'head'}, headOfTable ), 
      React.DOM.tbody( {className:'tbody'}, priceCode ) ),
    );
  },

});