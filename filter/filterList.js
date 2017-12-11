var FilterList = React.createClass({
    
        displayName: 'FilterList',
    
        render: function(){
            if(this.props.checked){
                var listOfStrings = React.DOM.ul({className: 'list'},
                this.props.strings.filter(v => v.string.indexOf(this.props.partOfString) > -1).sort(this.props.sort).map( v =>
                 React.DOM.li({className: 'point', key: v.code}, v.string),
                ),
              )
              }
              else {
                var listOfStrings = React.DOM.ul({className: 'list'},
                this.props.strings.filter(v => v.string.indexOf(this.props.partOfString) > -1).map( v =>
                 React.DOM.li({className: 'point', key: v.code}, v.string),
                ),
              )
              }

              return React.DOM.div({className: 'list-block'},listOfStrings)
        },
    })