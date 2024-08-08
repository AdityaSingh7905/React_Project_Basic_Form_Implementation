import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    hasError: nameInputIsInValid,
    enteredValueChangeHandler: enteredNameChangeHandler,
    enteredValueBlurHandler: enteredNameBlurHandler,
    reset: enteredNameResetHandler,
  } = useInput((value) => value.trim().length !== 0);

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    enteredValueChangeHandler: enteredEmailChangeHandler,
    enteredValueBlurHandler: enteredEmailBlurHandler,
    reset: enteredEmailResetHandler,
  } = useInput((value) => value.includes("@"));

  // useEffect(() => {
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //   } else{
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // if (!enteredNameIsValid && !enteredEmailIsValid) {
    //   return;
    // }

    enteredNameResetHandler();
    
    enteredEmailResetHandler();

  };

  const formClassesName = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const formClassesEmail = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClassesName}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameChangeHandler}
          onBlur={enteredNameBlurHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={formClassesEmail}>
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid Email.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
