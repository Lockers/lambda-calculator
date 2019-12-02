import React, { useState } from "react";
import { specials } from '../../../data';
import { SpecialButton } from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  const [special, setSpecial] = useState(specials)

  return (
    <div>
      {special.map(item => <SpecialButton special={item}/>)}
    </div>
  );
};
