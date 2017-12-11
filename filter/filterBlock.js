var filterBlock = React.createClass({

  displayName: 'FilterBlock',

  propTypes: {
    
    strings:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string,
        code: React.PropTypes.number.isRequired,
      })
    )
},

getInitialState: function(){
  return {
    partOfString: '',                                 //начальное значение в окне
    checked: false,                                   //начальное значение чекбокса
  }
},

checkedValueTrue: function(){
  this.setState( {checked:true} );
  console.log(this.state.checked);
},

checkedValueFalse: function(){
  this.setState( {checked:false} );
  console.log(this.state.checked);
},

filterStringValue: function(fat) { 
  console.log('Значение partOfString - '+typeof(fat)); 
  this.setState( {partOfString:fat} );
},

sort: function(a, b) {                        //функция сортировки по алфавиту
  if (a.string < b.string)  return -1;
  if (a.string > b.string)  return 1;
  return 0;
},

  render: function() {                                                     
    return React.DOM.div( {className:'main'}, 
    React.DOM.div({className: 'filter-settings'},
      React.createElement(FilterCheck, {cbCheckedValueTrue:this.checkedValueTrue,
        cbCheckedValueFalse:this.checkedValueFalse, checked:this.state.checked }),
      React.createElement(FilterString, {cbFilterStringValue:this.filterStringValue}),
    ),
    React.createElement(FilterList, {className: 'list-block', 
    checked:this.state.checked, strings:this.props.strings, sort: this.sort,
     partOfString: this.state.partOfString}),
    );
  },

});