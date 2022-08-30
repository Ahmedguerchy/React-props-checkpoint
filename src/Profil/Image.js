import React from 'react';

const Image = (props) => {
  const style={backgroundColor:"#FAFAFA"}
  return <div style={style}>
    <br></br> 
    <div>{props.children}</div>
  </div>;
};

export default Image;
