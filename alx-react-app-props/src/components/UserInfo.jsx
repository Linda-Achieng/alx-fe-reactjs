// src/UserInfo.jsx
import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import UserContext from './UserContext'; // Import UserContext

function UserInfo() {
  const { userData } = useContext(UserContext); // Use context

  return <UserDetails />;
}

export default UserInfo;
