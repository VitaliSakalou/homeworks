var TableHead = React.createClass({

    displayName: 'TableHead',

    render: function(){
        return React.DOM.thead({className:'head'},
                React.DOM.tr({className:'row'},
                    React.DOM.td({className:'col'},this.props.head.logo),
                    React.DOM.td({className:'col'},this.props.head.name),
                    React.DOM.td({className:'col'},this.props.head.price),
                    React.DOM.td({className:'col'},this.props.head.count),
                )
            )
    },

})