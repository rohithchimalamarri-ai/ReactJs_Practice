import React from "react";

const UserCard = ({ user }) => {
  const card_container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
    width: "250px",
    height: "100px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  return (
    <div style={{ card_container }}>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
};

export default UserCard;
