import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import "./App.css";
import Posts from "./components/Posts";
const App = () => {
  const API_URL_USERS = "https://jsonplaceholder.typicode.com/users";
  const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [search, setSearch] = useState(" ");
  function getUsers() {
    fetch(API_URL_USERS)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }
  function getPosts() {
    fetch(API_URL_POSTS)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }
  useEffect(() => {
    getUsers();
    getPosts();
    setFilterData(posts);
  }, []);
  useEffect(() => {
    const filterData = posts.filter((post) => post.title.includes(search));
    setFilterData(filterData);
  }, [search]);
  return (
    <>
      {/* <Users users={users} /> */}
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <Posts posts={filterdata} />
    </>
  );
};

export default App;
