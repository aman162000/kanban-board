import React from "react";
import "./Tag.css";
const Tag = (props) => {
  return (
    // <div className='tag'>
    <sapn className="tag" style={{ backgroundColor: `${props?.color}` }}>
      {props?.tagName}
    </sapn>
    // </div>
  );
};

export default Tag;
