import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));



  let formIsValid=false;

if(firstNameIsValid && lastNameIsValid && emailIsValid)
{
  formIsValid=true;
}

const submitHandler=(event)=>{
  event.preventDefault();

  if(!firstNameIsValid || !lastNameIsValid || !emailIsValid)
  {
    return;
  }

  resetFName();
  resetLName();
  resetEmail();
}

  const fnameclasses= firstNameHasError ? "form-control invalid":"form-control";
  const lnameclasses= lastNameHasError ? "form-control invalid":"form-control";
  const emailclasses= emailHasError ? "form-control invalid":"form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <div className={fnameclasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={enteredFirstName} onChange={fNameChangeHandler} onBlur={fNameBlurHandler} />
          {firstNameHasError && <p className="error-text">First name cannot be empty</p>}
        </div>
        <div className={lnameclasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={enteredLastName} onChange={lNameChangeHandler} onBlur={lNameBlurHandler}/>
          {lastNameHasError && <p className="error-text">Last name cannot be empty</p>}
        </div>
      </div>
      <div className={emailclasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailHasError && <p className="error-text">Email cannot be empty or without @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
