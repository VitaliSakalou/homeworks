var FilterList = React.createClass({

    displayName: 'FilterList',

    render: function(){
        return React.DOM.ul({className: 'list'},
        this.props.strings.map( v =>
         React.DOM.li({className: 'point', key: v.code}, v.string),
        ),
      )
    }
});