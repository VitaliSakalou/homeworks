var TableBody = React.createClass({

    dispalyName: 'TableBody',

    render: function(){
        return React.DOM.tr({className:'row'},
            React.DOM.td({className:'col'},React.DOM.img({className:'', src: this.props.url, height: this.props.height})),
            React.DOM.td({className:'col'},this.props.name),
            React.DOM.td({className:'col'},this.props.price),
            React.DOM.td({className:'col'},this.props.count),
        )
    },

})