import React from 'react';
import PropTypes from 'prop-types';


const ColorFrame = ( props ) => {
  let count = props.count+1;
  console.log(count);
  console.log(props.colors);
  return (
           <div style={{border:"dashed 1px "+props.colors[count-1],padding:"10px"}}>
           {(count == props.colors.length)
            ?  props.children 
            : <ColorFrame colors= {props.colors} count = {count}>{props.children}</ColorFrame>
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
