import React, { useState } from "react";
import { numbers } from '../../../data'; 

export const Numbers = (props) => {
  // const [numbers1, setNumbers] = useState(numbers)
  return (
    <div className='left-content'>
      {numbers.map((number, index) => {
        return (
          <button className='number-button' onClick={() => props.displayNumber(number)}>
            {number}
          </button>
        )
      })}
    </div>
  );
};
