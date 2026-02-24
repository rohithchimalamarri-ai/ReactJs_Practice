import React from "react";
import { useNavigate } from "react-router";

const Dashboard = ({ username, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <div>
      <h1>Your Logged in {username}</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
