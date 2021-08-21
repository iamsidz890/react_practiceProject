import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from '../UI/Button'
const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className = {classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" id="UserName"></input>
        <label htmlFor="age">Age in years</label>
        <input type="number" id="Age"></input>
        {/* <button type="submit"> Add User</button> */}
        <Button>Add user</Button>
      </form>

    </Card>
  );
};
export default AddUser;
