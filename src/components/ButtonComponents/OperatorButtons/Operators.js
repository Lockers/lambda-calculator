import React, {useState} from "react";
import { operators } from '../../../data'
//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  const [operators1, setOperators] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div className='right-content'>
      {operators1.map((item, index) => {
        return <button className='operators'>{item.char}</button>
      })}
    </div>
  );
};
