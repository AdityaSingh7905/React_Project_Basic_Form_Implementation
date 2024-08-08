import useInput from "./hooks/use-input2";

const BasicForm = (props) => {
 
  const valueChangeHandler = (value) => value.trim().length !== 0;
 
  const {
    enteredValue: FirstName,
    enteredValueIsValid: FirstNameIsValid,
    hasError: FirstNameIsInvalid,
    enteredValueChangeHandler: FirstNameChangeHandler,
    enteredValueBlurHandler: FirstNameBlurHandler,
    reset: FirstNameResetHandler,
  } = useInput(valueChangeHandler);

  const {
    enteredValue: LastName,
    enteredValueIsValid: LastNameIsValid,
    hasError: LastNameIsInvalid,
    enteredValueChangeHandler: LastNameChangeHandler,
    enteredValueBlurHandler: LastNameBlurHandler,
    reset: LastNameResetHandler,
  } = useInput(valueChangeHandler);

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    enteredValueChangeHandler: enteredEmailChangeHandler,
    enteredValueBlurHandler: enteredEmailBlurHandler,
    reset: enteredEmailResetHandler,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if(FirstNameIsValid && LastNameIsValid && enteredEmailIsValid)
  {
    formIsValid = true;
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }

    console.log("Form Submitted!!");
    console.log("FirstName : ", FirstName, " LastName : ", LastName, " Email : ", enteredEmail);

    FirstNameResetHandler();
    LastNameResetHandler();
    enteredEmailResetHandler();
  }

  const FirstNameClasses = FirstNameIsInvalid ? 'form-control invalid' : 'form-control';
  const LastNameClasses = LastNameIsInvalid ? 'form-control invalid' : 'form-control';
  const enteredEmailClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={FirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={FirstName}
            onChange={FirstNameChangeHandler}
            onBlur={FirstNameBlurHandler}
          />
          {FirstNameIsInvalid && <p className="error-text">Please enter a valid FirstName.</p>}
        </div>
        <div className={LastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={LastName}
            onChange={LastNameChangeHandler}
            onBlur={LastNameBlurHandler}
          />
          {LastNameIsInvalid && <p className="error-text">Please enter a valid LastName.</p>}
        </div>
      </div>
      <div className={enteredEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {enteredEmailIsInvalid && <p className="error-text">Please enter a valid Email Address.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
