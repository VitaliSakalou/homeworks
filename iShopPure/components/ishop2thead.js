import React from 'react';
import PropTypes from 'prop-types';

class TableHead extends  React.PureComponent {

    static propTypes = {
        head:PropTypes.shape({
            logo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
        })
    };

    render(){
        console.log("Шапка - render");
        return (
            <thead className="head">
                <tr className='row'>
                    <td className='col'>
                        {this.props.head.logo}
                    </td>
                    <td className='col'>
                        {this.props.head.name}
                    </td>
                    <td className='col'>
                        {this.props.head.price}
                    </td>
                    <td className='col'>
                        {this.props.head.count}
                    </td>
                </tr>
            </thead>
        )
    }
}

export default TableHead;