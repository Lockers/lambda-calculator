import React from "react";

export const Display = (props) => {
  console.log(props)
  return <div className="display">{props.displayNum}</div>;
};
