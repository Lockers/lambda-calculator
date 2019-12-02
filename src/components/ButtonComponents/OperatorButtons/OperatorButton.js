import React from "react";
import { Button } from '../NumberButtons/NumberButton';
import Styled from 'styled-components';

const Button1 = Styled(Button)`
  background: lightblue;
  &:hover{
    background: grey;
  }
`

export const OperatorButton = (props) => {
  return (
    <>
      <Button1 onClick={(e) => props.clickHandler(props.operator.value)}>{props.operator.char}</Button1>
    </>
  );
};
