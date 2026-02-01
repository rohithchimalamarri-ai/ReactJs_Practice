import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="card-container">
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>E-mail: {user.email}</p>
    </div>
  )
}

export default UserCard
