import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error , setError] =  useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length < 0) {
      setError({
        title :   'Error occured' ,
        message : 'Please enter a valid name and age !!!'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title :   'Error occured' ,
        message : 'Please enter a valid age i.e greater than 0 !!'
      });
      return;
    }
    // console.log(enteredAge, enteredName);
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge(""); //still this will not get executed as return in if will finish the function
  };

  const inputChangedHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="UserName"
            onChange={inputChangedHandler}
            value={enteredName}
          ></input>
          <label htmlFor="age">Age in years</label>
          <input
            type="number"
            id="Age"
            onChange={ageChangedHandler}
            value={enteredAge}
          ></input>
          {/* <button type="submit"> Add User</button> */}
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;

// for two way binding , firstly simply update the values with a function i.e setemteredname , but here we
// are not reflecting that value back , so use the value atr in input and set its value to the new updated variable
