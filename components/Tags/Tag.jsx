import React from "react";
import "./Tag.css";
const Tag = (props) => {
  return (
    // <div className='tag'>
    <sapn className="tag" style={{ backgroundColor: `${props?.color}` }}>
      {props?.tagName.length >= 10
        ? props.tagName.slice(0, 6) + "..."
        : props.tagName || ""}
    </sapn>
    // </div>
  );
};

export default Tag;
