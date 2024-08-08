import { useState } from "react";

const useInput = (valueChangeHandler) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const enteredValueIsValid = valueChangeHandler(enteredValue);
    const hasError = !enteredValueIsValid && valueIsTouched;

    const enteredValueChangeHandler = (event) => {
        setEnteredValue(event.target.value); 
      };
    
    const enteredValueBlurHandler = (event) => {
        setValueIsTouched(true);
      };

    const reset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
    }  

     return {
        enteredValue,
        enteredValueIsValid,
        hasError,
        enteredValueChangeHandler,
        enteredValueBlurHandler,
        reset
     } 
};

export default useInput;