import React from "react";
import { Button } from '../NumberButtons/NumberButton';

export const OperatorButton = (props) => {
  return (
    <>
      <Button>{props.operator.value}</Button>
    </>
  );
};
