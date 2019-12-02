import React from "react";
import Styled from 'styled-components';

export const Button = Styled.button`
  font-size: 2rem;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: dodgerblue;
  margin: 1rem;
  &:hover{
    background: blue;
  }
`
export const NumberButton = (props) => {
  return (
    <>
      <Button onClick={(e) => props.clickHandler(props.button)}type='primary'>{props.button}</Button>
    </>
  );
};
