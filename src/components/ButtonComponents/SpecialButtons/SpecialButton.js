import React from "react";
import { Button } from '../NumberButtons/NumberButton';

export const SpecialButton = (props) => {
  return (
    <>
      <Button>{props.special}</Button>
    </>
  );
};
