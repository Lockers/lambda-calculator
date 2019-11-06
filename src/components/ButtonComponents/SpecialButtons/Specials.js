import React, { useState } from "react";
import { specials } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specials1, setSpecials] = useState(specials)
  return (
    <div className='left-content'>
      {specials1.map(item => {
        return <button className='special'>{item}</button>
      })}
    </div>
  );
};
