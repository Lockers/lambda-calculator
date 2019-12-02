import React, { useState } from "react";
import { operators } from '../../../data';
import { OperatorButton } from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

export const Operators = (props) => {
  const [operator, SetOperator] = useState(operators)
  return (
    <div>
      {operator.map(item => <OperatorButton operator={item} clickHandler={props.clickHandler}/>)}
    </div>
  );
};
