import React, { useState } from "react";

const Register = () => {
  const [register, setRegister] = useState({});
  const onChangeHandler = (e) => {
    // setRegister((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    setRegister({ ...register, [e.target.name]: [e.target.value] });
  };
  const submitHandler = () => {
    alert("UserName:" + register.username + "\nPassword: " + register.password);
  };
  return (
    <div>
      <h4>Register</h4>
      <div>
        <label>User Name</label>
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          name="username"
        />
      </div>
      <div>
        <label>Mobile No</label>
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          name="mobileno"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => onChangeHandler(e)}
          name="password"
        />
      </div>
      <div>
        <label>City</label>
        <input type="text" onChange={(e) => onChangeHandler(e)} name="city" />
      </div>
      <div>
        <button onClick={submitHandler}>Register</button>
      </div>
    </div>
  );
};

export default Register;
