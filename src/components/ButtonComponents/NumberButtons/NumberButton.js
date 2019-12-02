import React from "react";
import Styled from 'styled-components';

export const Button = Styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: dodgerblue;
  margin: 1rem;
`
export const NumberButton = (props) => {
  return (
    <>
      <Button type='primary'>{props.button}</Button>
    </>
  );
};
