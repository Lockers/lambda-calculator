import React from "react";
import { Numbers } from './Numbers'

export const NumberButton = (props) => {
  return (
    <>
      <Numbers displayNumber={props.displayNumber}/>
    </>
  );
};
