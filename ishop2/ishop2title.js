var ShopTitle = React.createClass({

    displayName: 'ShopTitle',

    render: function(){
        return React.DOM.div({className:'title',}, this.props.title);
    },

})