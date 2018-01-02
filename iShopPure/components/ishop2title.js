import React from 'react';
import PropTypes from 'prop-types';
import './css/title.css';

class ShopTitle extends  React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render(){
        return  <div className='title'>
                     {this.props.title}
                </div>
    }
}
export default ShopTitle;