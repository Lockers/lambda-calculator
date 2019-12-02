import React, {useState, useEffect} from "react";
import "./App.css";
import { Numbers } from './components/ButtonComponents/NumberButtons/Numbers'
import { Display } from './components/DisplayComponents/Display';
import { Specials } from './components/ButtonComponents/SpecialButtons/Specials';
import { Operators } from './components/ButtonComponents/OperatorButtons/Operators';
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [number, setNumber] = useState('')
  
  const numberClickHandler = (number1) => {
    if (number.length < 10){
      if (number === '') {
        setNumber(number + number1)
      }
    setNumber(number + number1)
    }
    else {
      setNumber(number)
    }
  }
  
  const operatorClickHandler = (number1) => {
    if (number.length < 10) {
      if (number === '') {
        setNumber(number + number1)
      }
      setNumber(number + number1)
    }
    else {
      setNumber(number)
    }
  }
 
 
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <div className="App">
        <Logo />
        <Display number={number}/>
        <div className='button-container'>
          <div className='button'>
            <Specials />
            <Numbers clickHandler={numberClickHandler} />
          </div>
          <div className='operators'>
            <Operators clickHandler={operatorClickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
