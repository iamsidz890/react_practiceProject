import React , {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList , setUsersList ] =  useState([]);

  const addUserHandler = (uName , uAge) => {
    // here when we require snapshot of the previous array 
    // then we simply use a function inside the useState fn
    setUsersList((prevUsersList)=>{
       return [...prevUsersList , {name : uName , age : uAge , id : Math.random().toString()}]
    });
  }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
