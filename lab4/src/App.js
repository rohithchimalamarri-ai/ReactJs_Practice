import React, { useState } from "react";
import Users from "./components/Users";
// import { users } from "./data/users";
import "./App.css";
const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setUsers(data));
  // const users = [
  //   { id: 1, name: "Suresh", email: "Suresh@gmail.com" },
  //   { id: 2, name: "Kishore", email: "Kishore@gmail.com" },
  //   { id: 3, name: "John", email: "John@gmail.com" },
  //   { id: 4, name: "Mahesh", email: "Mahesh@gmail.com" },
  //   { id: 5, name: "Ramemsh", email: "Ramemsh@gmail.com" },
  //   { id: 6, name: "Rakesh", email: "Rakesh@gmail.com" },
  //   { id: 7, name: "Praveen", email: "Praveen@gmail.com" },
  //   { id: 8, name: "Rohan", email: "Rohan@gmail.com" },
  //   { id: 9, name: "Pramodh", email: "Pramodh@gmail.com" },
  //   { id: 10, name: "Prasanna", email: "Prasanna@gmail.com" },
  // ];
  return (
    <>
      <Users users={users} />
    </>
  );
};

export default App;
