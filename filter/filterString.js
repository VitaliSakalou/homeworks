var FilterString = React.createClass({

    displayName: 'FilterString',

    valuePartOfStringChanged: function(EO) { 
        console.log('valuePartOfString равно - '+EO.target.value); 
        this.props.cbFilterStringValue(EO.target.value);
      },

    render: function(){
        return React.DOM.input({className: 'string', type: 'text', onChange:this.valuePartOfStringChanged})
    },
});