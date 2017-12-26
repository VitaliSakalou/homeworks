import React from 'react';
import PropTypes from 'prop-types';

let count = 0;

const ColorFrame = ( props ) => {
  console.log(props.colors);
  count++;
  console.log(count);
  return (
           <div style={{border:"dashed 1px "+props.colors[count-1],padding:"10px"}}>
           {(count == props.colors.length)
            ?  props.children
            : <ColorFrame colors= {props.colors}>{props.children}</ColorFrame>
           }
            </div>
         )
}

ColorFrame.propTypes = {
  colors: PropTypes.array.isRequired,
};

export default ColorFrame;

// class ColorFrame extends React.Component {

//   static propTypes = {
//     color: PropTypes.string.isRequired,
//   };
  
//   render() {
//     return (
//           <div style={{border:"dashed 1px "+this.props.color,padding:"10px"}}>
//             {this.props.children}
//           </div>
//     );
//   }

// }

// export default ColorFrame;
