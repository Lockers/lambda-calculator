import React, {useState} from "react";
import { numbers } from '../../../data';
import { NumberButton } from './NumberButton';

export const Numbers = (props) => {
  const [number, setNumber] = useState(numbers)
  return (
    <div>
      {number.map(item => { return <NumberButton button={item} clickHandler={props.clickHandler}/> })}
    </div>
  );
};
