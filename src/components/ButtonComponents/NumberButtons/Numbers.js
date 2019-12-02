import React, {useState} from "react";
import { numbers } from '../../../data';
import { NumberButton } from './NumberButton';

export const Numbers = () => {
  const [number, setNumber] = useState(numbers)
  return (
    <div>
      {number.map(item => {return <NumberButton button={item} /> })}
    </div>
  );
};
