import React from "react";
import { Button } from '../NumberButtons/NumberButton';

import Styled from 'styled-components';

const Button1 = Styled(Button)`
  background: darkblue;
  color: white;
  &:hover{
    background: lightblue;
  }
`

export const SpecialButton = (props) => {
  return (
    <>
      <Button1>{props.special}</Button1>
    </>
  );
};
