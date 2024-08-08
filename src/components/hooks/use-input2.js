import { useState , useReducer} from "react";

const initialInputState = { value : '', isTouched : false};

const inputStateReducerFn = (state, action) => {
    if(action.type === 'INPUT'){
        return { value : action.value, isTouched : state.isTouched};
    }
    if(action.type === 'BLUR')
    {
        return { isTouched : true, value : state.value};
    }
    if(action.type === 'RESET'){
        return {
            value : '',
            isTouched : false
        }
    }
    return {
        value : '',
        isTouched : false
    }
};

const useInput = (valueChangeHandler) => {
    // const [enteredValue, setEnteredValue] = useState('');
    // const [valueIsTouched, setValueIsTouched] = useState(false);
    const [InputState, dispatch] = useReducer(inputStateReducerFn, initialInputState);

    const enteredValueIsValid = valueChangeHandler(InputState.value);
    const hasError = !enteredValueIsValid && InputState.isTouched;

    const enteredValueChangeHandler = (event) => {
        dispatch({ type : 'INPUT', value : event.target.value});
        // setEnteredValue(event.target.value);
    }

    const enteredValueBlurHandler = (event) => {
       dispatch({ type : 'BLUR'});
        // setValueIsTouched(true);
    }

    const reset = () => {
       dispatch({ type : 'RESET'});
        // setEnteredValue('');
        // setValueIsTouched(false);
    }

    return {
        enteredValue : InputState.value,
        enteredValueIsValid,
        hasError,
        enteredValueChangeHandler,
        enteredValueBlurHandler,
        reset
    }
};

export default useInput;