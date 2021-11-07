import React, { useState } from 'react';
import AddUser from "./components/Users/AddUser.js";
import UsersList from './components/Users/UsersList.js';

function App() {

  const [usersList, setUsersList] = useState([]);;


  const addNewUserHandler = (enteredUsername, enteredAge) => {
    setUsersList((previousUsersList) => {
      return [...previousUsersList, {username: enteredUsername, age: enteredAge, id: Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
