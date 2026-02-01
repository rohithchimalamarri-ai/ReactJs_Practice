import React from "react";
import UserCard from "./UserCard";

const Users = ({ users }) => {
  return (
    <div className="cards-containers">
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
};

export default Users;
