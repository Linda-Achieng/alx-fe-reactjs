// src/UserInfo.jsx
import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import UserContext from './UserContext'; // Correctly import UserContext

function UserInfo() {
  const { userData } = useContext(UserContext); // Use context

  return <UserDetails />; // No need to pass userData as prop now
}

export default UserInfo;
