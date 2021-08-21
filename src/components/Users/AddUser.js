const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input type="text" id="UserName"></input>
      <label htmlFor="age">Age in years</label>
      <input type="number" id="Age"></input>
      <button type="submit"> Add User</button>
    </form>
  );
};
export default AddUser ;