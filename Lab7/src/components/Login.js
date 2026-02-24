import React from "react";
import { useNavigate } from "react-router";
const Login = ({
  username,
  password,
  setUserName,
  setPassword,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  console.log(isLoggedIn);
  const navigate = useNavigate();
  const submitHandler = () => {
    if (username === "sri" && password === "kkcc") {
      setIsLoggedIn(true);
      alert("Login");
      navigate("/dashboard");
    } else {
      alert("Please Check User Name or Password. Try again !");
    }
  };
  return (
    <div>
      <h4>Login</h4>
      <div>
        <label>User Name</label>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={submitHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
