import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevState => {
      return [...prevState, {id: Math.random().toString(), name: uName, age: uAge}]
    })
  }

  return (
    <>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList} />
    </>
  );
}

export default App;
