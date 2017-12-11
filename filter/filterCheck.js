var FilterCheck = React.createClass({

    displayName: 'FilterCheck',

    valueChecked: function() { 
        if (!this.props.checked){
            this.props.cbCheckedValueTrue();
        }
        else {
            this.props.cbCheckedValueFalse();
        }
      },

    render: function(){
        return React.DOM.label({className: 'label-check'},
            React.DOM.input({type:'checkbox', className:'check', onClick:this.valueChecked}),
            'По алфавиту',
        )
    },
})